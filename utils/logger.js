import { createLogger, format, transports } from 'winston';

const logFormat = format.combine(
  format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  format.errors({ stack: true }),
  format.splat(),
  format.json()
);

const logger = createLogger({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  format: logFormat,
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.simple()
      )
    }),
    new transports.File({ 
      filename: 'logs/error.log', 
      level: 'error' 
    }),
    new transports.File({ 
      filename: 'logs/combined.log' 
    })
  ],
  exceptionHandlers: [
    new transports.File({ filename: 'logs/exceptions.log' })
  ]
});

// Very simple stream
export const stream = {
  write: function(message) {
    logger.info(String(message).trim());
  }
};

export default logger;