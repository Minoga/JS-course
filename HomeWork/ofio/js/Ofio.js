if (typeof define != 'function') {
    var define = function(callback){
        Ofio = callback();
    }
}

define(function () {
    // The base Class implementation (does nothing)
    var Ofio = function(){};

    // Create a new Class that inherits from this class
    Ofio.extend = function(prop) {
        var _super = this.prototype;
        var f = function(){};
        f.prototype = this.prototype;
        var prototype = new(f);


        // Copy the properties over onto the new prototype
        for (var name in prop) {
            // Check if we're overwriting an existing function
            prototype[name] =
                (function(name, fn){
                    return function() {
                        this._super = _super[name];
                        var ret = fn.apply(this, arguments);
                        return ret;
                    };
                })(name, prop[name]);
        }

        // The dummy class constructor
        function Class() {
            // All construction is actually done in the init method
            //if ( !initializing && this.init )
            this._init.apply(this, arguments);
        }

        // Populate our constructed prototype object
        Class.prototype = prototype;

        // Enforce the constructor to be what we expect
        Class.prototype.constructor = Class;

        // And make this class extendable
        Class.extend = this.extend;
        return Class;
    };
    return Ofio;
});
