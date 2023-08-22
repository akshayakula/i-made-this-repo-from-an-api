let sample =  () => {
	if( value > 10){
		console.log('value is greater than 10')
// Reflexx Bug - JIR-7 - https://akshayakula.atlassian.net/browse/JIR-7
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
