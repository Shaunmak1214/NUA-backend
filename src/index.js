const app = require('./app');
/* const config = require('./config/config'); */
const logger = require('./config/logger');
const { wakeDyno } = require('heroku-keep-awake');
const tempPORT = process.env.PORT || 5000;
const DYNO_URL = 'http://space-bot-2021.herokuapp.com/v1/upcomingLaunches';
const opts = {
  interval: 15,
  logging: false,
  stopTimes: { start: '00:00', end: '01:00' }
}

server = app.listen(tempPORT, () => {
  wakeDyno(DYNO_URL, opts);
  logger.info(`Listening to port ${tempPORT}`);
});

process.on('uncaughtException', function (err) {
  console.log(err);
});