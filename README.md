# bixolon300-nodejs-driver
BIXOLON SRP-F310 java driver test for window

##

ประกาศตัวแปร
var printer = require('bixolon300-nodejs-driver').init();

ใช้งาน

		var lines = [ "CP ALL 7-Eleven xxxxxxxxxx 307689" 
		              , "TAX#1234567890 VAT include"
		              , "Vat xxxxxxxxxxxxxxxxxx"
		              , "ใบเสร็จรับเงิน/ใบกำกับภาษีอย่างย่อ"
		              , "1 บีอิ้งสีสมภู			20.00"
		              , "1 ครีม			15.00"
		              , "2 แสตมป์			00.00"];
		
		printer.print(lines, function(e, sout, serr) {
			console.log(sout);
		});

ปล..
function(e, sout, serr)
e : not null if [error]
sout : output from command lines
serr : output from command lines
