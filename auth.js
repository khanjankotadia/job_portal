const jwt= require('jsonwebtoken')
const config= require('../Config/config.js')

const secretkey=config.secretkey
const auth= (req,res,next)=>{
    try {
        let token= req.headers.authorization;
        if(token){
            // if (token.startsWith('Bearer ')) {
            //     token = token.slice(7, token.length);
            // }
            
          //  console.log("Token received:", token);
            jwt.verify(token, secretkey, (err, user) => {
                if (err) {
                    console.log("Token verification error:", err);
                    return res.status(401).json({ message: "Invalid token" });
                }else{
                    // console.log("Decoded user:", admin_id);
                    let userId;
                    if (user.admin_id) {
                        userId = user?.admin_id;
                    } else if (user.company_id) {
                        userId = user?.company_id;
                        
                    } else {
                        userId = user?.userid;
                    }
                    console.log("which id in middlware =>> ", userId)
                    req.userid = userId; // Attach the user to the request object
                    req.roleid= user.roleid;
                    next();
                }

                
            });
           
        }else{
            console.log("no token found in the node")
            return res.json("No token found")
        }
    } catch (error) {
        console.log("Middlewere Error = >",error);
    }
}

module.exports={auth}