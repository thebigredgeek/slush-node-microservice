import winston from 'winston';
import {NODE_ENV} from '../config';

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
