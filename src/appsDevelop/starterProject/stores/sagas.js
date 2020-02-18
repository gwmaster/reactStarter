import { fork } from 'redux-saga/effects'
import Routes from '../routes/Routes.saga'
import I18 from '../i18/i18.sagas'

export default function * sagaMiddleware () {
 yield fork(Routes)
 yield fork(I18)
}