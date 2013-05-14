var a = function (n) {
    return n * 2;
};

var b = function (n) {
    return n * 2 + 5;
};

var c = function (n) {
    return n * 3;
};

var d = function (n) {
    return n + 5;
};

var e = function () {
    return 5;
};

console.assert(cascadeCall(a, e) == 10, "Incorrect number");
console.assert(cascadeCall(b, e) == 15, "Incorrect number");
console.assert(cascadeCall(b, e) == 16, "Incorrect number");