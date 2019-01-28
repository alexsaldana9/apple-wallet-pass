var request = require('request');

var headers = {
    'content-type': 'multipart/form-data; boundary=----FORM_BOUNDARY',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36'
};
// var dataString = '$------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_structure_primaryFields_primary_label"\r\n\r\nname\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_structure_primaryFields_primary_value"\r\n\r\nFinn Shark\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_structure_secondaryFields_secondary_label"\r\n\r\nstatus\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_structure_secondaryFields_secondary_value"\r\n\r\nStudent/Employee\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_structure_auxiliaryFields_level_label"\r\n\r\nId\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_structure_auxiliaryFields_level_value"\r\n\r\n1234567890\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_structure_auxiliaryFields_favorite_label"\r\n\r\n\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_structure_auxiliaryFields_favorite_value"\r\n\r\n\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_structure_backFields_info_label"\r\n\r\n\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_structure_backFields_info_value"\r\n\r\n\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_backgroundColor"\r\n\r\n#f882ee\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_foregroundColor"\r\n\r\n#ffffff\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_logoText"\r\n\r\nMD Card\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_barcode_altText"\r\n\r\n\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_barcode_format"\r\n\r\nPKBarcodeFormatPDF417\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_barcode_message"\r\n\r\n{hashedSerialNumber}\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="thumbnail"; filename=""\r\nContent-Type: application/octet-stream\r\n\r\n\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="thumbnail@2x"; filename=""\r\nContent-Type: application/octet-stream\r\n\r\n\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_submit"\r\n\r\nRegister\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm"\r\n\r\n0\r\n------FORM_BOUNDARY--\r\n';

//inputs and labels
var nameLabel = 'Name';
var nameInput = 'Finn Shark';
var statusLabel = 'Status';
var statusInput = 'Employee/Student';
var idLabel = 'id';
var idInput = 123456789;
var logoTextLabel = 'MD Card';
var backgroundColor = '#2160aa';
var barcodeFormat = 'PKBarcodeFormatPDF417';
var barcodeMessage = '{hashedSerialNumber}';


var dataString = '$------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_structure_primaryFields_primary_label"\r\n\r\n+nameLabel+\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_structure_primaryFields_primary_value"\r\n\r\n+nameInput+\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_structure_secondaryFields_secondary_label"\r\n\r\nstatus\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_structure_secondaryFields_secondary_value"\r\n\r\n+statusInput+\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_structure_auxiliaryFields_level_label"\r\n\r\n+idLabel+\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_structure_auxiliaryFields_level_value"\r\n\r\n+idInput+\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_structure_auxiliaryFields_favorite_label"\r\n\r\n\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_structure_auxiliaryFields_favorite_value"\r\n\r\n\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_structure_backFields_info_label"\r\n\r\n\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_structure_backFields_info_value"\r\n\r\n\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_backgroundColor"\r\n\r\n+backgroundColor+\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_foregroundColor"\r\n\r\n#ffffff\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_logoText"\r\n\r\n+logoTextLabel+\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_barcode_altText"\r\n\r\n\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_barcode_format"\r\n\r\n+barcodeFormat+\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_barcode_message"\r\n\r\n+barcodeMessage+\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="thumbnail"; filename=""\r\nContent-Type: application/octet-stream\r\n\r\n\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="thumbnail@2x"; filename=""\r\nContent-Type: application/octet-stream\r\n\r\n\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm_0_submit"\r\n\r\nRegister\r\n------FORM_BOUNDARY\r\nContent-Disposition: form-data; name="psForm"\r\n\r\n0\r\n------FORM_BOUNDARY--\r\n';

var options = {
    url: 'https://www.passsource.com/pass/register.php?templateId=5',
    method: 'POST',
    followRedirect: false,
    headers: headers,
    body: dataString
};

var registerURL="";

function callback(error, response, body) {
    if (error) {
	    return console.error('POST failed:', err);
	  }

	  console.log('POST successful! Server responded with:');
  	console.log(response.statusCode);

  	if (response.statusCode == 302){
  		console.log("Extract the token from:")
  		console.log(response.headers.location);
    }
    
  registerURL = response.headers.location;
  console.log("registerURL >>>>", registerURL);

}

request(options, callback);



setTimeout(function () {  
  console.log("--------");
  console.log("registerURL need to extract Serial>>>>", registerURL);

  //Extract the SerialNumber from the URL
  var serialNum = registerURL.substring(
    registerURL.indexOf("=") + 1,
    registerURL.indexOf(",")
  );
  console.log("--------");
  console.log("serialNum >>>", serialNum);

  //Put the SerialNumber extracted into the create page
  //https://www.passsource.com/pass/create.php?hashedSerialNumber=eNortjIysVLKdK5yLvavzM0qzXL0yy8I9IxMCgsJtLVVsgZcMK0sCl8,&download=true
  var createURL = "https://www.passsource.com/pass/create.php?hashedSerialNumber=,&download=true";
  var position = 62;
  var createSerialNumURL = [createURL.slice(0, 62), serialNum, createURL.slice(position)].join('');
  
  console.log("--------");
  console.log("createSerialNumURL - serialNum in create.php ...", createSerialNumURL);

 
}, 3000);

