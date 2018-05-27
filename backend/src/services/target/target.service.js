// Initializes the `target` service on path `/targets`
const createService = require('feathers-mongoose');
const createModel = require('../../models/target.model');
const hooks = require('./target.hooks');
const filters = require('./target.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'target',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/targets', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('targets');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
