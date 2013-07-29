/*jslint todo: true*/
/*global window*/

(function () {
    "use strict";

    /**
     * @param {String|HTMLElement} selector
     * @constructor
     * @class Lib
     */
    var Lib = function (selector, context) {
        return new Lib.fn._init(selector, context);
    };

    Lib.prototype = Object.create(Array.prototype);
    Lib.prototype.constructor = Lib;
    Lib.prototype._init = function (selector, context) {
        if (!selector)
            return this;
        if (selector.indexOf("<") == 0){
            var element = document.createElement('div');
            element.innerHTML = selector;
            var fragment = document.createDocumentFragment();
            var child = element.firstChild;
            while (child){
                fragment.appendChild(child.cloneNode(true));
                child = child.nextSibling;
            }
            this.push(fragment);
            return this;
        }

        var elements = context ? document.querySelectorAll(context + " " + selector) : document.querySelectorAll(selector);
        Array.prototype.push.apply(this, elements);
        return this;
    };


    Lib.fn = Lib.prototype

    Lib.fn._init.prototype = Lib.fn;

    /**
     * @param {String} selector
     * @returns {Lib}
     * @public
     */
    Lib.prototype.find = function (selector) {
        var newThis = new Lib;
            collection;
        this.forEach(function(item){
            collection = item.querySelectorAll(selector);
            Array.prototype.push.apply(newThis, collection);
        });
        return newThis;
    };

    /**
     * @param {String} eventName
     * @param {Function} callback
     * @returns {Lib}
     * @public
     */
    Lib.prototype.on = function (eventName, callback) {
        // TODO
    };

    /**
     * @param {String} eventName
     * @param {Function} [callback]
     * @returns {Lib}
     * @public
     */
    Lib.prototype.off = function (eventName, callback) {
        // TODO
    };

    /**
     * @param {Function} [callback]
     * @returns {Lib}
     * @public
     */
    Lib.prototype.click = function (callback) {
        // TODO
    };

    /**
     * @returns {Lib}
     * @public
     */
    Lib.prototype.css = function (css) {
        if (typeof css == "object"){
            this.forEach(function(item){
               for (var property in css) {
                   item.style[property] = css[property];
               }
            });
            return this;
        }
        if (css.indexOf(":") != -1){
            var property = css.substring(0, css.indexOf(":"));
            var value = css.substring(css.indexOf(":")+1);
            this.forEach(function(item){
                    item.style[property] = value;
            });
            return this;
        }
        if (this[0].style[css])
            return this[0].style[css];

        return getComputedStyle(this[0])[css];
    };

    /**
     * @returns {Lib}
     * @public
     */
    Lib.prototype.attr = function () {
        // TODO
    };

    /**
     * @param {String} className
     * @returns {Lib}
     * @public
     */
    Lib.prototype.addClass = function (className) {
        // TODO
    };

    /**
     * @param {String} className
     * @returns {Boolean}
     * @public
     */
    Lib.prototype.hasClass = function (className) {
        // TODO
    };

    /**
     * @param {String} className
     * @returns {Lib}
     * @public
     */
    Lib.prototype.removeClass = function (className) {
        // TODO
    };

    /**
     * @param {String} className
     * @returns {Lib}
     * @public
     */
    Lib.prototype.toggleClass = function (className) {
        // TODO
    };

    /**
     * @param {HTMLElement} element
     * @returns {Lib}
     * @public
     */
    Lib.prototype.appendTo = function (element) {
        // TODO
    };

    /**
     * @param {HTMLElement} element
     * @returns {Lib}
     * @public
     */
    Lib.prototype.prependTo = function (element) {
        // TODO
    };

    /**
     * @param {HTMLElement} element
     * @returns {Lib}
     * @public
     */
    Lib.prototype.append = function (element) {
        // TODO
    };

    /**
     * @param {HTMLElement} element
     * @returns {Lib}
     * @public
     */
    Lib.prototype.prepend = function (element) {
        // TODO
    };

    /**
     * @param {HTMLElement} element
     * @returns {Lib}
     * @public
     */
    Lib.prototype.insertAfter = function (element) {
        // TODO
    };

    /**
     * @param {HTMLElement} element
     * @returns {Lib}
     * @public
     */
    Lib.prototype.insertBefore = function (element) {
        // TODO
    };

    window.$ = Lib;
}());