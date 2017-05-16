import Koa = require('koa')
import supertest = require('supertest')
import { Observable } from 'rxjs'
import { Server } from 'http'
import koaRx from '../src'

describe('koa-rx', () => {
  let app: Koa
  let server: Server
  let http: supertest.SuperTest<supertest.Test>

  beforeEach(() => {
    app = new Koa()
    server = app.listen(3333)
    http = supertest.agent(server)
  })

  afterEach(() => { if (server) server.close() })

  test('resolve an Observable', async () => {
    app.use(koaRx())
    app.use(ctx => Observable.of(418).do(n => ctx.status = n))
    await http.get('/').expect(418)
  })

  test('do not use an Observable', async () => {
    app.use(koaRx())
    app.use(async ctx => ctx.status = 418)
    await http.get('/').expect(418)
  })

  test('do not use koa-rx', async () => {
    app.use(ctx => Observable.of(418).delay(500).do(n => ctx.status = n))
    await http.get('/').expect(404)
  })
})
