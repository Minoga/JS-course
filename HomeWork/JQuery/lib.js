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
        if (selector.nodeType && (selector.nodeType == 1)){
            this.push(selector);
            return this;
        }
        if (selector.indexOf("<") == 0){
            var element = document.createElement('div');
            element.innerHTML = selector;
            var child = element.firstChild;
            while (child){
                this.push(child);
                child = child.nextSibling;
            }
            return this;
        }
        var elements = document.querySelectorAll(selector);
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
        var newThis = Lib();
            collection;
        this.forEach(function(item){
            collection = item.querySelectorAll(selector);
            Array.prototype.push.apply(newThis, collection);
        });
        return newThis;
    };

    Lib._events = [];
    /**
     *
     * @param {HTMLNode} node
     * @param {String} eventName
     * @param {Function} handler
     * @private
     */
    Lib.prototype._addEvent =  function (node, eventName, handler) {
        if (!(node in Lib._events)) {
            Lib._events[node] = {};
        }
        if (!(eventName in Lib._events[node])) {
            Lib._events[node][eventName] = [];
        }
        Lib._events[node][eventName].push(handler);
        node.addEventListener(eventName, handler);
    };

    /**
     *
     * @param {HTMLNode} node
     * @param {String} eventName
     * @private
     */
    Lib.prototype._removeAllEvents = function (node, eventName) {
        if(node in Lib._events) {
            var handlers = Lib._events[node];
            if(eventName in handlers) {
                var eventHandlers = handlers[eventName];
                for(var i = eventHandlers.length; i--;) {
                    var handler = eventHandlers[i];
                    node.removeEventListener(eventName, handler);
                }
            }
        }
    };

    /**
     * @param {String} eventName
     * @param {Function} callback
     * @returns {Lib}
     * @public
     */
    Lib.prototype.on = function (eventName, callback) {
        this.forEach(function(item){
            Lib.prototype._addEvent(item, eventName, callback)
        })
    };

    /**
     * @param {String} eventName
     * @param {Function} [callback]
     * @returns {Lib}
     * @public
     */
    Lib.prototype.off = function (eventName, callback) {
        if (arguments.length == 2){
            this.forEach(function(item){
                item.removeEventListener(eventName, callback);
            });
            return
        }
        this.forEach(function(item){
            Lib.prototype._removeAllEvents(item, eventName)
        })
    };

    /**
     * @param {Function} [callback]
     * @returns {Lib}
     * @public
     */
    Lib.prototype.click = function (callback) {
        this.forEach(function(item){
            item.click();
        });
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
            var positionChar = css.indexOf(":");
            var property = css.substring(0, positionChar);
            var value = css.substring(positionChar + 1);
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
        this.forEach(function(item){
            item.classList.add(className)
        });
    };

    /**
     * @param {String} className
     * @returns {Boolean}
     * @public
     */
    Lib.prototype.hasClass = function (className) {
        return this[0].classList.contains(className);
    };

    /**
     * @param {String} className
     * @returns {Lib}
     * @public
     */
    Lib.prototype.removeClass = function (className) {
        this.forEach(function(item){
            item.classList.remove(className);
        });
    };

    /**
     * @param {String} className
     * @returns {Lib}
     * @public
     */
    Lib.prototype.toggleClass = function (className) {
        this.forEach(function(item){
            item.classList.toggle(className);
        });
    };

    /**
     * @param {HTMLElement} element
     * @returns {Lib}
     * @public
     */
    Lib.prototype.appendTo = function (element) {
        this.forEach(function(item){
            element.appendChild(item);
        });
    };

    /**
     * @param {HTMLElement} element
     * @returns {Lib}
     * @public
     */
    Lib.prototype.prependTo = function (element) {
        this.forEach(function(item){
            element.insertBefore(item, element.firstChild);
        });
    };

    /**
     * @param {HTMLElement} element
     * @returns {Lib}
     * @public
     */
    Lib.prototype.append = function (element) {
        this.forEach(function(item){
            item.appendChild(element);
        });
    };

    /**
     * @param {HTMLElement} element
     * @returns {Lib}
     * @public
     */
    Lib.prototype.prepend = function (element) {
        this.forEach(function(item){
            item.insertBefore(element, item.firstChild);
        });
    };

    /**
     * @param {HTMLElement} element
     * @returns {Lib}
     * @public
     */
    Lib.prototype.insertAfter = function (element) {
        this.forEach(function(item){
            item.parentNode.insertBefore(element, item.nextSibling);
        });
    };

    /**
     * @param {HTMLElement} element
     * @returns {Lib}
     * @public
     */
    Lib.prototype.insertBefore = function (element) {
        this.forEach(function(item){
            item.parentNode.insertBefore(element, item);
        });
    };

    window.$ = Lib;
}());