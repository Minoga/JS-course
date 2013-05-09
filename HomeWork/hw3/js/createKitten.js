/**
 * createKitten() возвращает объект у которого есть свойство name и метод die
 * @param {String} name строка, которая задает имя
 * @param {String} phrase строка, которая задает фразу
 * @returns {Object} объект , который возвращает функция
*/
function createKitten(name, phrase) {
    return {
         name : name,
         die : function() {
             console.log(phrase);
         }
    }
}

var bag = {
    cats : {},
    put : function(newCat) {
        this.cats[newCat.name] = newCat;
    },
    getKitten : function(name) {
        return this.cats[name];
    },
    sink : function() {
        for (var catName in this.cats) {
                this.cats[catName].die();
            }
    }
};



