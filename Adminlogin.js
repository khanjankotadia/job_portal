const db = require("../db.js");
const jwt = require("jsonwebtoken")
const config= require('../Config/config.js')
const secretkey=config.secretkey


const getLogin = (req,res) => {
    const email = req.query.email
    const password = req.query.password
    const q= "SELECT admin_id FROM `admin_login` WHERE email ='"+email+"' AND password ='"+password+"';";
    console.log(email)
    console.log(password)
    db.query(q,(err,data)=>{
        if(err)
            {
                return res.json(err)
            }else{
                if(data.length>0){
                    const token= jwt.sign({admin_id:data[0].admin_id,roleid:data[0].roleid},secretkey, { expiresIn: '1h' })
                    // console.log(token)
                    return res.json(token)
                    
                }
                else{res.json(0)}
            }
    })
} 

module.exports={getLogin}