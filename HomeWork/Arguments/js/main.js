function summaArray() {
  var result = [];
  for (var i=0; i<arguments.length; i++) {
      var summa = 0;
      for (var j=0; j<arguments[i].length; j++) {
          summa = summa + arguments[i][j];
      }
      result.push(summa)
  }
  console.log(result)
}

summaArray([1,2,3,4,], [2,3,4,5,6], [2,3,4,5,16])


