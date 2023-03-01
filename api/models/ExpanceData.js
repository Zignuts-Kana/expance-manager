/**
 * ExpanceUser.js
 *
 * A user who can log in to this application.
 */

module.exports = {
  attributes: {
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    accountNumber: {
      type: 'number',
      required: true,
      unique: true,
    },

    amount: {
      type: 'number',
      required:true,
    },

    patners: { type: 'json', columnType: 'array' },

    owner: {
      type: 'ref',
      collection: 'expanceuser',
    },
    isDebited:{
      type: 'boolean',
    },
    isPatner:{
      type: 'boolean',
    },

    accountName: {
      type: 'string',
      required: true,
      description: 'Full representation of the account\'s name.',
      maxLength: 120,
      example: 'Mary Sue van der Account',
    },
  },
};

