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

const deleteUser = async(req,res)=>{
    try{
        const  { id } = req.params;
        //console.log(id);
        
        const userExist = await DbUser.findOne(
            { email })
           // console.log("Email"+userExist);
        if(!userExist){
            res.status(409).json('user not exist')
        } 
        const deleteUser = await DbUser.updateOne(
            {email},
            {
                $set:{status:-1}
            }
        )
        res.status(200).json({success:true,
            message:'user deleted successfully',
            data:deleteUser
    })
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:error.message})
    }
}
module.exports = {
    fetchUserById,
    fetchUsers,
    updateUser,
    deleteUser
}