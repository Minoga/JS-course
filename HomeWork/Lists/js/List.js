var List = function(el) {
    this.el = el;
    this.__init(this.el);
};
List.prototype.__init = function(el) {
    var list = el.querySelectorAll('li');
    el.addEventListener('dragover', this.__handleDragOver, false);
    el.addEventListener('drop', this.__handleDrop.bind(this));
    [].forEach.call(list, function(li) {
        li.addEventListener('dragstart', this.__handleDragStart);
    }.bind(this));
};
List.prototype.__handleDragStart = function(e) {
    List.dragSrc = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this);
    e.dataTransfer.dropEffect='move';
};

List.prototype.__handleDragOver = function(e) {
    if (e.preventDefault) {
        e.preventDefault(); // Necessary. Allows us to drop.
    }
    e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
    return false;
};
List.prototype.__handleDrop = function(e) {
    if (e.stopPropagation) {
        e.stopPropagation(); // Stops some browsers from redirecting.
    }
    this.el.appendChild(List.dragSrc);
};





