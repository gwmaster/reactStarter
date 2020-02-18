import { MAIN_CONFIG } from './mainConfig.const'
import { WORKERS } from '../storesWorker/const'

const setDeveloperMode = payload => ({ type: MAIN_CONFIG.SET_DEVELOPER_MODE, payload, sendTo: WORKERS.WORKER })

export const MainConfigActions = {
  setDeveloperMode
}