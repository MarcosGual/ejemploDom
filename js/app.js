//Recorriendo el DOM

let ul=document.querySelector('ul');
// console.log(ul)
// console.log(ul.parentNode);
// console.log(ul.parentNode.parentNode);

// console.log(ul.parentElement);
// console.log(ul.parentElement.parentElement);

//Diferencia entre nodo y elemento
// const html=document.documentElement;
// console.log(html);
// console.log(html.parentNode);
// console.log(html.parentElement);

//Nodos hijos

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor='blue';

// console.log(ul.children);

console.log(ul.previousSibling.previousSibling);
console.log(ul.nextSibling);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);