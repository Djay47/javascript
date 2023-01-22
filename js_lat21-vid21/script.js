let nilai = [
	{ nama: 'Jay', ipa: 90, bahasa: 90, matematika: 95 },	
	{ nama: 'Adi', ipa: 95, bahasa: 90, matematika: 95 },
	{ nama: 'Roy', ipa: 80, bahasa: 85, matematika: 90 },
	{ nama: 'Boy', ipa: 85, bahasa: 90, matematika: 85 }
];

let nama = ['Jay', 'Adi', 'Roy', 'Boy'];

let mapel = ['ipa', 'bahasa', 'matematika'];

// let namaSiswa = nilai.map( item => {
// 	return item.nama
// });

// let namaSiswa = nilai.map(item => item.nama);

// console.log(namaSiswa);

// console.log(nilai.map(item => item.nama));

// let nilaiMTK = nilai.map(item => [item.nama, item.matematika]);
// console.log(nilaiMTK);

// console.log(nilai.map(item => [item.nama, item.matematika]));

// console.log(nama);
// nama.sort();				// sorting
// console.log(nama);
// console.log(nama.sort());	// sorting


// let sumNilaiMTK = nilai.reduce(function(accu, item) {
// 	return accu += item.ipa;
// }, 0);

let sumNilaiMTK = nilai.reduce((accu, item) => (accu += item.ipa), 0);

console.log(sumNilaiMTK);