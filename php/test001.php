<?php
ini_set("display_errors", "1");
error_reporting(E_ALL);
header("Access-Control-Allow-Origin:*");

// server: db.trueliq.com:3306
// dbname : trueliq
// table: trueliq
// user: trueliq
// pass: Colombia12$

// $host = "db.trueliq.com:3306";
$host = "db.trueliq.com";
$dbname = "trueliq";
$user = "trueliq";
$pass = "Colombia12$";

try {  
  # MS SQL Server и Sybase через PDO_DBLIB  
  // $DBH = new PDO("mssql:host=$host;dbname=$dbname", $user, $pass);  
  // $DBH = new PDO("sybase:host=$host;dbname=$dbname", $user, $pass);  
  
  # MySQL через PDO_MYSQL  
  $DBH = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);  
  
  # SQLite  
  // $DBH = new PDO("sqlite:my/database/path/database.db");  
}  
catch(PDOException $e) {  
    echo $e->getMessage();  
}
?>