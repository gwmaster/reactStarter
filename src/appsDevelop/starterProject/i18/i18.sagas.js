import { put, select, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { loadTranslations, setLocale } from 'react-redux-i18n'

import { I_18 } from './i18.const'

function * loadTranslate () {
  let {
    i18SelectedLanguage
  } = yield select(state => state)
  const translateArr = TRANSLATE
  const translateObj = {}

  for (let i = 0; i < translateArr.length; i++) {
    let lang = translateArr[i]
    const { data } = yield axios.get(`assets-translate/${lang}.json`)
    translateObj[lang] = data
  }

  const langArr = Object.keys(translateObj).map(prefix => ({
    prefix,
    name: translateObj[prefix].languageName
  }))

  yield put({ type: I_18.SET_AVAIBLE_LANGUAGES, payload: langArr})
  yield put({ type: I_18.SET_LANGUAGES_FILE_DATA, payload: translateObj})

  if (i18SelectedLanguage && translateObj[i18SelectedLanguage]) {
    yield put(setLocale(i18SelectedLanguage))
  } else {
    yield put({ type: I_18.SET_LANGUAGE, payload: langArr[0].prefix })
  }
}

function * loadTranslationsSaga ({ payload }) {
  yield put(loadTranslations(payload))
}

function * setLanguage ({ payload }) {
  yield put(setLocale(payload))
}

export default function * () {
  yield takeLatest(I_18.LOAD_TRANSLATE_SAGA, loadTranslate)
  yield takeLatest(I_18.SET_LANGUAGE, setLanguage)
  yield takeLatest(I_18.SET_LANGUAGES_FILE_DATA, loadTranslationsSaga)
}
