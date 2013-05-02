var a = function(n){
 return n*2;
}

var b = function(n){
 return n*2 + 5;
}

var c = function(n){
 return n*3;
}

var d = function(n){
 return n+5;
}

var e = function(){
 return 5;
}

function cascadeCall(){
    var result = 0;
    var length = arguments.length-1;
    for (var i=length; i>=0; i--) {
        if (i == length){
            result=arguments[i]();
        }
        else {
            result=arguments[i](result);
        }
    }
    return result;
}

console.log(cascadeCall(a, b, c, d, e));
console.log(cascadeCall(a, e));



