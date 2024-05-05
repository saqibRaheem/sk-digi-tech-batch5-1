function getNum(num){
    var result  = document.getElementById('result')
    // var num = document.getElementById('seven').value
    // console.log(result);
    result.value += num
}


function clearNum(){
    var result  = document.getElementById('result')


    result.value = " "
    // console.log(result);
}


function getResult(){
    var result  = document.getElementById('result');
   
    var final = eval(result.value)

       result.value = final

}