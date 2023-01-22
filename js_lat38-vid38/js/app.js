$(document).ready(function() {
	
	// Menampilkan Data
	selectData();

	// Insert dan Update Data
	let id;
	let pelanggan;
	let alamat;
	let noTelp;

	$('#simpan').click(function(e) {
		e.preventDefault();
		
		id = $('#idpelanggan').val();
		pelanggan = $('#pelanggan').val();
		alamat = $('#alamat').val();
		noTelp = $('#noTelp').val();

		$('#idpelanggan').val('');
		$('#pelanggan').val('');
		$('#alamat').val('');
		$('#noTelp').val('');

		if ( id === '' )
		{
			insertData();
		}
		else
		{
			updateData();
		}
	});

	// Update Data
		// mengambil data yang akan diupdate
	$('tbody').on('click', '#btn-update', function() {
		let id = $(this).attr("data-id");
		selectUpdate(id);
	});

		// Memperbarui data

	// Delete Data
	$('tbody').on('click', '#btn-delete', function() {
		let id = $(this).attr("data-id");
		deleteData(id);
	});


	// ---------- Function ---------- //

	function selectData()
	{
		$.ajax({
			cache 		: false,
			type 		: "get",
			url	  		: "php/select.php",
			dataType	: "json",
			
			success		: function(response) {
				// console.log(response);
				
				let no = 1;
				let tbody = ``;
				
				$.each(response, function(key, value) {
					// console.log(value);
					
					tbody += `<tr>
								<td>${no++}</td>
								<td>${value.pelanggan}</td>
								<td>${value.alamat}</td>
								<td>${value.telepon}</td>
								<td class="text-center">
									<button type="button" id="btn-delete" class="btn btn-outline-danger btn-sm" data-id=${value.idpelanggan}>
										Hapus
									</button>
								</td>
								<td class="text-center">
									<button type="button" id="btn-update" class="btn btn-outline-secondary btn-sm" data-id=${value.idpelanggan}>
										Ubah
									</button>
								</td>
							</tr>`;
				});

				$('table > tbody').html(tbody);
			}
		});
	}

	function insertData()
	{
		let dataPelanggan = { pelanggan : pelanggan, alamat : alamat, noTelp : noTelp };
		
		$.ajax({
			cache 	: false,
			type  	: 'post',
			url	  	: 'php/insert.php',
			data 	: JSON.stringify(dataPelanggan),
			
			success	: function(response) {
				$('#message').html(`<p>${response}</p>`);

				selectData();
			}
		});
	}

	function selectUpdate(id)
	{
		let idPelanggan = { idPelanggan : id };

		$.ajax({
			cache	: false,
			type 	: 'post',
			url		: 'php/selectUpdate.php',
			data 	: JSON.stringify(idPelanggan),

			success	: function(response) {
				let data = JSON.parse(response);
				// console.log(data);

				$('#idpelanggan').val(data.idpelanggan);
				$('#pelanggan').val(data.pelanggan);
				$('#alamat').val(data.alamat);
				$('#noTelp').val(data.telepon);
			}

		});
	}

	function updateData()
	{
		alert('Update Data');
	}

	function deleteData(id)
	{
		let idPelanggan = { idPelanggan : id };

		$.ajax({
			cache 	: false,
			type 	: 'post',
			url	 	: 'php/delete.php',
			data  	: JSON.stringify(idPelanggan),
			
			success : function(response) {
				$('#message').html(`<p>${response}</p>`);

				selectData();
			}
		});	
	}

});