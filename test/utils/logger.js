const log4js = require('log4js');

log4js.configure({
    appenders: { file: { type: 'file', filename: 'logs/test.log' } },
    categories: { default: { appenders: ['file'], level: 'info' } }
});

const logger = log4js.getLogger();

module.exports = logger;
