const target = require('./target/target.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(target);
};
