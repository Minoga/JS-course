var JS = function(){

};

JS.extend = function (prototype) {
    var f = function(){
        this._init();
    };
    for (var property in this.prototype) {
        if (this.prototype.hasOwnProperty(property)) {
            f.prototype[property] = this.prototype[property];
        }
    }
    for (property in prototype) {
        f.prototype[property] = prototype[property];
    }
    f.prototype.constructor = f;
    f.extend = this.extend;
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
    },

    method: function () {
        console.log('metsdfsdfsfsfhod');
    }
});
var ChildChildClass = ChildClass.extend({
    /**
     * @constructor
     * @protected
     */
    _init: function () {
        ChildClass.prototype._init.call(this);
    },

    method: function () {
        console.log('ChildClass');
    }
});

var childChildClass = new ChildChildClass;
childChildClass.method();
var childClass = new ChildClass;
childClass.method();
var child = new Class;
child.method();