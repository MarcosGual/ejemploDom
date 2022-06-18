//Manipulación del DOM

//getElementById()

// const titulo=document.getElementById('titulo-principal');
// console.log(titulo);

//getElementByClassName()

//const itemsLista=document.getElementsByClassName('items-lista');
//console.log(itemsLista);

//getElementsByTagName()

// const itemsLista=document.getElementsByTagName('li');
// console.log(itemsLista);

//querySelector()

// const contenedor=document.querySelector('div');
// console.log(contenedor);

//querySelectorAll()

// const contenedores=document.querySelectorAll('div');
// console.log(contenedores);

// Estilizando elementos desde Javascript

// const titulo = document.querySelector("#titulo-principal");
// titulo.style.color = "red";

// const listaItems = document.querySelectorAll(".items-lista");
// console.log(listaItems);

// for (let i = 0; i < listaItems.length; i++) {
//   listaItems[i].style.fontSize = "3rem";
// }

// Creando elementos desde Javascript

const ul = document.querySelector("ul");
const li = document.createElement("li");
ul.append(li);

// console.log(ul);

// Accediendo al contenido de las etiquetas
const primerItemLista = document.querySelector(".items-lista");

//innerText: me muestra el contenido
// console.log(primerItemLista.innerText);
//textContent: me muestra el contenido con las indentaciones
// console.log(primerItemLista.textContent);
//innerHTML: accedo a todo el contenido html
// console.log(primerItemLista.innerHTML);

li.innerText = "X-Men";

//Atributos desde JavaScript

li.setAttribute('id', 'ultimo-item');
const ultimoItem=document.querySelector('#ultimo-item');
console.log(ultimoItem);
// ultimoItem.style.color="blue";
li.removeAttribute('id');

const titulo=document.querySelector('#titulo-principal');
console.log(titulo.getAttribute('id'));

li.classList.add('items-lista');
console.log(li.getAttribute('class'));
// li.classList.remove('items-lista');
console.log(li.classList.contains('items-lista'));

li.remove();