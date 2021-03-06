const pr = 'ROUTES_'

const ROOT = ''
const DEVELOP = `${ROOT}/develop`
const LAZY = `${ROOT}/lazy`
const PAGES = {
  HOME : `${ROOT}/home`,
  DEVELOP : {
    REST_API : `${DEVELOP}/rest-api`,
    SVG_PREVIEW : `${DEVELOP}/svg_preview`,
    I18 : `${DEVELOP}/i18`,
    ROUTES_EXAMPLE : `${DEVELOP}/routes-example`,
    LOCAL_STORAGE : `${DEVELOP}/local-storage`,
    REDUCERS_VIEWER: `${DEVELOP}/reducer-viewer`,
  },
  LAZY : {
    PAGE1 : `${LAZY}/page1`,
    PAGE2 : `${LAZY}/page2`,
  }
}


export const ROUTES = {
  NAVIGATE_SAGA: `${pr}NAVIGATE_SAGA`,
  PAGES
}