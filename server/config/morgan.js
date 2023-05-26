const morgan = require('morgan');
require('dotenv').config();

morgan.token('message', (req, res) => res.locals.errorMessage || '');

const getIpFormat = () => (process.env.NODE_ENV === 'production' ? ':remote-addr - ' : '');
const successResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms`;
const errorResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms - message: :message`;

const successHandler = morgan(successResponseFormat, {
  skip: async (req, res) => res.statusCode >= 400,
  stream: { write: (message) => console.info(message.trim()) },
});

const errorHandler = morgan(errorResponseFormat, {
  skip: async (req, res) => res.statusCode < 400,
  stream: { write: (message) => console.error(message.trim()) },
});

module.exports = {
  successHandler,
  errorHandler,
};
