function select(choice)
{
	document.querySelector(".info").innerText = 'Anda memilih ' + choice;
}

function displayContent1()
{
	document.querySelector('.content1').style.backgroundColor = 'blue';
	document.querySelector('.head1').innerText = 'Header 1';
	document.querySelector('.para1').innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...';
}

function displayContent2()
{
	document.querySelector('.content2').style.backgroundColor = 'aqua';
	document.querySelector('.head2').innerText = 'Header 2';
	document.querySelector('.para2').innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...';
}

show.onclick = function() {
	document.querySelector('.content3').style.backgroundColor = 'silver';
	document.querySelector('.head3').innerText = 'Header 3';
	document.querySelector('.para3').innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
}