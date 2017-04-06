$(function() {// Handler for .ready() called.
	// alert("Handler for .ready() called");
	$("#result").hide();
	alert('ready');
});


function scan(){
	alert('scan');
	cordova.plugins.barcodeScanner.scan(function(result){ // success callback
		// document.getElementById('result').innerHTML = "Result:<br />" + result.text + "<br />" + "Format: " + result.format + "<br />" + "Cancelled: " + result.cancelled;
		checkResult(result.text);
	},function(error){ // error callback
		// alert(JSON.stringify(error));
		// alert("Scanning failed: " + error);
		document.getElementById('result').innerHTML = JSON.stringify(error);
	},
	{
          "preferFrontCamera" : false, // iOS and Android
          "showFlipCameraButton" : false, // iOS and Android
          // "prompt" : "Place a barcode inside the scan area", // supported on Android only
          "formats" : "QR_CODE", // default: all but PDF_417 and RSS_EXPANDED
          "orientation" : "portrait" // Android only (portrait|landscape), default unset so it rotates with the device
      }
	);
}

function testDet(){// debug
alert('testDet');
	checkResult('fjnjkk534jn53kj6nk3jh6k2j3n6nkj3ng3d3det');
}

function testDer(){// debug
alert('testDer');
	checkResult('fjnjkk534jn53kj6nk3jh6k2j3n6nkj3ng3d3der');
}

function testDer1(){// debug
alert('testDer1');
	checkResult('fjnjkk534jn53kj6nk3jh6k2j3n6nkj3ng3d3der1');
}

function checkResult(result){ // check results from qr code scanner and fires function to show content
alert('checkResult: ' + result);
// alert('checkResult.toSource(): ' + result.toSource());
 	// $.get( "http://trueliq.com/search.php?qrcode=" + result, function( data ) { // ajax GET // console.log('data: ' + data.toSource());
 	$.get( "http://trueliq.com/search.php?qrcode=fjnjkk534jn53kj6nk3jh6k2j3n6nkj3ng3d3det", function( data ) { // ajax GET // console.log('data: ' + data.toSource());
		// alert('data: ' + data.toSource());
		alert('data: ' + data);
		if(data == Boolean(false)) { // error qr code not found
			alert('error');
			 error();
		} else {
			if (data['date-first-query'] == null) { // first query
			alert('ok');
				ok(data);
			} else { // already queried
			alert('warning');
				warning(data);
			}
		}
	}); 
}

function reset(){ // debug, resets 'date-first-query' and 'number-query' to null, 
alert('reset');
 	$.get( "http://trueliq.com/reset.php?qrcode=fjnjkk534jn53kj6nk3jh6k2j3n6nkj3ng3d3det", function( data ) {
		console.log(data);
	}); 
}

function ok(data){
	alert('ok');
	document.getElementById('icon').innerHTML = '<img src="img/icon-ok.png" width="100%" alt="ok" />';
	document.getElementById('home').innerHTML = '<img src="img/icon-app-big.png" height="100%" alt="home" />';
	
	document.getElementById('result').innerHTML = 
	data["reference"] + " " + data["brand"] + "<br />" + 
	data["sub-reference"] + "<br />" + 
	data["importer"] + "<br />" + 
	data["date-import"] + "<br />" + 
	"Lote: " + data["lot-number"] + "<br />";

	$("#home").show();
	$("#result").show();
	$("#icon").show();
	$("#wrapper").hide();
	$("#icon").delay(3000).fadeOut(500);
	$("#result").delay(3000).fadeOut(500);
	$("#home").delay(3000).fadeOut(500);
	$("#wrapper").delay(3000).fadeIn(500);
}

function warning(data){
	alert('warning');
	document.getElementById('home').innerHTML = '<img src="img/icon-app-big.png" height="100%" alt="home" />';
	document.getElementById('icon').innerHTML = '<img src="img/icon-warning.png" width="100%" alt="ok" />';
	
	document.getElementById('result').innerHTML = 
	'<div><font color="#e35520">este código<br />ya fue consultado el:</font><br />' + 
	data["date-first-query"] + "<br />" +
	data["reference"] + " " + data["brand"] + "<br />" + 
	data["sub-reference"] + "<br />" + 
	data["importer"] + "<br />" + 
	data["date-import"] + "<div>"; 
	
	$("#wrapper").hide();
	$("#result").show();
	$("#home").show();
	$("#icon").show();
	$("#icon").delay(3000).fadeOut(500);
	$("#result").delay(3000).fadeOut(500);
	$("#home").delay(3000).fadeOut(500);
	$("#wrapper").delay(3000).fadeIn(500);
}

function error(){
	alert('error');
	document.getElementById('icon').innerHTML = '<img src="img/icon-error.png" width="100%" alt="ok" />';
	document.getElementById('home').innerHTML = '<img src="img/icon-app-big.png" height="100%" alt="home" />';
	document.getElementById('result').innerHTML = '<font color="#e35520">cuidado este licor<br />puede ser adulterado</font>'; 
	$("#home").show();
	$("#icon").show();
	$("#wrapper").hide();
	$("#result").show();
	$("#icon").delay(3000).fadeOut(500);
	$("#result").delay(3000).fadeOut(500);
	$("#home").delay(3000).fadeOut(500);
	$("#wrapper").delay(3000).fadeIn(500);
}

function networkOffline(){
	alert('networkOffline');
	document.getElementById('icon').innerHTML = '<img src="img/icon-offline.png" width="100%" alt="ok" />';
	document.getElementById('result').innerHTML = '<font color="#e35520">revise su<br />conexión de red</font>'; 
	$("#wrapper").hide();
	$("#home").hide();
	$("#icon").show();
	$("#result").show();
}

function networkOnline(){
	alert('networkOnline');
	$("#wrapper").show();
	$("#icon").hide();
	$("#result").hide();
}

function home(){
	alert('home');
	$("#icon").hide();
	$("#result").hide();
	$("#home").hide();
	$("#wrapper").show();
}