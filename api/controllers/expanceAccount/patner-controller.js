module.exports = {
  addNewPatnerReq : async (req,res)=>{
    const owner = req.user;
    const patnerEmail = req.body.email;
    const accountId = req.params.id;
    const patnerReq = await ExpancePatner.create({accountId,owner:owner.id,patnerEmail}).fatch();
    console.log(patnerReq);
  },reqAccept : async (req,res)=>{
    const expanceId = req.params.id;
    const expanceReq = await ExpancePatner.findOne({id:expanceId}).fatch();
    expanceReq.isAccept = true;
    const updateExpance = await ExpancePatner.update({id:expanceId}).set(expanceReq);
    console.log(updateExpance);
  },onRejectReq : async (req,res)=>{
    const expanceId = req.params.id;
    const deleteExpance = await ExpancePatner.delete({id:expanceId});
    console.log(deleteExpance);
  }
};
