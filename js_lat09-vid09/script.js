/*
function print()
{
	console.log('Hello World!');
}

print();
*/

/*
function luasLingkaran(r)
{
	console.log(`Radius: ${r} cm -> Luas: ${3.14 * r ** 2} cm`);
}

luasLingkaran(10);
*/

function luasLingkaran(r)
{
	return 3.14 * r ** 2;
}

// console.log(`Radius: 10 cm -> Luas: ${luasLingkaran(10)} cm`);

let luasAlas = 10;
let tinggiTabung = 5;
let volTabung = luasLingkaran(luasAlas) * tinggiTabung;

console.log(`Luas alas tabung: ${luasAlas} & Tinggi tabung: ${tinggiTabung} \nVolume Tabung: ${volTabung}`);
