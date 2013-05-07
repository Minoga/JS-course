var kitten = createKitten("boris", "goodbuy");
var kitten1 = createKitten("boris1", "goodbuy1");
var kitten2 = createKitten("boris2", "goodbuy2");
bag.put(kitten);
bag.put(kitten1);
bag.put(kitten2);
bag.sink();



console.assert(bag.getKitten('boris') == kitten, "error");
console.assert(kitten.name == 'boris', "error");
console.assert(typeof kitten == 'object', "error");





