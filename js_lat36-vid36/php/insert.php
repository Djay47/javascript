<?php

require_once 'koneksi.php';

$data = stripslashes(file_get_contents("php://input"));
$dataPelanggan = json_decode($data, true);

// var_dump($dataPelanggan);

$pelanggan = $dataPelanggan['pelanggan'];
$alamat = $dataPelanggan['alamat'];
$noTelp = $dataPelanggan['noTelp'];

$sql = "INSERT INTO pelanggan (idpelanggan, pelanggan, alamat, telepon) VALUES('', '$pelanggan', '$alamat', '$noTelp')";

if (!empty($pelanggan) && !empty($alamat) && !empty($noTelp))
{
	if ( mysqli_query($connect, $sql) )
	{
		echo 'Sukses';
	}
	else
	{
		echo 'Gagal';
	}
}
else
{
	echo 'Data Kosong';
}