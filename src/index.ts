import { Context } from 'koa'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/toPromise'

export default function koaRx() {
  return async (ctx: Context, next: () => Promise<any>): Promise<any> => {
    const data = await next()

    if (data instanceof Observable) {
      return data.toPromise()
    }
  }
}
