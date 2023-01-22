<?php

require_once 'koneksi.php';

$data = stripslashes(file_get_contents("php://input"));
$dataPelanggan = json_decode($data, true);

// var_dump($dataPelanggan);

$idPelanggan = $dataPelanggan['idPelanggan'];

$sql = "DELETE FROM pelanggan WHERE idpelanggan = $idPelanggan";

if (mysqli_query($connect, $sql))
{
	echo 'Data Berhasil Dihapus';
}
else
{
	echo 'Gagal Menghapus Data';
}