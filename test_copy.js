let num = 10
// Reflexx Bug - JIR-7 - https://akshayakula.atlassian.net/browse/JIR-7
let mple = function() {
	let value = 1; // defining value
	num = num + value
	if (num !== 6) {
		throw new Exception("Value should be 6");
	}
}

const sample2 = function () {
  console.log('hi')
}

sample1()

