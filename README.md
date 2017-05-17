# koa-rx &nbsp; [![Build Status](https://travis-ci.org/mfellner/koa-rx.svg?branch=master)](https://travis-ci.org/mfellner/koa-rx) [![codecov](https://codecov.io/gh/mfellner/koa-rx/branch/master/graph/badge.svg)](https://codecov.io/gh/mfellner/koa-rx)

RxJS middleware for koa. Return Observables in your middleware.

### Usage

```javascript
const Koa = require('koa')
const koaRx = require('koa-rx').default

const app = new Koa()
app.use(koaRx())
app.use(ctx => Observable.of(418).do(n => ctx.status = n))
```
