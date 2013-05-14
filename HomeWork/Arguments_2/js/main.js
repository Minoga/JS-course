/*
 * multiplyArrays() возвращает массив элементы которого являются произведением элементов массивов переданных в качестве параметров
 * @param {..Array} передаваемые для обработки массивы
 * @return {Array} результирующий массив
 */

function multiplyArrays() {
    var resultArray = [],
        portion;
    resultArray = [].map.call(arguments, function (item) {
        return item.reduce(function (previousValue, currentItem) {
            portion = previousValue * currentItem;
            return portion;
        });
    });
    return resultArray;
}



