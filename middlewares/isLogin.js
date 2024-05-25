const getTokenFromHeader = require("../utils/getTokenFromHeader")
const verifyToken = require("../utils/verifyToken")
verifyToken

const isLogin = (req,res,next)=>{
    //get token from header
    const token = getTokenFromHeader(req)
    const decodedUser = verifyToken(token)
    
    // save user into req object

    req.userAuth = decodedUser.id
    if(!decodedUser){
        return res.json({
            message:"Invalid/Expired token, please login again"
        })
    }else{
        next()
    }
    // verify token
    
}

module.exports = isLogin