const sample1 = () => {
// Reflexx Bug - JIR-10 - https://akshayakula.atlassian.net/browse/JIR-10
  console.log(r)
  console.log('hi')
  const hi = 'test'
  const sample5 = function () {
    console.log('hi')
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