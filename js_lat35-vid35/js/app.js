$(document).ready(function() {
	
	selectData();

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

	function updateData()
	{

	}

	function insertData()
	{

	}

	function deleteData()
	{

	}

});