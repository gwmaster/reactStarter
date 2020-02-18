import { LOCAL_STORAGE } from './LocalStorage.const'

const saveData = payload => ({ type: LOCAL_STORAGE.SAVE_DATA, payload})


export const LocalStorageActions = {
  saveData
}