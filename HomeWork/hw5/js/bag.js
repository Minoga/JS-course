/**
 * Класс для создания мешка
 * @class Bag
 */
function Bag() {
    this.cats = [];
}

/**
 * Добавляет котенка в мешок
 * @param {Kitten} newCat экземпляр класса Kitten
 */
Bag.prototype.put = function(newCat) {
    this.cats[newCat.name] = newCat;
};

/**
 * Возвращает котенка по имени
 * @param {String} name имя котенка которого требуется вернуть
 */
Bag.prototype.getKitten = function(name) {
    return this.cats[name];
};

/**
 * Вызывает функцию die() у всех котят в мешке
 */
Bag.prototype.sink = function() {
    for (var catName in this.cats) {
        this.cats[catName].die();
    }
};
