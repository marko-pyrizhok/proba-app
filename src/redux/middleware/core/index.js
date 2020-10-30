import thunk from "redux-thunk";
import throttleMiddleware from './throttle.middleware'
import debounceMiddleware from './debounce.middleware'
import measureMiddleware from './measure.middleware'

const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
  }

export default [
    throttleMiddleware,
    debounceMiddleware,
    measureMiddleware,
    logger,
    thunk
]
