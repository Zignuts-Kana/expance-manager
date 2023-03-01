module.exports = {
  getAllExpanceOfAccount : async (req,res)=>{
    // const user = req.user;
    const accountId = req.params.id;
    const expances = await ExpanceData.find({accountId}).select('amount isDebited isPatner accountId owner');
    console.log(expances);
    let credit=0; let debit=0;
    expances.forEach(expance => {
      if (expance.isDebited) {
        debit = debit+expance.amount;
      }else{
        credit = credit+expance.amount;
      }
    });
    console.log(credit , ' <-> ' , debit);
    // res.view('')
  },getAllExpanceOfUser : async (req,res)=>{
    const owner = req.user;
    const accountId = req.params.id;
    const expances = await ExpanceData.find({owner:owner.id,accountId}).select('amount isDebited isPatner accountId owner');
    console.log(expances);
    let credit=0; let debit=0;
    expances.forEach(expance => {
      if (expance.isDebited) {
        debit = debit+expance.amount;
      }else{
        credit = credit+expance.amount;
      }
    });
    console.log(credit , ' <-> ' , debit);
    // res.view('')
  },getAllExpanceOfPatner : async (req,res)=>{
    const owner = req.user;
    const patnerId = req.params.id;
    const expances = await ExpanceData.find({isPatner:true,owner:owner.id,patnerId}).select('amount isDebited isPatner patnerId accountId owner');
    console.log(expances);
    let credit=0; let debit=0;
    expances.forEach(expance => {
      if (expance.isDebited) {
        debit = debit+expance.amount;
      }else{
        credit = credit+expance.amount;
      }
    });
    console.log(credit , ' <-> ' , debit);
  },
  createExpance:async(req,res)=>{
    let owner = req.user;
    let patnerId;
    const accountId = req.params.id;
    const {isDebit,amount} = req.body;
    const isShared = req.body.isShared?req.body.isShared:undefined;
    if (isShared) {
      patnerId = owner.id;
      owner = await ExpanceAccount.findOne({id:req.params.id}).select('owner -_id');
    }
    const expance = await ExpanceData.create({amount,isDebit,isShared,patnerId,accountId,owner:owner.id}).fetch();
    console.log(expance);
    // res.view('')
  },
  editUser : async(req,res)=>{
    const owner = req.user;
    const id = req.params.id;
    const {isDebit,amount} = req.body;
    const isShared = req.body.isShared?req.body.isShared:undefined;
    let {accountId,patnerId} = await ExpanceData.findOne({id:req.params.id}).select('accountId patnerId -id');
    if (isShared) {
      patnerId = owner.id;
      owner = await ExpanceAccount.findOne({id:req.params.id}).select('owner -_id');
    }
    const updatedUser = await ExpanceData.update({id}).set({amount,isDebit,isShared,patnerId,accountId,owner:owner.id}).fatch();
    console.log(updatedUser);
  },
  deleteUser : async(req,res)=>{
    const id = req.params.id;
    const deletedUser = await ExpanceData.delete({id}).fatch();
    console.log(deletedUser);
  }
};

