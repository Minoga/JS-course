function Kitten (name, phrase) {
    this.name = name;
    this.phrase = phrase;
}

Kitten.prototype.die = function () {
    return this.phrase;
};



