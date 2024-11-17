const DbUser = require('../model/userModel')

//create user
const createUser = async(req,res)=>{
    try {
    const {firstName, lastName , email , password } = req.body

    const user = await DbUser.findOne({
        email:email
    });
    if(user){
        res.status(409).json({message:'user already exist'})
    }

    const newUser = new DbUser({

        firstName:firstName,
        lastName:lastName,
        userName:`${firstName}${lastName}`,
        email:email,
        password:password,
        status:1
    })
    await newUser.save();
    res.status(201).json({success:true,
        data:newUser
    })
    } catch (error) {
        res.status(500).json({success:false,
            message:error.message 
        })
    }
    

}

module.exports = {
    createUser
}