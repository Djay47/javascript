let myObj = {
	nama : 'Jay',
	umur : 17,
	alamat : ['Jl abcd', 'RT 99', 'RW 77'],
	info : () => {return 'Nama saya Jay, 17 tahun'} ,
};

console.log(myObj.nama);
console.log(myObj.umur);

let alamat = '';
for (let item of myObj.alamat)
{
	alamat += `${item} `;
}
console.log(alamat);

console.log(myObj.info());