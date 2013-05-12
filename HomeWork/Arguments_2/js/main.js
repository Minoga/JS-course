/*
 * multiplyArrays() возвращает массив элементы которого являются произведением элементов массивов переданных в качестве параметров
 * @param {..Array} передаваемые для обработки массивы
 * @return {Array} результирующий массив
 */

function multiplyArrays() {
    var argumentsArray = [],
        resultArray = [],
        sum,
        length = arguments.length - 1;
    [].forEach.call(arguments, function (item) {
        item.reduce(function (previousValue, currentItem) {
            sum = previousValue * currentItem;
            return sum;
        });
        resultArray.push(sum);
        sum = 0;
    });

    return resultArray;
}



