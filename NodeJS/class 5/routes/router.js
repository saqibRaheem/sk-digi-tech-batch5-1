const route = require('express').Router()
const userData = require('../controllar/userControllar')


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
route.put('/update/:id',userData.updateData)
route.delete('/del/:id',userData.deleteData)
route.get('/data',userData.getData)

module.exports = route



