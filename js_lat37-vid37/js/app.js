$(document).ready(function() {
	
	selectData();

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

		if ( id === '' )
		{
			insertData();
		}
		else
		{
			updateData();
		}

		$('#idpelanggan').val('');
		$('#pelanggan').val('');
		$('#alamat').val('');
		$('#noTelp').val('');
	});

	$('tbody').on('click', '#btn-delete', function() {
		let id = $(this).attr("data-id");
		deleteData(id);
	});

	function selectData()
	{
		$.ajax({
			type: "get",
			url: "php/select.php",
			dataType: "json",
			success: function(response) {
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
									<button type="button" id="btn-delete" class="btn btn-danger" data-id=${value.idpelanggan}>
										Hapus
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
			cache : false,
			type  : 'post',
			url	  : 'php/insert.php',
			data  : JSON.stringify(dataPelanggan),
			
			success : function(response) {
				$('#message').html(`<p>${response}</p>`);

				selectData();
			}
		});
	}

	function updateData()
	{
		alert('Update Data');
	}

	function deleteData(id)
	{
		let idPelanggan = {idPelanggan : id};

		$.ajax({
			cache : false,
			type  : 'post',
			url	  : 'php/delete.php',
			data  : JSON.stringify(idPelanggan),
			
			success : function(response) {
				$('#message').html(`<p>${response}</p>`);

				selectData();
			}
		});
	}

});