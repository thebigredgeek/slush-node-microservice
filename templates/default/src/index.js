import {log} from './lib/log';

var interval = null;

function up () {
  if (!interval) {
    interval = setInterval(() => log.log('hello world'), 5000);
  }
}

function down () {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
}

export {
  up,
  down
};
