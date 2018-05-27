const assert = require('assert');
const app = require('../../src/app');

describe('\'target\' service', () => {
  it('registered the service', () => {
    const service = app.service('targets');

    assert.ok(service, 'Registered the service');
  });
});
