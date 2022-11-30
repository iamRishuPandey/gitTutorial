
// TRAVERSING THE DOM //
//var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // FirstChild
// console.log(itemList.firstChild);
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';


// lastChild
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);itemList.previousElementSibling.style.color = 'green';

// createElement

// Create a div
// var newDiv =  document.createElement('div');

// // Add class
// newDiv.className= 'hello';

// // Add id
// newDiv.id = 'hello1';

// // Add attr
// newDiv.setAttribute('title', 'Hello Div');

// // Create text node
// var newDivText = document.createTextNode('Hello World');

// // Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);

// var list = document.getElementById("items");
// var newDiv1 =  document.createElement('div');
// // Add class
// newDiv1.className= 'hello';

// // Add id
// newDiv1.id = 'hello1';

// // Add attr
// newDiv1.setAttribute('title', 'Hello Div');

// // Create text node
// var newDivText1 = document.createTextNode('Hello word');
// newDiv1.appendChild(newDivText1);
// console.log(newDiv1);
// newDiv.style.fontSize = '20px';
// list.insertBefore(newDiv1, list.children[0]);

//add and delete Item
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//Form submit event
form.addEventListener('submit', addItem);
//Delete event
itemList.addEventListener('click',removeItem);
//Add item
function addItem(e) {
    e.preventDefault();

    //Get input value
    var newItem = document.getElementById('item').value;

    //Create new li elemt
    var li = document.createElement('li');
    //Add class 
    li.className = 'list-group-item';
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    //Create del btn elemnt
    var deleteBtn = document.createElement('button');
    //Add classes to del btn
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    
    //Apend text node
    deleteBtn.appendChild(document.createTextNode('x'));
    //Append button to li
    li.appendChild(deleteBtn);
    //Apend li to list
    itemList.appendChild(li);
}

//Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')) {
        if(confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}