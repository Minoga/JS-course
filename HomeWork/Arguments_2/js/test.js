var result = multiplyArrays([1, 2, 3, 4], [1, 2, 3, 4])
console.assert(result.length == 2, "Error length array");
console.assert(result[1] == 24, "Not right calculate elements");
console.assert(multiplyArrays([1, 2, 3, 4], [1, 2, 3, 5])[2] == 24, "Not right calculate elements");