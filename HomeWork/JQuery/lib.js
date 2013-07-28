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
        return new Lib.fn.init(selector, context);
    };

    Lib.prototype = Object.create(Array.prototype);
    Lib.prototype.constructor = Lib;
    Lib.prototype.init = function (selector, context) {
        var elements = context ? document.querySelectorAll(context + " " + selector) : document.querySelectorAll(selector);
        for (var i = 0; i < elements.length; i++)
            this.push(elements[i]);
        return this;
    };


    Lib.fn = Lib.prototype

    Lib.fn.init.prototype = Lib.fn;

    /**
     * @param {String} selector
     * @returns {Lib}
     * @public
     */
    Lib.prototype.find = function (selector) {
        var newThis = [],
            collection;
        this.forEach(function(item){
            collection = item.querySelectorAll(selector);
            for (var i = 0; i < collection.length; i++) {
                newThis.push(collection[i]);
            }
        });
        this.length = 0;
        for (var i = 0; i < newThis.length; i++ )
            this.push(newThis[i]);
        return this;
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