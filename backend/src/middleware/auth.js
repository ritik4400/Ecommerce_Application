const jwt = require("jsonwebtoken");

async function authentication(req,res,next){

    try {
        
        const authHeader = req.headers.authorization;
        
    if(!authHeader){
        return res.status(401).json({message:'Authorization header missing'})
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).send({ message: 'Unauthorized' });
    }
    let jwtSecretKey = process.env.JWT_SECRET_KEY;

    jwt.verify(token , jwtSecretKey , (err,decoded)=>{
        if (err) {
            return res.status(401).send({ message: 'Invalid token' });
          }
          req.user = decoded;
          next();
    })
} catch (error) {
    
    return res.status(500).json({ message: 'Internal server error', error: error.message });
}

}

module.exports ={
    authentication
}