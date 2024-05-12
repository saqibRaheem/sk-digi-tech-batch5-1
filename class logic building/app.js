// var a = +prompt("enter first value");
// var b = +prompt("enter second value");

// var a = 5;
// var b = 6;
// var c = b;
// b = a;
// a = c
// if (a === a) {
//     // a = 6;
//     console.log('a'+ b)
// } else if (b == 6) {
//     b = 5
//     console.log(b)
// }
// a = a + b;
// b = a - b;
// a = a - b



// console.log('a', a) //6
// console.log('b' ,b) //5

// var result = ''
// for (var i = 5; i >= 1; i--) {
//     for (var j = 1; j <= i; j++) {
//         // console.log(j)
//         result += j
//     }
//     console.log(result)
//     result = ""
    
// }


var arr = [0,2,4,7,8,4,2,6,8,0,1,5]


var ar2 = []

  console.log(ar2.indexOf(0));

for(i=0;i<arr.length;i++){
    console.log(arr[i], "<<<<");
   if(ar2.indexOf(arr[i]) == -1){
    ar2.push(arr[i])

   }


}

console.log(ar2);


// console.log(ar2.indexOf(4));