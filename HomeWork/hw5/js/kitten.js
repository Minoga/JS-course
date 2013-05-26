/**
 * Класс для создания котенка
 * @class Kitten
 * @param {String} name Имя котенка
 * @param {String} phrase Последние слова котенка
 */
function Kitten (name, phrase) {
    this.name = name;
    this.phrase = phrase;
}
/**
 * Функция выводящая последние слова котенка.
 */
Kitten.prototype.die = function () {
    console.log(this.phrase);
};



