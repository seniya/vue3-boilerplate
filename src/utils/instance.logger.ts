import log from 'loglevel'

const isProduction = process.env.NODE_ENV === 'production'

log.setLevel(isProduction ? 'info' : 'debug')

const logger = {
  debug: log.debug,
  info: log.info,
  error: log.error,
  warn: log.warn
}

export { logger }
