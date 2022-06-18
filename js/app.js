//Manipulación del DOM

//getElementByID()

// const titulo=document.getElementById('titulo-principal');
// console.log(titulo);

//GetElementByClassName()

// const itemsLista=document.getElementsByClassName('items-lista');
// console.log(itemsLista);

//getElementsByTagName()

// const itemsLista=document.getElementsByTagName('li');
// console.log(itemsLista);

//querySelector()

// const contenedor=document.querySelector('div');
// console.log(contenedor);

// Va a seleccionar sólo el primer div del DOM
// Si quiero seleccionar todos los div,
// voy a utilizar el siguiente selector

//querySelectorAll()

// const contenedor=document.querySelectorAll('div');
// console.log(contenedor);

//Estilizando elementos desde Javascript

// const titulo = document.querySelector("#titulo-principal");
// titulo.style.color = "red";

// console.log(titulo);

// const listaItems = document.querySelectorAll(".items-lista");

// for (let i = 0; i < listaItems.length; i++) {
//   listaItems[i].style.fontSize = "3rem";
// }

// console.log(listaItems);

// Creando elementos desde Javascript
const ul = document.querySelector("ul");
const li = document.createElement("li");

// Agregando elementos
ul.append(li);

// Modificando el texto

const primerItemLista = document.querySelector(".items-lista");

console.log(primerItemLista);
console.log(primerItemLista.innerText);
// con innerText muestro el texto de adentro de la etiqueta
console.log(primerItemLista.textContent);
// con textContent muestro el texto además de la posición del texto
console.log(primerItemLista.innerHTML);
// con innerHTML se muestra el código interno de la etiqueta
// con sus indentaciones
// es lento y peligroso porque alguien puede añadir
// scripts para robar información privada de usuarios
// guardadas en session cookies

li.innerText = "X-Men";

// Modificando atributos y clases
li.setAttribute("id", "ultimo-item");
const ultimoItem = document.querySelector("#ultimo-item");
console.log(ultimoItem);
// ultimoItem.style.color = "blue";

li.removeAttribute('id');

const titulo=document.querySelector('#titulo-principal');
console.log(titulo.getAttribute('id'));