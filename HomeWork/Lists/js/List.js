/**
 * @class List
 * @param {HTMLElement} el
 * @constructor
 */
var List = function(el) {
    /**
     * @type {HTMLElement}
     * @private
     */
    this._el = el;
    this._init();
};

/**
 * @private
 */
List.prototype._init = function() {
    var list = this._el.querySelectorAll('li');
    this._el.addEventListener('dragover', this._handleDragOver, false);
    this._el.addEventListener('drop', this._handleDrop.bind(this));
    Array.prototype.forEach.call(list, function(li) {
        li.addEventListener('dragstart', this._handleDragStart);
    }.bind(this));
};

/**
 * @param {Event} e
 * @private
 */
List.prototype._handleDragStart = function(e) {
    List.dragSrc = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('HTMLLIElement', this);
    e.dataTransfer.dropEffect='move';
    console.log(e.dataTransfer);
};

/**
 * @param {Event} e
 * @private
 */
List.prototype._handleDragOver = function(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
};

/**
 * @protected
 */
List.prototype._handleDrop = function() {
    this.addItem(List.dragSrc);
};

/**
 * @public
 */
List.prototype.addItem = function(el) {
    this._el.appendChild(el);
};





