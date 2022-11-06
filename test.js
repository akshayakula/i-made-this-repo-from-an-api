const sample = function() {

	num = num + value
	if (num !== 6) {
		throw new Exception("Value should be 6");
	}
}mple = function() {
  var num = 5
// Reflexx Bug - JIR-5 - https://akshayakula.atlassian.net/browse/JIR-5
	num = num + value
	if (num !== 6) {
		throw new Exception("Value should be 6");
	}
}


const sample2 = function () {
  console.log('hi')
}

const sample3 = sample2

function sample4 (){
  console.log('hi')
}

sample1()