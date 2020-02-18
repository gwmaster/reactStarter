const pr = 'ROUTES_'

const ROOT = ''
const DEVELOP = `${ROOT}/develop`
const PAGES = {
  HOME : `${ROOT}/home`,
  DEVELOP : {
    REST_API : `${DEVELOP}/rest-api`,
    REDUCERS_MANAGER : `${DEVELOP}/reducers-manager`,
    SVG_PREVIEW : `${DEVELOP}/svg_preview`,
    I18 : `${DEVELOP}/i18`,
    ROUTES_EXAMPLE : `${DEVELOP}/routes-example`,
    LOCAL_STORAGE : `${DEVELOP}/local-storage`
  }
}


export const ROUTES = {
  NAVIGATE_SAGA: `${pr}NAVIGATE_SAGA`,
  PAGES
}