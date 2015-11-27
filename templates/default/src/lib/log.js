import winston from 'winston';
import {NODE_ENV} from '../environment';

switch (NODE_ENV) {
  case 'development':
    winston.level = 'debug';
  default:
    winston.level = 'info';
    break;
}

const log = winston.log.bind(winston);
const info = winston.info.bind(winston);
const warn = winston.warn.bind(winston);
const error = winston.error.bind(winston);

export {
  log,
  info,
  warn,
  error
};
