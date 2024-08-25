const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const app = express()
app.use(bodyParser.json())
require("dotenv").config()
const bcrypt = require('bcrypt');
const saltRounds = 10;



// const db = "mongodb+srv://saqibraheem1999:saqib1234@cluster0.ahnx4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(process.env.db_URL).then(()=>{
    console.log("connected!");
    
}).catch(()=>{
    console.log("not connected!");
    
})


const Schema = mongoose.Schema;


const signupSchema = new Schema({
    fname: String,
    email: String,
    password: String,
})

const signupModel = new mongoose.model('signup', signupSchema)


app.post('/signup', async(req,resp)=>{
try {
    const {fname,email,password} = req.body

    if(!email) return resp.send("invalid data")
        else{
            const salt =  bcrypt.genSaltSync(saltRounds)
            console.log(salt);
            
            const hash = bcrypt.hashSync(password,salt)
           const data =   new signupModel({
                fname : fname,
                email: email,
                password : hash,
              })
              data.save()

              resp.send({
                status:200,
                message:"data save sucessfully",
                data : data
              })
        }
    
} catch (error) {
    resp.send({
        message:"error",
        err:error
    })
}
   


})

app.post('/login', async (req,resp)=>{
try {
    const {email,password} = req.body
     const getData = await signupModel.findOne({email:email})
    if(!getData) return resp.send("data not found!")
   
     const match =  bcrypt.compareSync(password, getData.password);
     console.log(match);
     
   if(!match) return resp.send("user not exist")
    resp.send({

        messsage:"login sucess",
        data : getData
})

 
    

    
} catch (error) {
    resp.send({
        message:"error",
        err:error
    })
}
})

app.get('/data', async (req,resp)=>{
try {
    const data = await signupModel.findOne({email:"saqib@gmail.com"})
    if(!data) return resp.send("data not found!")
        resp.send({
            status:200,
            message:"data get sucessfully",
            data : data
          })

} catch (error) {
    resp.send({
        message:"error",
        err:error
    })
}

})


app.listen(5000,()=>{
   console.log("app is running on port  " + 5000)
})