const route = require('express').Router()


route.get('/',(req,resp)=>{
    resp.send('this is route function')
});
route.get('/home',(req,resp)=>{
    resp.send('this ishome page')
});
route.get('/about',(req,resp)=>{
    resp.send('this is about')
});

module.exports = route