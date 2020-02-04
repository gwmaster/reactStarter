import { put, select, takeLatest } from 'redux-saga/effects'
import { LOCATION_CHANGE, push } from 'connected-react-router'

import { ROUTES } from './Routes.const'
import { WORKERS } from 'redux-saga-worker'

function * navigate ({ payload: url }) {
    yield put(push(url))
}

function * locationChange () {
    let { router: { location } } = yield select(state => state)
    yield put({ type: ROUTES.SET_LOCATION, payload: location, sendTo: WORKERS.WORKER })
}

export default function * () {
    yield takeLatest(ROUTES.NAVIGATE_SAGA, navigate)
    yield takeLatest(LOCATION_CHANGE, locationChange)
}
