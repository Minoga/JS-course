if (typeof define != 'function') {
    var define = function(callback){
        Ofio = callback();
    }
}

define(function () {
    var Ofio = function(){

    };
    Ofio.extend = function (prototype) {
        var f = function(){
            this._init();
        };
        function F() {}
        F.prototype = this.prototype;
        f.prototype = new F;
        for (var property in prototype) {
            f.prototype[property] = prototype[property];
        }
        f.prototype.constructor = f;
        f.extend = this.extend;
        return f;
    };
    return Ofio;
});
