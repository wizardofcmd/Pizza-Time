<?php
$conn = new mysqli('localhost', 'root', '', 'pizzatime');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

$name=$_POST['name'];
$address=$_POST['address'];
$telephone=$_POST['telephone'];
$pizza_order=$_POST['pizza_order'];

$sql = "INSERT INTO pizza_order (name, address, telephone, pizza_order) VALUES ('$name', '$address', '$telephone', '$pizza_order')";
if ($conn->query($sql) === TRUE) {
    echo "Data has been inserted.";
}
else 
{
    echo "Failed to insert data.";
}

$conn->close();
?>