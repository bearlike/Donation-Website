<!-- Pure PHP File-->
<?php
$servername = "localhost";
$username = "root";
//$password = "password";
// Uncomment below statement if your password is empty
$password = "";
$dbname = "donate";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn -> connect_error) {
    die("Connection failed: ".$conn -> connect_error);

} ?>
