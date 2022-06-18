// //Manipulación del DOM

// getElementByID()

// const titulo=document.getElementById('titulo-principal');
// console.log(titulo);

// //GetElementByClassName()

// const itemsLista=document.getElementsByClassName('items-lista');
// console.log(itemsLista);

// //getElementsByTagName()

// const itemsLista=document.getElementsByTagName('li');
// console.log(itemsLista);

// //querySelector()

// const contenedor=document.querySelector('div');
// console.log(contenedor);

// // Va a seleccionar sólo el primer div del DOM
// // Si quiero seleccionar todos los div,
// // voy a utilizar el siguiente selector

// //querySelectorAll()

// const contenedor=document.querySelectorAll('div');
// console.log(contenedor);

// //Estilizando elementos desde Javascript

// const titulo = document.querySelector("#titulo-principal");
// titulo.style.color = "red";

// console.log(titulo);

// const listaItems = document.querySelectorAll(".items-lista");

// for (let i = 0; i < listaItems.length; i++) {
//   listaItems[i].style.fontSize = "3rem";
// }

// console.log(listaItems);

// // Creando elementos desde Javascript
// const ul = document.querySelector("ul");
// const li = document.createElement("li");

// // Agregando elementos
// ul.append(li);

// // Modificando el texto

// const primerItemLista = document.querySelector(".items-lista");

// console.log(primerItemLista);
// console.log(primerItemLista.innerText);
// // con innerText accedo al texto de adentro de la etiqueta
// console.log(primerItemLista.textContent);
// // con textContent accedo al texto además de la posición del texto
// console.log(primerItemLista.innerHTML);
// // con innerHTML accedo al código interno de la etiqueta
// // con sus indentaciones
// // es lento y peligroso porque alguien puede añadir
// // scripts para robar información privada de usuarios
// // guardadas en session cookies

// li.innerText = "X-Men";

// // Modificando atributos y clases
// li.setAttribute("id", "ultimo-item");
// const ultimoItem = document.querySelector("#ultimo-item");
// console.log(ultimoItem);
// ultimoItem.style.color = "blue";

// li.removeAttribute('id');

// // Ver atributo id del título
// const titulo=document.querySelector('#titulo-principal');
// console.log(titulo.getAttribute('id'));

// //Agregando y quitando clases a elementos
// li.classList.add('items-lista');
// console.log(li.getAttribute('class'));
// li.classList.remove('items-lista');
// console.log((li.classList.contains('items-lista')));

// //Eliminar un elemento

// li.remove();

// // Recorriendo el DOM: TRANSVERSING
// // Recorrido de Nodos Padres

// let ul = document.querySelector("ul");
// console.log(ul);
// console.log(ul.parentNode);
// console.log(ul.parentElement);
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// const html = document.documentElement;
// console.log(html);
// console.log(html.parentNode);
// console.log(html.parentElement);

// // Recorrido de Nodos Hijos
// console.log(ul.childNodes);
// //la indentación es contada en los nodos de texto
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor='blue';

// // Devolviendo una colección html
// // en lugar de nodos
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// //Recorriendo hermanos

// const div=document.querySelector('div');
// console.log(div.childNodes);

// console.log(ul.previousSibling);
// console.log(ul.nextSibling);

// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);