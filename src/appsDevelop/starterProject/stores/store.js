import React from 'react'
import createSagaMiddleware from 'redux-saga'
import { combineReducers, applyMiddleware ,  createStore ,  compose as composeEnhancer } from 'redux'
import myReducers , {customSlicer} from './reducers'
import mySaga from './sagas'
import {toWorkerMiddleware} from 'redux-saga-worker'

//localstorage redux
import localstorage from 'redux-localstorage'
// create worker
import StoreWorker from './storeWorker/store.worker'
// connected-react-router
import { createBrowserHistory  , createHashHistory} from 'history'
import { routerMiddleware } from 'connected-react-router'
const history = createHashHistory()

// router reducer recive history
import { connectRouter } from 'connected-react-router'
const createRootReducer = (history , myReducers) => combineReducers({
    // routes reducer
    router: connectRouter(history),
    // rest of reducers
    ...myReducers
})

export function configureStore() {
    const sagaMiddleware = createSagaMiddleware()
    const [workerMiddleware,initWorkerMiddleware] = new toWorkerMiddleware()

    const middleware = [
        workerMiddleware, // must be first
        routerMiddleware(history),
        sagaMiddleware,
    ]
    const store = createStore(
        createRootReducer(history,myReducers),
        composeEnhancer(
            localstorage(null, { slicer: customSlicer }),
            applyMiddleware(...middleware)
        )
    )
    // then run the saga
    sagaMiddleware.run(mySaga)
    // then init worker
    const onInit = () => {
        console.log("Main to Warker Iniylized")
    }
    const config = {
        store,
        storeWorker : new StoreWorker(),
        initConfig : {
            exampleParam : 'exampleValue'
        },
        onInit
    }
    initWorkerMiddleware(config)

    return [store , history]
}

