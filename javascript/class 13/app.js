function getName(){
  var text = document.getElementById('name')
  console.log(text.value)
  alert(text.value)

  text.value = " "
}


function setName(){
    var set = document.getElementById('name');

    set.value = "xyz"
}

setName()