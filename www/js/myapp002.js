$(function() {// Handler for .ready() called.
	// alert("sdfhdf");
	$("#result").hide();
});


// alert("sdfhdf"):

function scan(){
	// console.log("clicked");
	// document.getElementById('result').innerHTML = 'test';
	cordova.plugins.barcodeScanner.scan(function(result){
		// success callback
		// alert(JSON.stringify(result));
		// alert("We got a barcode\n" +
		// "Result: " + result.text + "\n" +
		// "Format: " + result.format + "\n" +
		// "Cancelled: " + result.cancelled);
		document.getElementById('result').innerHTML = "Result:<br />" + result.text + "<br />" + "Format: " + result.format + "<br />" + "Cancelled: " + result.cancelled;
		
	},function(error){
		// error callback
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

function test(){
	// alert("test");
	/* $.ajax({
	// url: "test.html",
	// url: "http://trueliq.com/test.php",
	url: "http://trueliq.com/test.php",
	context: document.body,
	dataType : "json",  
	success: function(){
		// $(this).addClass("done");
		document.getElementById('result').innerHTML = ";
	}
	}); */
	// $( ".result" ).html( data );
	
	// $.get( "http://trueliq.com/test.php", function( data ) {
	// $.get( "http://scr.ru/qrcode/php/test.php?qrcode=fjnjkk534jn53kj6nk3jh6k2j3n6nkj3ng3d3det", function( data ) {

	$.get( "http://scr.ru/qrcode/php/test.php?qrcode=fjnjkk534jn53kj6nk3jh6k2j3n6nkj3ng3d3det", function( data ) {
		// alert( "Load was performed." );
		// document.getElementById('result').innerHTML = data.qr-code + "<br />" + data.sub-reference;
		// $("#result").fadeIn(1000);
		$("#result").show();
		document.getElementById('result').innerHTML = 
		data["reference"] + " " + data["brand"] + "<br />" + 
		data["sub-reference"] + "<br />" + 
		data["importer"] + "<br />" + 
		data["date-import"] + "<br />" + 
		"Lote: " + data["lot-number"] + "<br />" + 
		"First Query: " + data["date-first-query"] + "<br />" + 
		"Expiration: " + data["date-expiration"];
		$("#result").delay(28000).fadeOut(2000);
	});
}

function ok(){
	document.getElementById('icon').innerHTML = '<img src="img/icon-ok.png" width="100%" alt="ok" />';
	document.getElementById('home').innerHTML = '<img src="img/icon-app-big.png" height="100%" alt="home" />';
	$("#home").show();
	$("#result").show();
	$("#icon").show();
	$("#wrapper").hide();
	$("#icon").delay(2000).fadeOut(500);
	$("#result").delay(2000).fadeOut(500);
	$("#home").delay(2000).fadeOut(500);
	$("#wrapper").delay(2000).fadeIn(500);
	// $("#wrapper").delay(2000).show();
}

function warning(){
	$("#wrapper").hide();
	document.getElementById('home').innerHTML = '<img src="img/icon-app-big.png" height="100%" alt="home" />';
	$("#home").show();
	document.getElementById('icon').innerHTML = '<img src="img/icon-warning.png" width="100%" alt="ok" />';
	$("#icon").show();
	$("#icon").delay(2000).fadeOut(500);
	$("#result").delay(2000).fadeOut(500);
	$("#home").delay(2000).fadeOut(500);
	$("#wrapper").delay(2000).fadeIn(500);
	// $("#wrapper").delay(2000).show();
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