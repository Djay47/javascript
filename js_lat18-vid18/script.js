let tampil = document.querySelector('#tampil');
let btnAngka = document.querySelectorAll('.btn-angka > button');
let btnAksi = document.querySelectorAll('.btn-aksi > button');
let btnResult = document.querySelector('.btn-result');

let operasi;
let operand1;
let operand2;

// Tombol angka
for (let index = 0; index < btnAngka.length; ++index)
{
	btnAngka[index].onclick = () => {
		if (tampil.value == "0")
		{
			tampil.value = btnAngka[index].innerHTML;
		}
		else
		{
			tampil.value += btnAngka[index].innerHTML;
		}
	};
}

// '=' button
btnResult.onclick = () => {
	operand2 = tampil.value;
	tampil.value = calcu(operasi);
	// console.log(`${operand1} ${operasi} ${operand2} ${result}`);
} 

// '+' button
btnAksi[0].onclick = () => {
	operasi = btnAksi[0].innerHTML;
	operand1 = tampil.value;
	tampil.value = '';
};

// '-' button
btnAksi[1].onclick = () => {
	operasi = btnAksi[1].innerHTML;
	operand1 = tampil.value;
	tampil.value = '';
};

// '*' button
btnAksi[2].onclick = () => {
	operasi = btnAksi[2].innerHTML;
	operand1 = tampil.value;
	tampil.value = '';
};

// '/' button
btnAksi[3].onclick = () => {
	operasi = btnAksi[3].innerHTML;
	operand1 = tampil.value;
	tampil.value = '';
};

// 'Clear' button
btnAksi[4].onclick = () => {
	tampil.value = '';
};


function calcu(operasi)
{
	switch(operasi)
	{
		case '+':
			return `${operand1} ${operasi} ${operand2} = ${parseFloat(operand1) + parseFloat(operand2)} `;

		case '-':
			return `${operand1} ${operasi} ${operand2} = ${parseFloat(operand1) - parseFloat(operand2)} `;

		case '*':
			return `${operand1} ${operasi} ${operand2} = ${parseFloat(operand1) * parseFloat(operand2)} `;

		case '/':
			return `${operand1} ${operasi} ${operand2} = ${parseFloat(operand1) / parseFloat(operand2)} `;
	}
}