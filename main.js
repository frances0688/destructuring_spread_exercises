/*
1. Ejercicios destructuring
Dado el siguiente objeto:
*/
const empleados = [
	{
		name: "Luis",
		email: "Luis@gmail.com",
	},
	{
		name: "Ana",
		email: "Ana@gmail.com",
	},
	{
		name: "Andrea",
		email: "Andrea@gmail.com",
	},
];

// Extrae la empleada Ana con todos sus datos personales : {"name": "Ana",
// "email": "Ana@gmail.com" }
const [, Ana] = empleados;
console.log(Ana);

// Extrae el email del empleado Luis-- > Luis@gmail.com
const [Luis] = empleados;
const { email } = Luis;
console.log(email);

// Dado el siguiente objeto:
const pokemon = {
	name: "Bulbasaur",
	type: "grass",
	ability: {
		primary: "Overgrow",
		hidden: "Chlorophyll",
	},
	stats: {
		hp: 45,
		attack: 49,
		deffense: 59,
		speed: 45,
	},
	moves: ["Growl", "Tackle", "Vine Whip", "Razor Leaf"],
};

// Cambia el nombre de la propiedad “name” por “nombre
const { name: nombre } = pokemon;

// Extrae el nombre del Pokemon
console.log(nombre);

//Extrae el tipo de Pokemon que es
const { type } = pokemon;
console.log(type);

//Extrae el movimiento “Tackle”
const { moves } = pokemon;
const [, tackle] = moves;
console.log(tackle);

/*
2. Ejercicios spread / rest
Mergea el siguiente pokémon con el Pokemon del ejercicio anterior:
*/
const pikachu = {
	name: "Pikachu",
	type: "electric",
	ability: {
		primary: "Static",
		hidden: "Lightning rod",
	},
	stats: {
		hp: 35,
		attack: 55,
		deffense: 40,
		speed: 90,
	},
	moves: [
		"Quick Attack",
		"Volt Tackle",
		"Iron Tail",
		"Thunderbolt",
	],
};

const pokemonMerge = {
	...pokemon,
	...pikachu,
};
console.log(pokemonMerge);

// Escribe una función llamada sumEveryOther que pueda recibir cualquier
// cantidad de números y devuelva la suma de todos los demás argumentos.
function sumEveryOther(...numbers) {
	const sum = numbers.reduce((a, b) => a + b);
	console.log(sum);
	return sum;
}
sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26

// Escribe una función llamada addOnlyNums que pueda recibir cualquier número de
// argumentos(incluyendo números y strings y retorne la suma solo de los
// números.
function addOnlyNums(...elements) {
	const onlyNums = elements
		.filter((el) => typeof el == "number")
		.reduce((a, b) => a + b);
	console.log(onlyNums);
	return onlyNums;
}
addOnlyNums(1, "perro", 2, 4); //7

// Escribe una función llamada countTheArgs que pueda recibir cualquier número
// de argumentos y devuelva un número que indique cuántos argumentos ha
// recibido.
function countTheArgs(...args) {
	console.log(args.length);
	return args.length;
}
countTheArgs("gato", "perro"); //2
countTheArgs("gato", "perro", "pollo", "oso"); //4

// Escribe una función llamada combineTwoArrays que reciba dos array cómo
// argumentos y devuelva solo un array que combine los dos(usando spread
// operator).
function combineTwoArrays(arr1, arr2) {
	const combinedArrays = [...arr1, ...arr2];
	console.log(combinedArrays);
}
arr1 = [1, 2, 4, 9];
arr2 = ["uno", "dos", "tres"];
combineTwoArrays(arr1, arr2);

/*
3. Extras

Dado el siguiente objeto:
*/
const HIGH_TEMPERATURES = {
	yesterday: 30,
	today: 35,
	tomorrow: 32,
};

/*
Cambiar las siguientes líneas para guardar desestructurando los valores de
temperaturas en las variables maximaHoy y maximaManana
const maximaHoy = HIGH_TEMPERATURES.today;
const maximaManana = HIGH_TEMPERATURES.tomorrow;
console.log("maximaHoy", maximaHoy);
console.log("maximaManana", maximaManana);
*/

const { today: maximaHoy } = HIGH_TEMPERATURES;
console.log("maximaHoy", maximaHoy);

const { tomorrow: maximaManana } = HIGH_TEMPERATURES;
console.log("maximaManana", maximaManana);

// Escriba una función llamada onlyUniques que acepte cualquier número de
// argumentos y devuelva un array de elementos únicos, sin repetidos.
function onlyUniques(...args) {
	const uniqueArr = [];
	args.forEach((arg) => {
		if (uniqueArr.includes(arg) != true) {
			uniqueArr.push(arg);
		}
	});
	console.log(uniqueArr);
	return uniqueArr;
}
onlyUniques("gato", "pollo", "cerdo", "cerdo"); //["gato", "pollo", "cerdo"];
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); // [1, 2, 3, 6, 7, 8];

// Escriba una función llamada combineAllArrays que pueda recibir cualquier
// cantidad de arrays como argumentos y los combine todos en un solo array.
function combineAllArrays(...arrays) {
	const combined = arrays.flat();
	console.log(combined);
	return combined;
}
combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]); //[3, 6, 7, 8, 2, 7, 3, 1]
combineAllArrays(
	[2, 7, 3, 1],
	[2, 7, 4, 12],
	[2, 44, 22, 7, 3, 1]
); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

// Escriba una función llamada sumAndSquare que reciba cualquier número de
// argumentos, los eleve al cuadrado y devuelva la suma de todos los valores
// cuadrados.
function sumAndSquare(...args) {
	const newArray = args
		.map((num) => num ** 2)
		.reduce((a, b) => a + b);
	console.log(newArray);
	return newArray;
}

sumAndSquare(3, 6, 2, 1); //50
