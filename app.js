 /* Data Types:
 undefined, null, boolean,string,symbol,number, and object
 */
// Examin the document object
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent = 'Hello';
// console.log(document.forms);
// console.log(document.link);
//console.log(document.images);
//console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'goodBye';
//console.log(headerTitle.innerText );
headerTitle.innerHTML = '<h3>Hello</h3>';
header.style.borderBottom = 'solid 3px #000';
//getElements by className
var title = document.getElementsByClassName('title');
console.log(title);
title[0].style.fontWeight = 'bold';
title[0].style.color= 'green';
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello1';
items[2].style.backgroundColor = 'green';

for(var i = 0; i < items.length; i++) {
    items[i].style.fontWeight = 'bold';
}