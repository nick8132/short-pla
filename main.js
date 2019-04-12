const print = function(...arguments) {
	for (var i = 0; i < arguments.length; i++) {
		if (typeof arguments[i] == 'string') {
			arguments[i] = "'" + arguments[i] + "'"
		}
		if (typeof arguments[i] == 'object') {
			arguments[i] = JSON.stringify(arguments[i])
		}
	}
	console.log(arguments.join(' '))
}


const prompt = function(message, value, callback) {
	let ans;
	process.stdout.write(message + ': ');
	if (value)
		if (typeof value == 'string')
			process.stdout.write('(' + value + '): ');
	if (typeof value == 'function') {
		callback = value
	}
	if (typeof message == 'string' && typeof callback == 'function') {
		process.stdin.on('readable', () => {
			ans = process.stdin.read().toString().split('\r')[0]
			if (ans) {
				callback(ans);
			} else {
				if (value && typeof value == 'string') {
					callback(value);
				} else {
					callback(ans);
				}
			}
		});
	} else {
		console.log('Wrong user input!')
	}
}


var arg = null;
if (process.argv.slice(2).length>0) {
	arg = process.argv.slice(2)
}
module.exports = {
	print,
	prompt,
	arg
}