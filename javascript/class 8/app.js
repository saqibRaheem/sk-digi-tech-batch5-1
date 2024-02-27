// var para ="my name is hamza and i am currently live ";
// var newPara = para.split(" ");
// // var save;
// for (let i = 0; i < newPara.length; i++) {
//     if(newPara[i]=="hamza"){
//         newPara[i]=="Hamza Rauf";
//         // save=new
//     }
    
// }
// console.log(newPara);

        //  0123456789012   index number
var text = "saqib raheem";
// console.log(text.length);
// console.log(text.slice(0,2) + " 0 , 1 ");
// console.log(text.slice(1,3)+ " 1 , 2 ");
// console.log(text.slice(2,4)+ " 2 , 3 ");
// console.log(text.slice(3,5)+ " 3 , 4 ");
// console.log(text.slice(4,6)+ " 4 , 5 ");
// console.log(text.slice(5,7)+ " 5 , 6 ");

for(i=0;i < text.length; i++){
    // console.log(i);
    if(text.slice(i,i+1) === " "){
        console.log("match");
        text = text.slice(0,i) + "humzarauf" + text.slice(i+1)
    }
}
console.log(text);
// console.log(text + ".");
// if(text.slice(5,7) === "  "){
//     console.log("space found");
// }
