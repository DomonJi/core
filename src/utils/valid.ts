import { Observable } from 'rxjs/Observable'
import { skip } from 'rxjs/operators/skip'
import { ErrorObservable } from 'rxjs/observable/ErrorObservable'

// think it as asynchronous assert
export function valid<T>(condition: any, error: Error): ErrorObservable | Observable<T> {
  if (!condition) {
    return Observable.throw(error)
  }

  return Observable.empty<T>().pipe(skip(1))
}
