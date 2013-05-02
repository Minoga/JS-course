function multiplyArrays() {
  var result = [];
  var product = 1;
  for (var i=0; i<arguments.length; i++) {
      product = 1;
      for (var j=0; j<arguments[i].length; j++) {
          product *= arguments[i][j];
      }
      result.push(product)
  }
  console.log(result)
}

multiplyArrays([1,2,3,4,], [2,3,4,5,6], [2,3,4,5,16])


