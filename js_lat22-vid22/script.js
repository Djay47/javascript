let tblMenu = [
	{
		idmenu: 1,
		idkategori: 1,
		menu: 'Kopi',
		gambar: 'kopi.jpg',
		harga: 3000
	},
	{
		idmenu: 2, 
		idkategori: 1,
		menu: 'Teh', 
		gambar: 'teh.jpg',
		harga: 3000
	},
	{
		idmenu: 3, 
		idkategori: 1, 
		menu: 'Jus Buah', 
		gambar: 'jus-buah.jpg', 
		harga: 5000
	},
	{
		idmenu: 4, 
		idkategori: 2, 
		menu: 'Bakwan', 
		gambar: 'bakwan.jpg', 
		harga: 10000
	},
	{
		idmenu: 5, 
		idkategori: 2, 
		menu: 'Martabak Telur', 
		gambar: 'martabak-telur.jpg', 
		harga: 15000
	},
];

let getMenu = tblMenu.map( (field) => {
	return `<div class="produk-content">
 				<div class="image">
 					<img src="Image/${field.gambar}">
 				</div>
 				<div class="title">
 					<a href="#" style="text-decoration: none; color: black;">
 						<h2>${field.menu}</h2>
 					</a>
 				</div>
 				<div class="harga">
 					<p>${field.harga}</p>
 				</div>
 			</div>`;
});

let produk = document.querySelector('.produk');
produk.innerHTML = getMenu;