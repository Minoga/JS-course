function View(config) {
    var el = config.el;
    this.init(el);
}
View.prototype.events = {};
View.prototype.init = function (el) {
    "use strict";
    var eventDescription,
        eventName,
        selector;
    this._eventSorting = {};
    for (eventDescription in this.events) {
        if (this.events.hasOwnProperty(eventDescription)) {
            if (eventDescription.indexOf(' ') > 0) {
                eventName = eventDescription.substring(0, eventDescription.indexOf(' '));
                selector = eventDescription.substring(eventDescription.indexOf(' '));
            } else {
                eventName  = eventDescription;
                selector = null;
            }
            if (selector) {
                if (this._eventSorting[eventName]) {
                    this._eventSorting[eventName][selector] = this.events[eventDescription];
                } else {
                    this._eventSorting[eventName] = {};
                    this._eventSorting[eventName][selector] = this.events[eventDescription];
                }
            } else {
                if (this._eventSorting[eventName]) {
                    this._eventSorting[eventName].element = this.events[eventDescription];
                } else {
                    this._eventSorting[eventName] = {};
                    this._eventSorting[eventName].element = this.events[eventDescription];
                }
            }
        }
    }
    for (var eventType in this._eventSorting) {
        if (this._eventSorting.hasOwnProperty(eventType)) {
            el.addEventListener(eventType, this._addHandler.bind(this, eventType, el))
        }
    }
};

View.prototype._addHandler = function (eventType, el, event) {
    var selectors = this._eventSorting[eventType],
        selector;
    for (selector in selectors) {
        if (event.target == el){
            this[selectors.element]();
            return;
        }
        if (selectors.hasOwnProperty(selector)) {
            if (event.target.mozMatchesSelector(selector)) {
                this[selectors[selector]]();
                return;
            }
        }
    }
};