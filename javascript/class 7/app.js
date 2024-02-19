// var text = prompt("enter your text")
// console.log(text);
// 
// var firstLatter = text.slice(0,1).toUpperCase();
// console.log(firstLatter);


// var allText = text.slice(1).toLowerCase()
// console.log(allText);

// var result = firstLatter + allText
// console.log("final result > " , result);

// var month = "December";
// var new1;
// if(month.length > 3){
//   new1 = month.slice(0,3);
// }
// console.log(new1);

var text = prompt("enter your text");
// var text = "asdh  gasjdhag";

// console.log(text.slice(0,2));
// console.log(text.slice(1,3));
// console.log(text.slice(2,4));
// console.log(text.slice(3,5));
// console.log(text.slice(4,6));

for(i=0;i<text.length;i++){
    console.log(i);

    if(text.slice(i,i + 2) === "  "){
        alert("space found!")
    }
}


// slice(1,5)
// slice(i,i+2)