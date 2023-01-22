document.querySelector('.klik').addEventListener('click', tampil);

function tampil()
{
	let url = 'https://jsonplaceholder.typicode.com/todos';

	fetch(url)
		.then( data => data.json() )
		.then( data => {
			//console.log(data) 
			
			document.querySelector('.isi').innerHTML = '<h1>Data</h1>';
			document.querySelector('.isi').innerHTML = '<table border="1px" cellpadding="5px" cellspacing="0"></table>';
			document.querySelector('.isi > table').innerHTML = '<tr><th>userId</th><th>id</th><th>title</th></tr>';

			data.forEach(item => {
				document.querySelector('.isi > table').innerHTML += `<tr><td>${item.userId}</td><td>${item.id}</td><td>${item.title}</td></tr>`;
			});
		})
}