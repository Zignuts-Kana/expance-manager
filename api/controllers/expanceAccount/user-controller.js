module.exports = {
  getAllUser : async (req,res)=>{
    const user = await ExpanceUser.find().select('emailAddress fullname patnerOfAccounts');
    console.log(user);
    // res.view('')
  },
  editUser : async(req,res)=>{
    const id = req.params.id;
    const {emailAddress,fullname} = req.body;

    const updatedUser = await ExpanceUser.update({id}).set({emailAddress,fullname}).fatch();
    console.log(updatedUser);
  },
  deleteUser : async(req,res)=>{
    const id = req.params.id;
    const deletedUser = await ExpanceUser.delete({id}).fatch();
    console.log(deletedUser);
  }
};
