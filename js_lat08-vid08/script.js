/*
let i = 1;
while (i <= 10)
{
	console.log(i++);
}
*/

/*
let i = 1;
do
{
	console.log(i++);
} 
while (i <= 10);
*/

/*
for (let i = 1; i <= 10; ++i)
{
	console.log(i);
}
*/

// Menampilkan bilangan ganjil antara 1 - 10
let bilGanjil = '';
for (let i = 1; i <= 10; i += 2)
{
	bilGanjil += `${i} `;
}
console.log(bilGanjil);

// Menampilkan bilangan genap
let bilGenap = '';
for (let i = 2; i <= 10; i += 2)
{
	bilGenap += `${i} `;
}
console.log(bilGenap);