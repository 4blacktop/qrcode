<?php
ini_set("display_errors", "1");
error_reporting(E_ALL);
header("Access-Control-Allow-Origin:*");
echo '<pre>';

// connection settings
$host = "db.trueliq.com";
$dbname = "trueliq";
$user = "trueliq";
$pass = "Colombia12$";

$qrcodeQuery = urlencode(htmlspecialchars($_GET["qrcode"]));

echo "DEBUG:<br />fjnjkk534jn53kj6nk3jh6k2j3n6nkj3ng3d3der<br />fjnjkk534jn53kj6nk3jh6k2j3n6nkj3ng3d3det";

echo "<br /><br />QR query: $qrcode";
echo "<br /><br />QR result:<br />";

try {  
	$DBH = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);  

	// $DBH->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_SILENT );
	$DBH->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION ); // debug

	// since it is an ordinary query without placeholder we can use query() method
	// $STH = $DBH->query('SELECT * FROM trueliq');  
	$STH = $DBH->query("SELECT * FROM trueliq WHERE `qr-code` = '$qrcodeQuery'");  // debug
	// $STH = $DBH->query("SELECT `brand`, `importer`, `reference`, `sub-reference`, `date-import`, `lot-number`, `date-first-query`, `date-expiration` FROM trueliq WHERE `qr-code` = '$qrcodeQuery'");  

	// set associative 
	$STH->setFetchMode(PDO::FETCH_ASSOC);  
	


	while($row = $STH->fetch()) {  
		print_r($row);
	}
	
	
	
}  
catch(PDOException $e) {  
    echo $e->getMessage();  
	file_put_contents('PDOErrors.txt', "\r\n" . time() . "\t" . $e->getMessage(), FILE_APPEND); 
}

echo '</pre>';
?>