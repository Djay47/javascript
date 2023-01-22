let btnAngka = document.querySelectorAll('.btn-angka > button');
let tampil = document.querySelector('#tampil');

for (let index = 0; index < btnAngka.length; ++index)
{
	btnAngka[index].onclick = () => {
		tampil.value = btnAngka[index].innerHTML;
	};
}