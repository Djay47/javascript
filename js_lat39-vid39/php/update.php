<?php

require_once 'koneksi.php';

$data = stripslashes(file_get_contents("php://input"));
$dataPelanggan = json_decode($data, true);

// var_dump($dataPelanggan);

$idPelanggan = $dataPelanggan['idPelanggan'];
$pelanggan = $dataPelanggan['pelanggan'];
$alamat = $dataPelanggan['alamat'];
$noTelp = $dataPelanggan['noTelp'];

$sql = "UPDATE pelanggan SET pelanggan = '$pelanggan', alamat = '$alamat', telepon = '$noTelp' WHERE idpelanggan = $idPelanggan";

if (!empty($pelanggan) && !empty($alamat) && !empty($noTelp))
{
	if ( mysqli_query($connect, $sql) )
	{
		echo 'Data berhasil diubah';
	}
	else
	{
		echo 'Gagal mengubah data';
	}
}
else
{
	echo 'Tidak boleh ada data yang kosong';
}