import Logger from 'js-logger'
import moment from 'moment'
// logger
import { createLogger } from 'redux-logger'
const logger = createLogger({
  collapsed: true
  // for ignore
  // predicate: (getState, action) => action.showLog
})
export function setLog (level) {
  Logger.useDefaults()
  Logger.setHandler(Logger.createDefaultHandler({
    formatter: function (messages, context) {
      // prefix each log message with a timestamp.
      messages.unshift(`[${context.name} @ ${moment(new Date()).format('HH:mm:ss.SSS')}]`)
    }
  }))
  Logger.setLevel(Logger[level])
}

export function initLog(middleware){
  // redux loger config
  const { LOG_REDUX, LOG_GLOBAL, LOG_GLOBAL_LEVEL } = self.FILE_CONFIG.LOG
  if (LOG_REDUX) { middleware.push(logger) }
  if (LOG_GLOBAL) { setLog(LOG_GLOBAL_LEVEL) }
}
