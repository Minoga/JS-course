function Bag() {
    this.cats = [];
}

Bag.prototype.put = function(newCat) {
    this.cats[newCat.name] = newCat;
};

Bag.prototype.getKitten = function(name) {
    return this.cats[name];
};

Bag.prototype.sink = function() {
    for (var catName in this.cats) {
        this.cats[catName].die();
    }
};
