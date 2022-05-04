/*

for (i = 0; i < jugadores.length ; i++){
	console.log(jugadores[i])
}

FOREACH

// jugadores.forEach( (pj, l) => {console.log(pj}) DE ESTA MANERA IMPRIMIMOS POR CONSOLA CADA VALOR DEL ARREGLO

// jugadores.forEach( (pj, l) => {console.log(pj.nombre}) DE ESTA MANERA IMPRIMIMOS POR CONSOLA UN VALOR ESPECIFICO DEL ARREGLO (EN ESTE CASO NOMBRE)

// SI QUEREMOS GUARDAR LOS VALORES QUE IMPRIMIMOS POR CONSOLA EN UN ARREGLO DEVEMOS CREAR UN ARREGLO VACIO PARA ASI LUEGO EMPUJAR LO QUE SACAMOS

// const all = []; jugadores.forEach( (pj, l) => {all.push(pj.nombre)}); console.log(all)

*/

// .MAP

// EL METODO MAP SIRVE IGUAL QUE UN FOREACH SOLO QUE ESTE SI ALMACENA ARRAYS

// PODEMOS VER EN ESTE EJEMPLO COMO IMPRIMIMOS EN UNA P LOS DIFERENTES NOMBRES QUE HAY EN NUESTRO ARRAY

