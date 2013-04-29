function summaArray() {
  for (var i=0; i<arguments.length; i++) {
      var summa = 0;
      for (var j=0; j<arguments[i].length; j++) {
          summa = summa + arguments[i][j];
      }
      console.log(summa)
  }
}

summaArray([1,2,3,4,], [2,3,4,5,6], [2,3,4,5,16])


