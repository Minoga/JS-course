/**
 * @param {Element} el Передаваемый элемент
 */
function View(el) {
    var events = this.events,
        handler,
        classElement;
    for (var event in events) {
        if (event.indexOf(".") == -1) {
            el.addEventListener(event, this[events[event]]);
        }
        else {
            handler = event.substring(0, event.indexOf(" "));
            classElement = event.substr(event.indexOf(".") + 1, 1);
            (el.getElementsByClassName(classElement)[0]).addEventListener(handler, this[events[event]]);
        }
    }
}
View.prototype.events = {};

