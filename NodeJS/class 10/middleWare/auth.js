const jwt = require('jsonwebtoken');
const secKey = 'asdasdads'

const authToken = (req,resp,next) =>{
  const header = req.headers['authorization'];
  console.log(header);
  const tokenSplt = header.split(' ')[1]

  if(!tokenSplt) return resp.send('acess denied')

    jwt.verify(tokenSplt, secKey, (err,data)=>{
        if(err) return resp.send({err:err})
            req.user = data
            next()
    })
}

module.exports = authToken