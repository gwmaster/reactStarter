import { put } from 'redux-saga/effects'
import {WORKERS} from 'redux-saga-worker'

import { MAIN_CONFIG } from './mainConfig.const'

function * setBuildParams () {
  yield put({ type: MAIN_CONFIG.SET_DEVELOPER_MODE, payload: PRODUCTION == false, sendTo: WORKERS.MAIN })
  yield put({ type: MAIN_CONFIG.SET_VERSION, payload: VERSION, sendTo: WORKERS.MAIN })
  yield put({ type: MAIN_CONFIG.SET_COMMITHASH, payload: COMMITHASH, sendTo: WORKERS.MAIN })
  yield put({ type: MAIN_CONFIG.SET_BRANCH, payload: BRANCH, sendTo: WORKERS.MAIN })
}

export default function * () {
  yield * setBuildParams()
}
