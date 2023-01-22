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

	function selectData()
	{
		$.ajax({
			type: "get",
			url: "php/select.php",
			dataType: "json",
			success: function(response) {
				// console.log(response);
				
				let no = 1;
				let tbody = '';
				
				$.each(response, function(key, value) {
					// console.log(value);
					
					tbody += `<tr>
								<td>${no++}</td>
								<td>${value.pelanggan}</td>
								<td>${value.alamat}</td>
								<td>${value.telepon}</td>
							</tr>`
					
				});

				$('tbody').html(tbody);
			}
		});
	}

	function insertData()
	{
		let dataPelanggan = { pelanggan : pelanggan, alamat : alamat, noTelp : noTelp };
		
		$.ajax({
			type : 'post',
			url	 : 'php/insert.php',
			data : JSON.stringify(dataPelanggan),
			success : function(response) {
				$('#message').html(`<p>${response}</p>`);
			}
		});

		selectData();
	}

	function updateData()
	{
		alert('Update Data');
	}

	function deleteData()
	{
		alert('Delete Data');
	}

});