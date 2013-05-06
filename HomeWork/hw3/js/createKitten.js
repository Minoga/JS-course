function createKitten(name, phrase) {
    this.name = name;
    this.phrase = phrase;
    this.die = function() {
        return this.phrase;
    };
};

var bag = {
    cats : {},
    putCat : function(newCat) {
        this.cats[newCat.name] = newCat;
    },
    getCat : function(prison) {
        return this.cats[prison]
    },
    sinkCat : function() {
        for (var cat in this.cats) 
            {
                console.log(this.cats[cat].die());
            }   
    }
}



