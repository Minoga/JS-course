/*
 * cascadeCall() возвращает значение получаемое в результате вызова передаваемых в качестве параметров функций.
 *               каждая из передаваемых функций, кроме последней,  должна принимать один аргумент,
 *               производить над ним любые операции и возвращать результат
 * @param {..function} передаваемые для вызовов функции
 * @return {number} результирующий массив
 */
function cascadeCall() {
    var functionsArray = [],
        result = arguments[arguments.length - 1](),
        length = arguments.length - 2;
    [].forEach.call(arguments, function (item, i) {
        functionsArray.push(item);
        if (i == length) {
            return functionsArray;
        }
    });
    functionsArray.reduceRight(function (previousValue, currentItem) {
        result = currentItem(previousValue);
        return result;
    }, result);
    return result;
}


