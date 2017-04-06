$(function() {// Handler for .ready() called.
	// alert("Handler for .ready() called");
	$("#result").hide();
});


function scan(){
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

function testDet(){
	checkResult('fjnjkk534jn53kj6nk3jh6k2j3n6nkj3ng3d3det');
}

function testDer(){
	checkResult('fjnjkk534jn53kj6nk3jh6k2j3n6nkj3ng3d3der');
}

function testDer1(){
	checkResult('fjnjkk534jn53kj6nk3jh6k2j3n6nkj3ng3d3der1');
}

function checkResult(result){

 	$.get( "http://scr.ru/qrcode/php/search.php?qrcode=" + result, function( data ) {
		console.log('data: ' + data.toSource());
		if(data == Boolean(false)) {
			console.log('error not found');
		
		} else {
			if (data['date-first-query'] == null) {
				console.log('date-first-query NOT FOUND\ngreen ok: ' + data['date-first-query']);	
				ok(data);
			} else {
				console.log('date-first-query FOUND\nwarning: ' + data['date-first-query']);
				warning(data);
			}
		}
		

	}); 
}

function reset(){

 	$.get( "http://scr.ru/qrcode/php/reset.php?qrcode=fjnjkk534jn53kj6nk3jh6k2j3n6nkj3ng3d3det", function( data ) {
		console.log(data);
		// document.getElementById('result').innerHTML = 
		// data["reference"] + " " + data["brand"] + "<br />" + 
		// data["sub-reference"] + "<br />" + 
		// data["importer"] + "<br />" + 
		// data["date-import"] + "<br />" + 
		// "Lote: " + data["lot-number"] + "<br />" + 
		// "First Query: " + data["date-first-query"] + "<br />" + 
		// "Expiration: " + data["date-expiration"];
		
		// document.getElementById('icon').innerHTML = '<img src="img/icon-ok.png" width="100%" alt="ok" />';
		// document.getElementById('home').innerHTML = '<img src="img/icon-app-big.png" height="100%" alt="home" />';
		// $("#home").show();
		// $("#result").show();
		// $("#icon").show();
		// $("#wrapper").hide();
		// $("#icon").delay(2000).fadeOut(500);
		// $("#result").delay(2000).fadeOut(500);
		// $("#home").delay(2000).fadeOut(500);
		// $("#wrapper").delay(2000).fadeIn(500);
	}); 
}





function ok(data){
		document.getElementById('icon').innerHTML = '<img src="img/icon-ok.png" width="100%" alt="ok" />';
		document.getElementById('home').innerHTML = '<img src="img/icon-app-big.png" height="100%" alt="home" />';
		
		document.getElementById('result').innerHTML = 
		data["reference"] + " " + data["brand"] + "<br />" + 
		data["sub-reference"] + "<br />" + 
		data["importer"] + "<br />" + 
		data["date-import"] + "<br />" + 
		"Lote: " + data["lot-number"] + "<br />" + 
		"First Query: " + data["date-first-query"] + "<br />" + 
		"Expiration: " + data["date-expiration"];
		
		$("#home").show();
		$("#result").show();
		$("#icon").show();
		$("#wrapper").hide();
		$("#icon").delay(2000).fadeOut(500);
		// $("#result").delay(2000).fadeOut(500);
		$("#home").delay(2000).fadeOut(500);
		$("#wrapper").delay(2000).fadeIn(500);
}

function warning(data){
	document.getElementById('home').innerHTML = '<img src="img/icon-app-big.png" height="100%" alt="home" />';
	document.getElementById('icon').innerHTML = '<img src="img/icon-warning.png" width="100%" alt="ok" />';
	
	document.getElementById('result').innerHTML = 
	data["reference"] + " " + data["brand"] + "<br />" + 
	data["sub-reference"] + "<br />" + 
	data["importer"] + "<br />" + 
	data["date-import"] + "<br />" + 
	"Lote: " + data["lot-number"] + "<br />" + 
	"First Query: " + data["date-first-query"] + "<br />" + 
	"Expiration: " + data["date-expiration"];
	
	$("#wrapper").hide();
	$("#result").show();
	$("#home").show();
	$("#icon").show();
	$("#icon").delay(2000).fadeOut(500);
	// $("#result").delay(2000).fadeOut(500);
	$("#home").delay(2000).fadeOut(500);
	$("#wrapper").delay(2000).fadeIn(500);
}

function error(){
	document.getElementById('icon').innerHTML = '<img src="img/icon-error.png" width="100%" alt="ok" />';
	document.getElementById('home').innerHTML = '<img src="img/icon-app-big.png" height="100%" alt="home" />';
	$("#home").show();
	$("#icon").show();
	$("#wrapper").hide();
	$("#icon").delay(2000).fadeOut(500);
	$("#result").delay(2000).fadeOut(500);
	$("#home").delay(2000).fadeOut(500);
	$("#wrapper").delay(2000).fadeIn(500);
	// $("#wrapper").delay(2000).show();
}

function networkOffline(){
	$("#wrapper").hide();
	$("#home").hide();
	document.getElementById('icon').innerHTML = '<img src="img/icon-offline.png" width="100%" alt="ok" />';
	$("#icon").show();
	// $("#icon").delay(1000).fadeOut(500);
	// $("#result").delay(1000).fadeOut(500);
	// $("#wrapper").delay(1000).fadeIn(500);
	// $("#wrapper").delay(2000).show();
}

function networkOnline(){
	$("#wrapper").show();
	$("#icon").hide();
}

function home(){
	$("#icon").hide();
	$("#result").hide();
	$("#home").hide();
	$("#wrapper").show();
}

/* function preloadImages(){
	preload([
		'img/icon-app-big.png',
		'img/icon-error.png',
		'img/icon-offline.png',
		'img/icon-ok.png',
		'img/icon-scan.png',
		'img/icon-warning.png',
		'img/logo-trueliq.png',
	]);
}


function preload(arrayOfImages) {
    $(arrayOfImages).each(function () {
        $('<img />').attr('src',this).appendTo('body').css('display','none');
    });
} */