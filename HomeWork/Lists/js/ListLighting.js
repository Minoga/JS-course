/**
 * @class ListLigthing
 * @extends List
 * @param el
 * @constructor
 */
var ListLigthing = function(el) {
    List.call(this, el);
    /**
     * @type {Function}
     * @private
     */
    this._effect = this._twinkle.bind(this);
};

inherit(ListLigthing, List);

/**
 * @private
 */
ListLigthing.prototype._twinkle = function(){
    if (!('active' == this._el.classList[0])) {
        this._el.classList.add('active');
    } else {
        this._el.classList.remove('active');
    }
};
/**
 *
 * @param {Event} e
 * @protected
 */
ListLigthing.prototype._handleDrop = function(e) {
    List.prototype._handleDrop.call(this, e);
    setTimeout(this._effect, 200);
    setTimeout(this._effect, 400);
    setTimeout(this._effect, 600);
    setTimeout(this._effect, 800);
};




