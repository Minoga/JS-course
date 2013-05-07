function createKitten(name, phrase) {
    return {
         name : name,
         die : function() {
             console.log(phrase)
         }
    }
};

var bag = {
    cats : {},
    put : function(newCat) {
        this.cats[newCat.name] = newCat;
    },
    getKitten : function(name) {
        return this.cats[name]
    },
    sink : function() {
        for (var cat in this.cats) 
            {
                this.cats[cat].die();
            }   
    }
};



