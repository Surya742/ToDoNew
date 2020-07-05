

function createLi() {
    var inputData = document.getElementById("input").value;  //get input value
    var node = document.createElement("li");                 // Create a <li> node
    var textnode = document.createTextNode(inputData);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("ul").appendChild(node);     // Append <li> to <ul> with id="myList"
    document.getElementById("input").value = "";
}

function createLi2(event) {
    if(event.key === 'Enter'){
        var inputData = document.getElementById("input").value;  //get input value
    var node = document.createElement("li");                 // Create a <li> node
    var textnode = document.createTextNode(inputData);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("ul").appendChild(node);     // Append <li> to <ul> with id="myList"
    document.getElementById("input").value = "";
    }
    
}

document.getElementById("button").addEventListener("click", createLi);
document.getElementById("input").addEventListener("keypress", createLi2);




