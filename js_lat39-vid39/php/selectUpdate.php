<?php

require_once 'koneksi.php';

$data = stripslashes(file_get_contents("php://input"));
$dataPelanggan = json_decode($data, true);

// var_dump($dataPelanggan);

$idPelanggan = $dataPelanggan['idPelanggan'];
$sql = "SELECT * FROM pelanggan WHERE idpelanggan = $idPelanggan";
$result = mysqli_query($connect, $sql);

$data = mysqli_fetch_assoc($result);

// var_dump($data);

echo json_encode($data);
