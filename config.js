const dotenv= require('dotenv')
dotenv.config()

const secretkey= process.env.SECRET_KEY


module.exports={secretkey}