/*
// anonymous function tanpa parameter
let hello = function() {
	console.log('Hello World');
}

// hello();


// anonymous function dengan parameter
let printName = function(name) {
	console.log(name);
}

// printName('Jay');
*/

/*
// arrow function tanpa parameter
let hello = () => {
	console.log('Hello World');
}

// hello();

// arrow function dengan parameter
let printName = (name) => {
	console.log(name);
}

// printName('Jay');
*/

// arrow function tanpa parameter dan hanya memiliki 1 statement
/*
let printName = name => console.log(name);
printName('Jay');
*/

let tesUmur = (umur) => {
	let result = (umur < 18) ? 'Dibawah umur' : 'Dewasa';
	return result;
}

let umur = 17;

console.log(tesUmur(umur));
