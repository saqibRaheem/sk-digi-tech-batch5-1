const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const app = express()
app.use(bodyParser.json())


const db = "mongodb+srv://saqibraheem1999:saqib1234@cluster0.ahnx4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"



mongoose.connect(db).then(() => {
    console.log("connected!");
}).catch(() => {
    console.log("not connected");
})

const Schema = mongoose.Schema;


const signupSchema = new Schema({
    name: String,
    email: String,
    password: String,
})

const signupModel = new mongoose.model('signup', signupSchema)




let dataBase = []
app.post('/signup', (req, resp) => {

    const { name, email, password } = req.body


    const result = new signupModel({
        name: name,
        email: email,
        password: password,
    })

    result.save()

    //    console.log("line num 11>>",req.body);

    //   let data = dataBase.push(req.body)

    resp.send({
        status: 200,
        message: "data add",
    })


})
app.get('/login', (req, resp) => {
    resp.send("welcome to about page")
})




app.listen(5000, () => {
    console.log("server start in port : " + 5000);

})