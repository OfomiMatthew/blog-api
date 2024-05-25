const jwt = require('jsonwebtoken')
const verifyToken = (token)=>{
    return jwt.verify(token,process.env.JWT_KEY,(err,decoded)=>{
        if(err){
            return false
        }else{
            return decoded //decoded represents the original or actual id of the user
        }
    })

}

module.exports = verifyToken;