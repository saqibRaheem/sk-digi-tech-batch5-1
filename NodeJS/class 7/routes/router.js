const route = require('express').Router()
const userData = require('../controllar/userControllar')
const auth = require('../middleWare/auth')

route.get('/',(req,resp)=>{
    resp.send('this is route function')
});
route.get('/home',(req,resp)=>{
    resp.send('this ishome page')
});
route.get('/about',(req,resp)=>{
    resp.send('this is about')
});

route.post('/signup',userData.signupData)
route.post('/login',userData.loginData)
route.put('/update/:id',userData.updateData)
route.delete('/del/:id',userData.deleteData)
route.get('/data',auth,userData.getData)

module.exports = route



