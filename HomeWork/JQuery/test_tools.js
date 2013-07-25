console.compareArrays = function (ar1, ar2) {
    this.assert(ar1.length === ar2.length, 'Lengths of arrays should be equal');

    for (var i = 0, i_ln = ar1.length; i < i_ln; i++) {
        this.assert(ar1[i] === ar2[i]);
    }
};
console.testClass = function (ar1, className, flag) {
    if (flag) {
        for (var i = 0, i_ln = ar1.length; i < i_ln; i++) {
            this.assert(ar1[i].className.indexOf(className) > -1, "not work");
        }
        return;
    }
    for (var i = 0, i_ln = ar1.length; i < i_ln; i++) {
        this.assert(ar1[i].className.indexOf(className) == -1, "not work");
    }
};

console.hasClass = function (ar1, className) {
    for (var i = 0, i_ln = ar1.length; i < i_ln; i++)
        this.assert(ar1[i].hasClass(className) == true, "not work");
};