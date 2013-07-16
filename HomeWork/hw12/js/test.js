var JS = function(){

};

JS.extend = function (prototype) {
    var f = function(){
        this._init();
    };
    f.prototype = prototype;
    f.prototype.constructor = f;
    return f;
};


/**
 * @class Class
 */
var Class = JS.extend({
    /**
     * @constructor
     * @protected
     */
    _init: function(){
        console.log('init');
    },

    method: function () {
        console.log('method');
    }
});

Class.extend = function(proto){
    var f = function(){
        Class.call(this);
    };
    f.prototype = Object.create(Class.prototype);
    return f;
};

/**
 * @class ChildClass
 * @extends Class
 */
var ChildClass = Class.extend({
    /**
     * @constructor
     * @protected
     */
    _init: function () {
        Class.prototype._init.call(this);
    }
});







