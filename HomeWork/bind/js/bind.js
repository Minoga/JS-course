Function.prototype.bind = function(context) {
    var that = this;
    var args = Array.prototype.slice.call(arguments, 1);
    return function() {
        args =  Array.prototype.slice.call(arguments).concat(args);
        return that.apply(context, args);
    }
}


