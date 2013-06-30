var f = function(p1, p2){
    return p1 + p2 + this.prop;
};

var o = {prop: 7};

var bindedF = f.bind(o, 2);
var result = bindedF(5);
console.assert(result === 14, "Error bind");





