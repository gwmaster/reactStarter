import { fork } from 'redux-saga/effects'
import Routes from '../routes/Routes.saga'


export default function * sagaMiddleware () {
 yield fork(Routes)
}