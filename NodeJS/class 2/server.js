const express = require('express');
const bodyPaeser = require('body-parser')

const app = express()
app.use(bodyPaeser.json())
// const middleWare = (req,resp,next)=>{
//     //   resp.send('middle ware function')
//     //   console.log('middle ware function');
    
//     if(!req.query.age) resp.send('please provide your age')
//         else if(req.query.age < 18) resp.send('your age is lessthen 18')
//     // if(!req.query.name) resp.send('please provide your name')
//    else next()
// }
// app.use(middleWare);



// app.get('/',(req,resp)=>{
//   resp.send("welcome to home page")
// });
// app.get('/about',middleWare,(req,resp)=>{
//   resp.send("welcome to about page")
// });
// app.get('/contact',(req,resp)=>{
//   resp.send("welcome to contact page")
// });

// var obj = {
//     name:'saqib',
//     email:"sqib123@gmail.com",
//     password:"1234"
// }

// var {name,email,password} = obj
// console.log(name);
// console.log(email);
let dataBase = []
app.post('/signup',(req,resp)=>{

  const { name,email,password } = req.body
     var data  = dataBase.push(req.body)

     console.log(name,email,password);


     resp.send({
        status:200,
        message:"signup sucessfully",
        data:dataBase
     })
     
})


app.post('/login',(req,resp)=>{
    let users = false;
    if(dataBase.length > 0 ){
        dataBase.map((data)=>{
           
           if(req.body.email === data.email){
               users = true;
               resp.send("login sucessfully")
           }
            
        })
        if(users === false){
            resp.send("user not found")
        }
    } else{
        resp.send('invaled data')
    }

})



app.listen(5000,()=>{
    console.log('server is running on port : ' + 5000);
    
});