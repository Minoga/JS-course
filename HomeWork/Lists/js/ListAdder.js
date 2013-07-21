/**
 * @class ListAdder
 * @extends List
 * @param {HTMLElement} el
 * @param {Manager} manager
 * @constructor
 */
var ListAdder = function(el, manager) {
    List.call(this, el);
    /**
     *
     * @type {Manager}
     * @private
     */
    this._manager = manager;
};
inherit(ListAdder, List);
/**
 * @param {Event} e
 * @protected
*/
ListAdder.prototype._handleDrop = function(e) {
    List.prototype._handleDrop.call(this, e);
    var cloneLi = List.dragSrc.cloneNode(true);
    cloneLi.addEventListener('dragstart', this._handleDragStart);
    this._manager.addToFirstList(cloneLi);
};


