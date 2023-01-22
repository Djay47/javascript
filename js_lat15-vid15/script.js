// Cara ke 1 
function displayContent1()
{
	document.querySelector('.content1').style.backgroundColor = 'blue';
	document.querySelector('.head1').innerText = 'Header 1';
	document.querySelector('.para1').innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...';
}

function closeContent1()
{
	document.querySelector('.head1').innerText = '';
	document.querySelector('.para1').innerText = '';
}

document.querySelector('.btn1').addEventListener('dblclick', displayContent1);
document.querySelector('.btn1').addEventListener('click', closeContent1);


// Cara ke 2
document.querySelector('.btn2').addEventListener('dblclick', () => {
	document.querySelector('.content2').style.backgroundColor = 'aqua';
	document.querySelector('.head2').innerText = 'Header 2';
	document.querySelector('.para2').innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...';
});

document.querySelector('.btn2').addEventListener('click', () => {
	document.querySelector('.head2').innerText = '';
	document.querySelector('.para2').innerText = '';
});

// Cara ke 3 (harus menggunakan id)
btn3.addEventListener('dblclick', () => {
	document.querySelector('.content3').style.backgroundColor = 'lime';
	document.querySelector('.head3').innerText = 'Header 3';
	document.querySelector('.para3').innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...';
});

btn3.addEventListener('click', () => {
	document.querySelector('.head3').innerText = '';
	document.querySelector('.para3').innerText = '';
});

// Cara ke 4 (harus menggunakan id)
btn4.ondblclick = () => {
	document.querySelector('.content4').style.backgroundColor = 'silver';
	document.querySelector('.head4').innerText = 'Header 4';
	document.querySelector('.para4').innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...';
};

btn4.onclick = () => {
	document.querySelector('.head4').innerText = '';
	document.querySelector('.para4').innerText = '';
};