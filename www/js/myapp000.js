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
		data["brand"] + "<br />" + 
		data["importer"] + "<br />" + 
		data["reference"] + "<br />" + 
		data["sub-reference"] + "<br />" + 
		data["date-import"] + "<br />" + 
		data["lot-number"] + "<br />" + 
		data["date-first-query"] + "<br />" + 
		data["date-expiration"];
		$("#result").delay(2000).fadeOut(2000);
	});
}

function ok(){
	$("#wrapper").hide();
	$("#icon").show();
	document.getElementById('icon').innerHTML = "ok";
	$("#icon").delay(2000).fadeOut(1000);
	$("#wrapper").hide();


}