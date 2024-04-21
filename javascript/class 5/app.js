// var arr = ["karachi","islamabad","punjab"]
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// var user = prompt("ENter your city")
// 
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

// for(var i = 0; i < 3; i++){
//     console.log(arr[i])
//     if(user === arr[i]){
//         alert("wellcome to " + arr[i])
//         break;
//     }
// }

// console.log("not found");



// var text = "lfhwieuriwuebkfhbmsdbcmnd c"

// console.log(text);
// document.write(text)

// for( i = 1 ; i < 10; i++){
//     console.log(i);
// }



// var num = 24
// var result = ++num + num++ - num-- + num
// console.log(result);
// 24++
// var user = prompt("Enter city name"); //lahore
// var city = ["Karachi", "Lahore", "isl", "Quetta"];
//0         1       2      3

// if(user === city[0]){
//     console.log("city of light");
// }else if(user === city[1]){
//     console.log("lahore");
// }else if(user === city[2]){
//     console.log("isl");
// }else if(user === city[3]){
//     console.log("quetta");
// }else{
//     console.log("not found");
// }

// var flag = false;
// for (var i = 0; i < city.length; i++) {
//     if (user === city[i]){
//         console.log(user," is present");
//         flag = true;
//         break;

//     }
// }


// if(flag === false){
//     console.log(user,"is not present");
// }




// var a = 5;
// a =  10
// console.log(a);  // 5
// console.log(b);  // a




var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];
// lastNames[1]

for (var i = 0; i < firstNames.length; i++) {
    for (var j = i; j <= i; j++) {
        
            fullNames.push(firstNames[i]+lastNames[j]);
        

            console.log(fullNames)
    }
}
var txt = "saqib"
console.log(txt.toLowerCase());