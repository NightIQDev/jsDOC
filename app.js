/*function scoreText (score) {
	if (score >= 45) {
		document.querySelector('li').textContent = 'Eres muy bueno, tienes = ' + score + ' Puntos';
	}
	else{
		document.querySelector('li').textContent = 'Malaso  ' + score;
	}
}

scoreText(32)

// #id <= solo una por query .clase <= puedes colocar muchas	



const parrafo = document.querySelector('.god')

// cambiar texto desde JS
parrafo.textContent = 'lorem js'

// Colocar html desde js
parrafo.innerHTML = '<b>Texto con innerHTML</b>'

// crear clase desde js
parrafo.classList.add('noAnal') // <== podemos colocar mas de una clase


// creamos una etiqueta html  y posicionamos desde js

const lista = document.getElementById('list-box') // traemos el ul por su ID

const li = document.createElement('li') // imbocamos un li

li.textContent = 'Primer elemento' // le agregamos un texto

lista.appendChild(li) // lo colocamos dentro del ul




const arrayElement = ['uno', 'dos', 'tres','cac'] // creamos un array



arrayElement.forEach(item => { // creamos funcion por flecha para usar el argumento como variable almacenadora de los items del array

	const li = document.createElement('li') // imbocamos un li

	li.textContent = item // le agregamos item ya que ahi esta nuestro texto

	lista.appendChild(li) // lo colocamos dentro del ul

	// este codigo se ejecuta 4 veces, por eso se crean 4 lineas
})



const lista = document.getElementById('list-box') // traemos el ul por su ID

const arrayElement = ['uno', 'dos', 'tres','cac'] // creamos un array

arrayElement.forEach(item =>{ // creamos funcion por flecha para usar el argumento como variable almacenadora de los items del array

	lista.innerHTML += `<li>${item}</li>` // imbocamos un li (+= esto lo colocamos para que se sume uno debajo del otro, con = asignamos el inner y con el + sumamos cada columna)
})

------------------------------------------------------------

const boxDad = document.getElementById('box')

let array = ['Luis', 'Carlos', 'Manuel']

array.forEach(names => {

	const h1 = document.createElement('h1')	

	h1.textContent = names

	boxDad.appendChild(h1)
})

---------------------------------------------------

// el fragment en este caso nos sirve para almacenar toda nuestra estructura y asi evitar el reflow

var element  = document.getElementById('ul'); // assuming ul exists
var fragment = document.createDocumentFragment();
var browsers = ['Firefox', 'Chrome', 'Opera','Safari', 'Internet Explorer'];

browsers.forEach(function(browser) {
    var li = document.createElement('li');
    li.textContent = browser;
    fragment.appendChild(li);
});

element.appendChild(fragment);

---------------------------------------------------

const lista = document.getElementById('list-box')

let array = ['Luis', 'Carlos', 'Manuel']

const fragment= document.createDocumentFragment()

array.forEach(names =>{
	const li = document.createElement('li') 
	li.textContent = names 
	const childNode = fragment.firstChild
	fragment.insertBefore(li, childNode)
})

lista.appendChild(fragment);






const ulDad =  document.getElementById('list-box')

let arrayI = ['Marcos', 'Late', 'Uriel','Mau']

const fragment = new DocumentFragment()

arrayI.forEach(names =>{
	const li = document.createElement('li')
	li.classList.add('list')
	const b = document.createElement('b') 
	b.textContent = 'Nombre: '
	const span = document.createElement('span')
	span.classList.add('span-hero')
	span.textContent = names
	li.appendChild(b)
	li.appendChild(span)
	fragment.appendChild(li)

})

ulDad.appendChild(fragment)




const ulDad =  document.getElementById('list-box')

let arrayI = ['Marcos', 'Late', 'Uriel','Mau']

let fragment = ''

arrayI.forEach(element => {
	 fragment +=  `
	 <li class = "list">
	 	<b>Nombre:</b> <span>${element}</span>
	 </li> `
	
});

ulDad.innerHTML = fragment





const lista = document.getElementById('lista')

let array = ['Marcos', 'Late', 'Uriel','Mau']

const template = document.getElementById('template-hero').content

const fragment = new DocumentFragment()

array.forEach(item =>{
	template.querySelector('.text-span').textContent = item
	const clone = template.cloneNode(true)
	fragment.appendChild(clone)
})

lista.appendChild(fragment)



const btnA = document.querySelector('.btn1')
const btnD = document.querySelector('.btn2')

const span = document.getElementById('span')
let numero = 0

btnA.addEventListener('click', () =>{
	span.textContent = numero++ + ' sex'
})

btnD.addEventListener('click', () =>{
	span.textContent = numero--
})

)




const box = document.querySelector('.box')
const span = document.getElementById('span')
let numero = 0

box.addEventListener('click', (e)=>{
	if (e.target.classList.contains('btn1')) {
		span.textContent= numero++
		
	}
	else if(e.target.classList.contains('btn2')){
		span.textContent= numero--
		if (numero <= 0 ){
			span.textContent = 'NO PUEDES BAJAR MAS'
		}
	}
	else{
		span.textContent = 'a los botones gil'
	}
}



const box = document.querySelector('.box')
const span = document.getElementById('span')
let numero = 0

box.addEventListener('click', (e)=>{
	if (e.target.classList.contains('btn1')) {
		span.textContent= numero++
		
	}
	if(e.target.classList.contains('btn2')){
		span.textContent= numero--
	}

	e.stopPropagation()

})

document.body.addEventListener('click', () =>{
	console.log('click')
})



const btnl = document.querySelector('.btn11')
const backG = document.querySelector('.box1')

btnl.addEventListener('click', (e) =>{
	console.log('litin')
	e.stopPropagation()
})
backG.addEventListener('click', () =>{console.log('litin2')})

*/