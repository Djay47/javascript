// document.querySelector('#klik').addEventListener("click", tampil);

function tampil()
{
	let url = 'tblmenu.json';

	// Mengambil data
	fetch(url)
		
		// Merubah data
		.then(function(response){
			return response.json();
		})
		
		// Menggunakan data
		.then(function(tblmenu){ 
			// console.log(tblmenu);

			document.querySelector('#isi').innerHTML = '<h1>Data Menu</h1>';
			document.querySelector('#isi').innerHTML += '<table border="1px" cellpadding="5px" cellspacing="0"></table>';
			document.querySelector('#isi > table').innerHTML = '<tr><th>Menu</th><th>Harga</th></tr>';

			tblmenu.forEach(element => {
				document.querySelector('#isi > table').innerHTML += `<tr><td>${element.menu}</td><td>${element.harga}</td></tr>`;
			});
		})	
}

// Cara Penulisan
 
/*
fetch(url)
	.then(response => response.json())
	.then(json => console.log(json))
*/

/*
fetch(url)
	.then(function(response){
		return response.json();
	})
	.then(function(json){ 
		console.log(json);
	})
*/