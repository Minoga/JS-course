/**
 * @class Manager
 * @constructor
 */
var Manager = function() {
};

/**
 * @type {Array}
 * @private
 */
Manager.prototype._lists = [];

/**
 * @param {List} list
 */
Manager.prototype.pushList = function(list) {
    this._lists.push(list);
};

/**
 * @param {HTMLElement} el
 */
Manager.prototype.addToFirstList = function(el) {
    this._lists[0].addItem(el);
};




