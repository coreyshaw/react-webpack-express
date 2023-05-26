const path = require('path');

const root = path.resolve(process.cwd());

module.exports = {
  client: `${root}/client`,
  config: `${root}/config`,
  logs: `${root}/logs`,
  build: `${root}/build`,
  server: `${root}/server`,
  utils: `${root}/utils`,
};
