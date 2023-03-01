module.exports = {
  getAccountOfUser : async (req,res) => {
    const id = req.params.id;
    const allAccountsOfUser = await ExpanceAccount.find({owner:id});
    console.log(allAccountsOfUser);
  },
  editAccount : async(req,res)=>{
    const id = req.params.id;
    const {emailAddress,fullname} = req.body;

    const updatedAccount = await ExpanceAccount.update({id}).set({emailAddress,fullname}).fatch();
    console.log(updatedAccount);
  },
  deleteAccount : async(req,res)=>{
    const id = req.params.id;
    const deletedAccount = await ExpanceAccount.delete({id}).fatch();
    console.log(deletedAccount);
  },
  createNewAccount : async (req,res)=>{
    const user = req.user;
    const accountName = req.body.accountName;
    const newAccount = sails.helpers.createExpanceAccount(user.id,accountName);
    console.log(newAccount);
  },shareAccount :async (req,res)=>{
    //share by deff collection.
  }
};
