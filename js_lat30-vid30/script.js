document.querySelector('.klik').addEventListener('click', tampil);

async function tampil()
{
	const url = 'https://jsonplaceholder.typicode.com/users';
	const response = await fetch(url);
	const data = await response.json();

	// console.log(data);

	// data.forEach(item => {
	// 	console.log(item.name);
		
	// })

	document.querySelector('.isi').innerHTML = '<h1>Data User</h1>';
	document.querySelector('.isi').innerHTML = '<table border="1px" cellpadding="5px" cellspacing="0"></table>';
	document.querySelector('.isi > table').innerHTML = '<tr><th>Name</th><th>Username</th><th>Email</th></tr>';

	data.forEach(item => {
		document.querySelector('.isi > table').innerHTML += `<tr><td>${item.name}</td><td>${item.username}</td><td>${item.email}</td></tr>`;
	})
}