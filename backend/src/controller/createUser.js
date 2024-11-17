const DbUser = require('../model/userModel')

//create user
module.exports = async(req,res)=>{
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
        if (error.name === 'ValidationError') {
            errorMessage = 'Invalid user data. Please check the input fields.';
          }
        res.status(500).json({success:false,
            message:error.message 
        })
    }
    

}

