var arr = ["karachi","islamabad","punjab"]
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
var user = prompt("ENter your city")

// if(user === arr[0]){
//     alert("Welcome to " + user)
// }
// else if(user === arr[1]){
//     alert("Welcome to " + user)
// }
// else if(user === arr[2]){
//     alert("Welcome to " + user)
// }
// else{
//     alert("City not found")
// }
// var i = 5
// var j = i++ + ++i
// console.log(i);

for(var i = 0; i < 3; i++){
    console.log(arr[i])
    if(user === arr[i]){
        alert("wellcome to " + arr[i])
        break;
    }
}

console.log("not found");