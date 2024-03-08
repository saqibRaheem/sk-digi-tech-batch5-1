    // var text = "World War II"
    // for (var i = 0; i < text.length; i++) {
    //     if (text.slice(i, i + 12) === "World War II") {
    //      text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
    //      console.log(text);
    //      }
    //     }
        
    // var firstChar = text.indexOf("World War II");
    // console.log(firstChar);


// var text = "World War II"
// var firstChar = text.indexOf("World War II");
//  if (firstChar !== -1) {
//  text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
//  console.log(text);
//  }



// for(i=0;i<text.length;i++){
// if(text.slice(i,i + 12) === "World War II"){
//   text = text.slice(0,i) + " the Second World War " + text.slice(i+12)
// }
// }

// console.log(text);
// console.log(text.indexOf("T"));

// var find = text.indexOf("World War II");
// if(find !== -1){
// text = text.slice(0,find) + " the Second World War " + text.slice(find + 12)
// }
// console.log(text);

// 0 !== 0  true

var text = "The New Yorker magazine doesn't be allow the phrase World War II. They say it should be  World War II";

// var segIndex = text.lastIndexOf("be");
// console.log(segIndex);
// console.log(text.indexOf("be"));

// console.log(text.indexOf("The"));

// console.log(text.length -1);
// console.log(text[86]);


var result = text.replace(/World War II/g,"the Second World War")
var result2 = text.replaceAll("World War II","the Second World War")
console.log(result);
// console.log(result2);