
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
//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'goodBye';
//console.log(headerTitle.innerText );
//headerTitle.innerHTML = '<h3>Hello</h3>';
//header.style.borderBottom = 'solid 3px #000';
//getElements by className
// var title = document.getElementsByClassName('title');
// console.log(title);
// title[0].style.fontWeight = 'bold';
// title[0].style.color= 'green';
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello1';
// items[2].style.backgroundColor = 'green';

// for(var i = 0; i < items.length; i++) {
//     items[i].style.fontWeight = 'bold';
// }
//GETELEMENT BY TAGNAME
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello1';
// li[2].style.backgroundColor = 'green';

// for(var i = 0; i < li.length; i++) {
//     li[i].style.fontWeight = 'bold';
// }
//querySelector
// var header = document.querySelector('#main-header');
// header.style.borderbottom = 'solid 4px red';
// var input = document.querySelector('input');
// input.value = 'Hello World';
// var item = document.querySelector('.list-group-item:nth-child(2)');
// item.style.color = 'green';
//querySelectorAll
var titles = document.querySelectorAll('.title');

console.log(titles);

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'green';
}