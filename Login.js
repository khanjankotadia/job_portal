const db = require("../db.js");
const jwt = require("jsonwebtoken")
const config= require('../Config/config.js')
const secretkey=config.secretkey


const getLogin = (req,res) => {
    const email = req.query.email
    const password = req.query.password
    const q= "SELECT user_id FROM `user_manage` WHERE email ='"+email+"' AND password ='"+password+"';";
    console.log(email)
    console.log(password)
    db.query(q,(err,data)=>{
        if(err)
            {
                return res.json(err)
            }else{
                if(data.length>0){
                    const token= jwt.sign({user_id:data[0].user_id,roleid:data[0].roleid},secretkey, { expiresIn: '1h' })
                    console.log(token)
                    return res.json(token)
                    // return res.json(data[0].user_id)
                    
                }
                else{res.json(0)}
            }
    })
} 

module.exports={getLogin}