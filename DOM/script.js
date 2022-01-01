/*var button = document.getElementsByTagName("button");

button.addEventListener("click",function () {
    console.log("CLICK!!!");
})*/

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

/*button.addEventListener("click",function() {
    console.log("click is working");
})*/

/*button.addEventListener("click",function() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("testing"));
    ul.appendChild(li);
})*/

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ""; 

}


button.addEventListener("click",function() {
    if (inputLength() > 0) {       // To prevent blank entry from adding*/
        /* var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = ""; //After we create the new li & added to the ul, we need the input value to now be empty string */
        createListElement();
    }
   
})

input.addEventListener("keypress",function(event) {
    //console.log(event);
    if (inputLength() > 0 && event.keyCode === 13) {       //if (input.value.length > 0 && event.keyCode === 13) {      
        /* var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";  */
        createListElement();
    }
   
}) 

