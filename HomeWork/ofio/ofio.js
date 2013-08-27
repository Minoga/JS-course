if (typeof define != 'function') {
    var define = function(callback){
        ofio = callback();
    }
}

define(function () {
    var JS = function(){

    };
    JS.extend = function (prototype) {
        var f = function(){
            this._init();
        };
        f.prototype = Object.create(this.prototype);
        for (var property in prototype) {
            f.prototype[property] = prototype[property];
        }
        f.prototype.constructor = f;
        f.extend = this.extend;
        return f;
    };
    return JS;
});
