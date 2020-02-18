import { LOCAL_STORAGE } from './LocalStorage.const'
import {WORKERS} from 'redux-saga-worker'

const saveData = payload => ({ type: LOCAL_STORAGE.SAVE_DATA, payload , sendTo : WORKERS.ALL})


export const LocalStorageActions = {
  saveData
}