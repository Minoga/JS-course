var Animal = function (params) {
    this.name = params.name;
};

Animal.prototype.reproduce = function () {
    return new this.constructor({name: this.name + "'s son"});
};

var Cat = function (params) {
    Animal.call(this, params);
};

inherit(Animal, Cat);

var cat1 = new Cat({name: 'Murka'});
var cat2 = new Cat({name: 'Frisky'});

console.assert(cat1.name === 'Murka', 'wrong cat name');
console.assert(cat2.name === 'Frisky', 'wrong cat name');
console.assert(Cat.prototype.name === undefined, 'name should not be property of Cat.prototype');
var kitten = cat1.reproduce();
console.assert(kitten instanceof Animal, 'Kitten should be insance of Animal');
console.assert(kitten instanceof Cat, 'Kitten should be insance of Cat');
console.assert(kitten.name === "Murka's son", 'Kitten has wrong name');



