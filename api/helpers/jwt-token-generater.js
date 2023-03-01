module.exports = {
  friendlyName: 'JWT Token Generated Success.',

  description:
    'Take user unique field for create token and store in localstorage for further use.',

  sync: true,

  inputs: {
    user: {
      type: 'ref',
      readOnly: false,
    },
  },

  fn: function (user) {
    const jwt = require('jsonwebtoken');
    const token = jwt.sign({_id:user.user.id},'ThisIsSecretFro1432',{ expiresIn: '24h' });
    return {token};
  },
};
