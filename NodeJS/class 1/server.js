// console.log("first node js class");
// const http = require('http');
// const server = http.createServer((req,resp)=>{
//     resp.writeHead(404,{'content-Type':'plane/text'});
//     resp.write('create first http server thorugh node js')
//     resp.end()


// })

// server.listen(3000,()=>{
//     console.log('server is running on port : ' + 3000);
// })


// const fs = require('fs');
// const path = require('path')
// const pathFile = path.join(__dirname)

// console.log(pathFile)
// fs.writeFileSync(pathFile+'/text.txt',"update data" )

// const text = 'create first text file through filesystem'
// fs.writeFileSync('text.txt',text);

// fs.appendFile('text.txt',' Asynchronously append data to a file, creating the file if it does not yet exist. data can be a string or a Buffer',(err)=>{
//     if(err) console.log("update faield");
//     if(!err) console.log("text updated");
// })


// fs.readFile('text.txt','utf8',(err,data)=>{
//     console.log(data);
// })

// fs.unlink('text.txt',(err)=>{
//    if(err) console.log(">>>>>>>>  ",err);
//    if(!err) console.log("file deleted");
// })



// console.log("1");

// setTimeout(()=>{
//  console.log('2');
// },3000)

// console.log("3");


// let a = 20
// let b = 0


// setTimeout(()=>{

//   b=30

// },0)


// let waitResult = new Promise((res,rej)=>{

//     setTimeout(()=>{
//      res(30)
//     },2000)

// })

// waitResult.then((data)=>{
// b =data
// console.log(a+b);
// })

