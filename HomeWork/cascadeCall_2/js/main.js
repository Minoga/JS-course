/*
 * cascadeCall() возвращает значение получаемое в результате вызова передаваемых в качестве параметров функций.
 *               каждая из передаваемых функций, кроме последней,  должна принимать один аргумент,
 *               производить над ним любые операции и возвращать результат
 * @param {..function} передаваемые для вызовов функции
 * @return {Array} результирующий массив
 */
function cascadeCall() {
    var result = arguments[arguments.length - 1]();
    [].reduceRight.call(arguments, function (previousValue, currentItem) {
        result = currentItem(previousValue);
        return result;
    }, result);
    return result;
}


