let nilai = 9000;
let nilaiStandar = 75;
let min = 0;
let max = 100;

if (nilai >= min &&nilai <= max)
{
	if (nilai >= nilaiStandar)
	{
		console.log('LULUS!');
	}
	else
	{
		console.log('TIDAK LULUS!');
	}
}
else
{
	console.log('Nilai tidak sesuai');
}