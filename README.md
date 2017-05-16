# koa-rx &nbsp; [![Build Status](https://travis-ci.org/mfellner/koa-rx.svg?branch=master)](https://travis-ci.org/mfellner/koa-rx) [![codecov](https://codecov.io/gh/mfellner/koa-rx/branch/master/graph/badge.svg)](https://codecov.io/gh/mfellner/koa-rx)

RxJS middleware for koa. Return Observables in your middleware.

### Usage

```typescript
import Koa = require('koa')
import koaRx from 'koa-rx'

const app = new Koa()
app.use(koaRx())
app.use(ctx => Observable.of(418).do(n => ctx.status = n))
```
