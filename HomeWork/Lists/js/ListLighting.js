var ListLigthing = function(el) {
    List.call(this, el);
};
inherit(ListLigthing, List);
ListLigthing.prototype.__twinkle = function(){
    if (!('active' == this.el.classList[0])) {
        this.el.classList.add('active');
    } else {
        this.el.classList.remove('active');
    }
};
ListLigthing.prototype.__handleDrop = function(e) {
    List.prototype.__handleDrop.call(this, e);
    setTimeout(function(){this.__twinkle()}.bind(this), 200);
    setTimeout(function(){this.__twinkle()}.bind(this), 400);
    setTimeout(function(){this.__twinkle()}.bind(this), 600);
    setTimeout(function(){this.__twinkle()}.bind(this), 800);
    console.log(this);
};




