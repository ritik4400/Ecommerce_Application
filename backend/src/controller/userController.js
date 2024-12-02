const DbUser = require('../model/userModel')

const fetchUserById= async(req,res)=>{
    try {
        const { id } = req.params;

        const foundUser = await DbUser.findById(id);
        if(!foundUser){
            res.status(404).json('user not exist')
        }
        res.status(200).json({
            success:true,
            data:foundUser
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const fetchUsers= async(req,res)=>{
    try {
       const foundUser = await DbUser.find();
       if(!foundUser){
        res.status(404).json('no user found')
    }
    res.status(200).json({
        success:true,
        data:foundUser
    })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const updateUser = async(req,res)=>{
    try {
        const { id } = req.params
        const { firstName, lastName , email , password , userName } = req.body

        const userExist = await DbUser.find(
            {
                email
                //status:{$in:[1]}
            });
        if(!userExist){
            res.status(409).json('user not exist')
        }        
        const updateUser = await DbUser.findByIdAndUpdate(
            id,
            {
                firstName, lastName , email , password ,  userName
            },
            {new:true}
        )
        res.status(200).json({success:true,
            data:updateUser
    })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ success: false, message: "User ID is required" });
    }

    const user = await DbUser.findOne({ _id: id });

    if (!user) {
      return res.status(404).json({ success: false, message: "User does not exist" });
    }

    const result = await DbUser.updateOne({ _id: id }, { $set: { status: -1 } });

    if (result.nModified === 0) {
      return res.status(500).json({ success: false, message: "Failed to delete user" });
    }

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: { id, status: -1 },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
module.exports = {
    fetchUserById,
    fetchUsers,
    updateUser,
    deleteUser
}