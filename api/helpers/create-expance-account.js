module.exports = {
  inputs: {
    ownerId: {
      type: 'string',
      readOnly: false,
    },
    accountName:{
      type:'string',
      readOnly:false,
    }
  },
  fn:async function ({ownerId,accountName}){
    const accountNumber = Math.floor(1000000000 + Math.random() * 9000000000);
    const checkForSameName = await ExpanceAccount.findOne({accountName});

    if (checkForSameName) {
      return {Message:'Name alredy taken!'};
    }

    const createAccount = await ExpanceAccount.create({accountNumber,owner:ownerId,accountName}).fetch();
    return (createAccount);
  }
};
