// target-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

require('mongoose-type-email');

module.exports = function (app) {

  const mongooseClient = app.get('mongooseClient');

  const target = new mongooseClient.Schema({

    name: {
      type: String,
      required: [true, 'Company name required']
    },

    keyContact: {
      name: {
        type: String,
        required: [true, 'Company name required']
      },

      email : {
        type: mongooseClient.SchemaTypes.Email,
        required: [true, 'Email is required']
      }

    },

    status: {
      researching: Boolean,
      pendingApproval: Boolean,
      approved: Boolean,
      declined: Boolean
    },

    createdAt: { type: Date, 'default': Date.now },

    updatedAt: { type: Date, 'default': Date.now }
  });

  return mongooseClient.model('target', target);
};
