import { I_18 } from './i18.const'

const loadTranslate = () => ({ type: I_18.LOAD_TRANSLATE_SAGA })
const setLanguage = payload => ({ type: I_18.SET_LANGUAGE, payload })
const setJSON = payload => ({ type: I_18.SET_LANGUAGES_FILE_DATA, payload })

export const i18Action = {
  loadTranslate,
  setLanguage,
  setJSON,
}

