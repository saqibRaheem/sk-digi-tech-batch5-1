function login(){
    var email1 = document.getElementById('email').value
    var password = document.getElementById('password').value
    // console.log(email,password);

    axios.post('http://localhost:5000/login',{
        email:email1,
        password:password
    }).then((res)=>{
       console.log("response >>>>>",res);
       alert(res.data.message)
       
    }).catch((err)=>{
     console.log("err >>>> " , err);
     
    })
    
}