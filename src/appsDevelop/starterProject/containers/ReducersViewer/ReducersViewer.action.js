import { REDUCERS_VIWER } from './ReducersViewer.const'
import { WORKERS } from 'redux-saga-worker'

const setLiveViewerReducers = payload => ({ type: REDUCERS_VIWER.SET_LIVE_VIEWR_REDUCERS, payload, sendTo: WORKERS.MAIN })

export const DevelopActions = {
  setLiveViewerReducers
}