/*
var casa = document.querySelector('div')

const nombres  = jugadores.map( pj => {
	var lol = document.createElement('p')
	lol.className = 'picha'
	lol.textContent = pj.nombre + " LA EDAD DE ESTE JUGADOR ES: " + pj.edad
	casa.appendChild(lol)
})




//PODEMOS VER QUE PODEMOS CREAR NUEVOS PARAMETROS DEL ARRAY, CON LOS VALORES DEL MISMO
const nombres  = jugadores.map( pj => {
	return{
		nameAge: pj.nombre + ' -- EDAD => ' + pj.edad,
		lvlName: pj.nombre + ' -- LVL => ' + pj.nivel
	}
})

console.log(nombres)



//PODEMOS VER QUE PODEMOS AGREGAR VALORES A NUESTRO ARRAY

const nombres  = jugadores.map( pj => {
	return{
		...pj,
		piernas: 'si'
	}
})

console.log(nombres)

//PODEMOS VER QUE PODEMOS REEMPLAZAR VALORES 


const nombres  = jugadores.map( pj => {
	return{
		...pj,
		nombre: 'LOLITO'
	}
})

console.log(nombres)


//PODEMOS VER QUE PODEMOS ADJUNTAR 2 MAP EN UNA SOLA CAMBIANDO ASI 2 VALORES 

const nombres  = jugadores.map( pj => {
	return{
		...pj,
		nombre: 'LOLITO'
	}
}).map(pj => {
	return{
		...pj,
		edad: pj.edad * 3
	}
})

console.log(nombres)

//FILTER

// PODEMOS VER QUE UTILIZAMOS FILTER PARA BUSCAR UN VALOR EN ESPECIFICO EN UN ARRAY

// EN ESTE CASO ESTAMOS IMPRIMIENDO AQUELLOS QUE NO TIENEN LA EDAD DE 10
const resultado = jugadores.filter((pj) => pj.edad != 10)


console.log(resultado)

//REDUCE

/*const edads = jugadores.reduce((total, jp)=> total - jp.edad, 88)
console.log(edads)



// vemos que creamos con allNiveL un arreglo donde se almacenara nuestro nivel, luego copiamos allNivel junto con el nivel de los jugadores asi creando un objeto
// con set limpiamos aquellos valores repetido y con Array.from() guardamos esos objetos en un array
// reduce nos sirve para reducir un conjunto de objetos/valores en una sola variable/array
const lev = jugadores.reduce(function(allNivel, jp){
	return Array.from( new Set([...allNivel, ...jp.nivel]))
}, [])

console.log(lev)


// EL METODO SORT NOS SIRVE PARA ORDENAR NUMEROS DE OBJETOS/ARRAY

//ESTE RECIBE 2 VALORES EN LA FUNCION YA QUE UNA ES EL MENOR Y EL OTRO ES EL MAYOR DE LOS NUMEROS ASI LOGRANDO QUE SE ORDENEN

const loco = jugadores.sort(function (a,b) {
	
	if (a.edad < b.edad  ) {
		return 1
	}else {
		return -1
	}
})

console.log(loco)



const loco = jugadores.sort((a,b) => a.edad > b.edad ? 1 : -1 )
console.log(loco)



//FIND NOS SIRVE PARA BUSCAR VALORES ESPECIFICOS DE NUESTRO ARRAY/OBJETOS


const caca = jugadores.find(function(jp) {

	if(jp.edad === 10){
		return 1
	}
}
	
})

console.log(caca)

const caca = jugadores.find((jp) => jp.edad === 10)

console.log(caca)



//SOME NOS SIRVE PARA RETORNAR UNA VALOR TRUE O FALSE, TRUE SI EL VALOR ESTA EN LA LISTA O FALSE SI NO LO ESTA

const loco = jugadores.some((a) => a.nombre === 'Calenton')

console.log(loco)

const loco = jugadores.some(function(a) {
	if (a.nombre === 'Calenton'){
		return true
	}
})

console.log(loco)




// Every nos sirve para comprobar si algun parametro es igual en todo nuestro array u objeto

const caca = jugadores.every(function(a){
	if(a.nombre.includes('a')){
		return true
	}

})

console.log(caca)

// Ejemplo juntando varios metodos 


const coco = jugadores.map(({nombre, edad,nivel}) => ({
	player: nombre + " NIVEL => " + nivel,
	edad
})).filter((jp) => jp.edad > 10 ) // esta filtra las edades mayor a 10
   .sort((a,b) => b.edad - a.edad) // esta las organiza de mayor a menor 
   .reduce((total, jp) => total + jp.edad, 0) // esta suma todas las edades


console.log(coco)




// FUNCIONES GENERADOR

function * generador (i) {
	const j = 5 * (yield(i*10)) // 50 (esto pasa a ser 50 ya que al ejecutarse por segunda vez nos multiplica el 5 * el valor que pasemos en el segundo next())
	const k = yield (2 * j / 4) // 5
	return (i + j + k) // 65
}

const generator = generador(10)
console.log(generator.next(20))
console.log(generator.next(10))
console.log(generator.next(5))




function * generador(){
	yield // se ejecuta primero yield el cual no devuelve nada (valores indefinidos)
	foo( yield "hola") // luego se ejecuta el yield dentro de la funcion devolviendo el parametro 'hola'
	// luego se ejecuta la funcion foo devolviendonos el resultado de console.log('IMPRIMIENDO ' + i)

	Tener en cuenta que al ejecutar el foo() hay que pasarle algo dentro de los parentecis para que se pueda ejecutar de manera correcta, ya que a esta se le asigno un valor
}

function foo(i){
	console.log('IMPRIMIENDO ' + i)
}

const g = generador()

console.log(g.next())
console.log(g.next())
console.log(g.next('tlazlaca'))


NO ENTENDI
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(resultado => {
	return resultado.json()
})
.then(resultadoFinal =>{
	console.log(resultadoFinal)

})

Distructuring

const myArray = ['hola', 'me', 'llamo', 'juan']


function objeto(){
	return {
		'id': 1,
		'name': 'juan',
		'age': 20
	}
}

function array(){
	return ['hola', function() {console.log('chao pescao')}]
}


const {id, name} = objeto() // distructuting object

console.log(id + " " + name)

const [data,mifuncion] = array() // distructuting array

mifuncion()

console.log(data)



async function lil() {
	const result = await fetch("https://jsonplaceholder.typicode.com/todos/1")
	const data = await result.json()
	console.log(data)

	const {id, title} = data
	const box = document.querySelector('.box-titles')
	const li = document.createElement('li')
	li.innerHTML = `Tu id es: <b>id (${id})</b> y tu titulo es: <b>${title}</b>`
	box.appendChild(li)


}


lil()










const getDatos = () => {

	return new Promise((result, reject) => {

		if (jugadores.length > 1) {
			reject(new Error('tus muertos'))
		}
		setTimeout(() => {
		result(jugadores) 
	},1000)
	})
		
}

//getDatos().then((jugadores) => console.log(jugadores))


async function caca(){
	try {
		const lolito = await getDatos()

		console.log(lolito)
	} catch(err) {
		
		console.log(err.message);
	}
	

}

caca()

EJEMPLO ASYNC AWAIT Y PROMISES


const div = document.querySelector('div')
const p = document.createElement('p')
const pT = document.createElement('p')
var lol;

const inames = jugadores.map((e) => {
		lol = e.nombre
		
}) 

console.log(lol)
console.log(inames.length)
const namesPj = () =>{

	return new Promise((result, reject) => {

		if (inames.length < 6 ){
		setTimeout(() =>{ 
			reject(new Error(pT.innerHTML = `ERROR`, div.appendChild(pT)))}, 500)
	}
	setTimeout(() => {
		result(p.innerHTML = ` ESTOS SON LOS NOMBRES DE NUESTROS SO CIOS <b>${lol}</b>`, div.appendChild(p) ) 
	},500) 	
	

})


}


async function caca(){
	try {
		const lolito = await namesPj()

		console.log(lolito)
	} catch(err) {
		
		console.log(err.message);
	}
	

}

caca()

EJEMPLO DE CLASES




class clientes{
	constructor(name,age,money,city){
		this.age = age 
		this.name = name
		this.money = money
		this.city = city
	}

	setName(newName){
		this.name = newName
	}

	setCity(newCity){
		this.city = newCity
	}

	setMoney(newMoney){
		this.money = newMoney
	}

	setAge(newAge){
		this.age = newAge
	}

	// Toma el valor y te lo devuelve	

	getMoney(){
		return this.money
	}

	getCity(){
		return this.city
	}

	getName(){
		return this.name
	}

	getAge(){
		return this.age
	}

}





const form = document.querySelector('form')

form.addEventListener('submit',(e) =>{
	e.preventDefault()
	const nombre = document.querySelector('.loli').value
	const edad = document.querySelector('.loli1').value
	const dinero = document.querySelector('.loli2').value 
	
	const ciudad = document.querySelector('.loli3').value
	const cliente = new clientes(nombre,edad,dinero,ciudad) 
	var a = [cliente]	
	console.log(a)
	
	
	
})

class UserCreator{
	constructor(email,pass){
		this.email = email
		this.pass = pass
		if(email.includes('@') == false || email.includes('.com') == false)  {
			this.email = 'ERROR'
			this.pass = pass
		}
	}


}


const user = new UserCreator('dsadasd@gmail.com', 'popodeano')

console.log(user)


class Human{
	constructor(age, name){
		this.age = age 
		this.name = name		
	}

	setName(newName){
		this.name = newName
	}

	getAge(){
		return this.age
	}

	static setAge(newAge){
		this.age = newAge
	}
}

const human1 = new Human(15,'Luis' )

const human2 = new Human(12,'Carlos' )

const human3 = new Human(25,'Javier' )

console.log(human1)


distructuring obj

let jugadores = {
	nombre: 'Luisa',
	edad: 10,
	nivel:1 
}


let {nombre, edad} = jugadores

let jugadores2 = {
	...jugadores,
	edadName : nombre + " " + edad
}


console.table(jugadores)
console.table(jugadores2)





*/
















