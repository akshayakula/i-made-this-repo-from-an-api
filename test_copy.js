let num = 10
// Reflexx Bug - JIR-7 - https://akshayakula.atlassian.net/browse/JIR-7

let value = 1; // defining value
let mple = function() {
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

function sample1 (){ // defining sample1
  console.log('sample1 function')
}

sample1()

