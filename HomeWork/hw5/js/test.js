var kitten = new Kitten('April', 'I wanna live');

console.assert(kitten.name == 'April', 'Wrong name');

console.assert(kitten.die() == 'I wanna live', 'Wrong phrase');

var stupidKitten = new Kitten('Nyasha', 'meow');

var smartKitten = new Kitten('Murka', 'fuck off');

var bag = new Bag;

bag.put(kitten);

bag.put(stupidKitten);

bag.put(smartKitten);

console.assert(bag.getKitten('April') === kitten, 'Wrong class');
console.assert(bag.getKitten('notExistedKitten') == null, 'Kitten are not created');

bag.sink();




