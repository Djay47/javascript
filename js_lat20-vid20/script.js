let nilai = [
	{ nama: 'Jay', ipa: 90, bahasa: 90, matematika: 95 },	
	{ nama: 'Adi', ipa: 95, bahasa: 90, matematika: 95 },
	{ nama: 'Roy', ipa: 80, bahasa: 85, matematika: 90 },
	{ nama: 'Boy', ipa: 85, bahasa: 90, matematika: 85 }
];

let nama = ['Jay', 'Adi', 'Roy', 'Boy'];

let mapel = ['ipa', 'bahasa', 'matematika'];

// console.log(nama);
// console.log(mapel);

// let gabungan = nama.concat(mapel);
// console.log(gabungan);

// console.log(nama.concat(mapel));

// console.log(mapel.concat(['ppkn', 'ips', 'sejarah']));

// nama.forEach( item => console.log(item) );
// mapel.forEach( item => console.log(item) );

// console.log(nilai);
// nilai.filter(function(item) {
// 	if (item.matematika === 90)
// 	{
// 		console.log(item);
// 	}
// });

console.log(nilai);
nilai.filter( item => (item.matematika > 90 ) ? console.log(item) : null);