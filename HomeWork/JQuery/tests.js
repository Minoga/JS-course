/*jslint devel: true*/

// creation

var el = document.getElementById('lib'),
    $el = $('#lib');

console.assert(
    $el[0] === el,
    "$(selector) test failed"
);

var $span = $('<span id="id"/>');
console.assert($span.length == 1, '');
console.assert($span[0].tagName == 'span');
console.assert($span[0].getAttribute('id') == 'id');

console.assert(
    $(document.getElementById('lib'))[0] === el,
    "$(element) test failed"
);

// create collection

var $collection = $('.lib'),
    collection = document.getElementsByClassName('lib');

console.compareArrays($collection, collection);

// collections should not be live

var div = document.createElement('div');
div.className = 'lib';
document.body.appendChild(div);

console.assert($collection.length !== collection.length);


// find

var test = el.querySelector('.test'),
    $test = $el.find('.test');

console.assert(
    $test[0] === test,
    "$(selector) test failed"
);

// find in collection

var $testsInCollection = $collection.find('.test');
var tests = document.getElementsByClassName('test');
console.compareArrays($testsInCollection, tests);

// on

var handlerInvoked = false;
$testsInCollection.on('click', function () {
    handlerInvoked = true;
});

tests[0].click();
console.assert(handlerInvoked);

handlerInvoked = false;
tests[1].click();
console.assert(handlerInvoked);

// off

var anotherHandlerInvoked = false;
var handler = function(){
    anotherHandlerInvoked = true;
};

$testsInCollection.on('click', handler);
$testsInCollection.off('click', handler);
handlerInvoked = false;

tests[0].click();
console.assert(handlerInvoked);
console.assert(!anotherHandlerInvoked);

// off without second argument

$testsInCollection.on('click', handler);
$testsInCollection.off('click');
handlerInvoked = false;

tests[0].click();
console.assert(!handlerInvoked);
console.assert(!anotherHandlerInvoked);


$el.css({padding: '20px', margin: '30px'});
$el.css('padding', '20px');
$el.css('padding'); // '20px'


$el.addClass('test');
console.assert($el[0].className.indexOf("test") > -1, "addClass not work");
console.testClass($el, 'test', true);

console.assert($el[0].hasClass("test") == true, "hasClass not work");
console.hasClass($el, 'test');

$el.removeClass("test");
console.assert($el[0].className.indexOf("test") == -1, "removeClass not work");
console.testClass($el, 'test', false);

$el.toggleClass("test");
console.assert($el[0].className.indexOf("test") > -1, "toggleClass on not work");
console.testClass($el, 'test', true);

$el.toggleClass("test");
console.assert($el[0].className.indexOf("test") == -1, "toggleClass off  not work");
console.testClass($el, 'test', false);

var el = document.getElementById('lib');
var div = document.createElement('div');
$(div).appendTo(el);
console.assert(div.parentNode == el, "appendTo does  not work");
console.assert(div.previousSibling.className == test, "appendTo does  not work");
console.assert(el.lastChild == div, "appendTo does  not work");

$(div).prependTo(el);
console.assert(div.parentNode == el, "prependTo does  not work");
console.assert(div.nextSibling.className == test, "prependTo does  not work");
console.assert(el.firstChild == div, "prependTo does  not work");

$(el).append(div);
console.assert(div.parentNode == el, "append does  not work");
console.assert(div.previousSibling.className == test, "append does  not work");
console.assert(el.lastChild == div, "appenddoes  not work");





