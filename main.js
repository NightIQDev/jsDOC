/*

// TIPOS DE DATOS

'Hola mundo' // string

12 // numbers
12.1


// boolean

true 
false

// array

['luis','carlos','messi']

[123,123,123]

[false,true,true]

// objeto

'ryan'

70.7

14

true


{
	'username': 'ryan',
	'score': 70.7,
	'hours': 14,
	'gp': true, 
}

{
	'username': 'joe',
	'score': 0.7,
	'hours': 1,
	'gp': false, 
}

PRACTICA DE TIPOS DE DATOS

console.log('Esto es una cadena')
console.log(123)
console.log(true)

console.log(['hola','hole','mariposo'])

console.log({
	'username': 'ryan',
	'score': 70.7,
	'hours': 14,
	'gp': true, 
})




// VARIABLES

var name = 'john';

let lastName = 'casanova';

const pi = 3.14;

name = 'pepe'

console.log(name)



//OPERADORES


let numeroUno = 100 ;

let numeroDos = 500;

let resultado = numeroUno / numeroDos // +, - , *, /.

console.log(resultado)


// concatenacion 

let name = 'john';    
let lastName = ' carter';

let completeName = name + lastName;

console.log(completeName)



// OPERADORES DE COMPARACION
let numeroUno = 100 ;

let numeroDos = 500;

let resultado = numeroUno < numeroDos // <, >, ==, !=,<=,>=

console.log(resultado)


let pass = 'lolito'
let input = 'lolite'
let result = input == pass

if (result == true) {
	console.log('HAS INICIADO')
	
}
else {
	console.error('LOGIN INCORRECTO')
}


let score = 70;

if (score > 30) {
	console.log('bobolon')
	// statement
}
else if (score < 30 ) {
	console.log('mas malo')
	
}

else {
	console.log('nose')
}


let typeCard = 'debid'

switch (typeCard) {
	case 'debid':
		console.log('es de debito baba')
		break;
	case 'credid':
		console.log('credito')
		break;

	default:
		console.log('no card')
}



let count = 0;

// ITERADORES

while (count < 50 ) {
	console.log(count)
	count++
		
}



let names = ['luis', 'marcos','caca']

for(let i = 0; i < names.length; i++){
	console.log(names[i])
}
 

let names = [1, 2,3]

for(let i = 0; i < names.length; i++){
	console.log(names[i])
}



let names = ['luis', 'marcos','caca']

for(let i = 0; i < names.length; i++){
	console.log(names[i] + ' ojeda')
}


//FUNCIONES

function saludar (nombre) {
	console.log('heloo ' +  nombre)
	
}

saludar('pich');


function sumar (n1,n2) {
	console.log(n1+n2)
}

sumar(111,111)

*/