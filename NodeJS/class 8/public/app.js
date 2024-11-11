function login(){
    var email1 = document.getElementById('email').value
    var password = document.getElementById('password').value
    // console.log(email,password);

    axios.post('http://localhost:5000/login',{
        email:email1,
        password:password
    },).then((res)=>{
       console.log("response >>>>>",res);
       alert(res.data.message)
       if(res.data.sucess){
              window.location.href = './profile.html'
              getData()
       }
       
    }).catch((err)=>{
     console.log("err >>>> " , err);
     
    })
    
}



const getData = () =>{
    document.getElementById('listData').innerHTML 
    axios.get('http://localhost:5000/data')
    .then((res)=>{
       console.log("response >>>>>",res);
       res.data.data.map((data,index)=>{
       var innerData = `
           <li>${data.email}
           <buttton class="btn" onClick="deleteBtn('${data._id}')">Delete</button>
           <buttton class="btn2">Edit</button>
           </li>
       `
       document.getElementById('listData').innerHTML += innerData
       })
     
       
    }).catch((err)=>{
     console.log("err >>>> " , err);
    })
}

function deleteBtn(_id){
    console.log(_id);
    
    axios.delete('http://localhost:5000/del/'+_id)
    .then((res)=>{
     console.log(res)
     alert(res.data.message)
     document.getElementById('listData').innerHTML = ''
     getData()
       
    }).catch((err)=>{
     console.log("err >>>> " , err);
    })
    
}

getData()

