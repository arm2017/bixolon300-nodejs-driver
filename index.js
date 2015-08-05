/**
 * Create by arm
 * 
 */

exports.printMsg = function() {
	console.log("This is a message from the demo package");
}
var instant = undefined;
exports.init = function() {
	// single tone
	if (instant !== undefined) {
		if (this.getvalidate() === false) {
			this.validateFn();
		}
		return instant;
	}

	var exec = require('child_process').exec;
	var validJdk = false;

	this.validateFn = function() {
		exec("java -version", function(error, stdout, stderr) {
			var step1 = "java version";
			var step2 = "java version \"1.6";
			var step3 = "java version \"1.5";
			var step4 = "java version \"1.8";

			if (error != null) {
				console.error("error", error);
				return;
			}

			if (stderr.indexOf(step1) == -1) {
				console.error("not found java");
				return;
			}
			if (stderr.indexOf(step2) != -1) {
				console.error("java version \"1.6 not support must 1.7+");
				return;
			}
			if (stderr.indexOf(step3) != -1) {
				console.error("java version \"1.5 not support must 1.5+");
				return;
			}

			if (stderr.indexOf(step4) != -1) {
				console.info("java 1.8 is ok");
			}

			validJdk = true;
			console.info("validJdk", validJdk);
		});
	};

	this.getvalidate = function() {
		return validJdk;
	};

	this.print = function(_plines, _fn) {
		if (_plines.constructor.toString() != Array) {
			console.error("param 1 is not array");
			return;
		}
		if (_fn !== undefined && _fn.constructor.toString() != Function) {
			console.error("param 2 Function is not Function");
			return;
		}

		var line = _plines.join("#line#");
		var enLine = encodeURI(line);
		// console.info(__dirname);
		var cmd = "java -cp \"%dir\\lib\\b300driver.jar\" com.dev.api.BIXOLON_300_Driver %parm1"
		var command = cmd.replace("%dir", __dirname).replace("%parm1", enLine);
		console.info(command);

		exec(command, function(error, stdout, stderr) {
			if (_fn !== undefined) {
				_fn(error, stdout, stderr);
			}
			if (error != null) {
				console.error(error)
			}else{
				console.info("done", stdout);
			}
		});

	};

	this.validateFn();
	instant = this;
	return this;
}