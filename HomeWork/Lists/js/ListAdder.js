var ListAdder = function(el, manager) {
    List.call(this, el);
    this.manager = manager;
};
inherit(ListAdder, List);

ListAdder.prototype.__handleDrop = function(e) {
    List.prototype.__handleDrop.call(this, e);
    this.__addItem();
    console.log(this);
};

ListAdder.prototype.__addItem = function() {
    var on = List.dragSrc.cloneNode(true);
    on.addEventListener('dragstart', this.__handleDragStart);
    this.manager.__lists[0].appendChild(on);
};


