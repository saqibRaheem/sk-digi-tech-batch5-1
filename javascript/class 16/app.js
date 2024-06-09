// var heading = document.createElement('h1')
// heading.setAttribute('class','text')
// var text = document.createTextNode('Hello World')

// heading.appendChild(text)


// // console.log(heading);
// // console.log(text);

// var div = document.getElementById('main')

// div.appendChild(heading)
// console.log(div.firstChild);



function addItems() {
    var inpVal = document.getElementById('input-items')
    // console.log(inpVal.value);
    var list = document.createElement('li')
    var text = document.createTextNode(inpVal.value)
       inpVal.value = ""

var deleteText = document.createElement('button')
var delText = document.createTextNode('Delete')
deleteText.appendChild(delText)
deleteText.setAttribute('onclick','deleteItem(this)')
 
// console.log(deleteText);

var editText = document.createElement('button')
var eText = document.createTextNode('Edit')
editText.setAttribute('onclick','editItem(this)')
editText.appendChild(eText)



    list.appendChild(text)
    list.appendChild(deleteText)
    list.appendChild(editText)
    // console.log(list);


   var unorderlist = document.getElementById('todo-list')
   unorderlist.appendChild(list)

}


function deleteItem(e){
    console.log(e.parentNode);
    e.parentNode.remove()
}


function editItem(e) {
    console.log(e.parentNode.firstChild.nodeValue);
    var text = e.parentNode.firstChild.nodeValue
    var itemValue = prompt("enter new value")
    e.parentNode.firstChild.nodeValue = itemValue

}