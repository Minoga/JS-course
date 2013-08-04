/*jslint devel: true*/

// creation
var el = document.getElementById('lib'),
    $el = $('#lib');
console.assert(
    $el[0] === el,
    "$(selector) test failed"
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


// css

console.assert($test.css('paddingTop') == "40px", "css does not work");
$test.css('paddingTop: 30px');
console.assert($test[0].style.paddingTop == "30px", "css does not work");
console.compareCss($test, {paddingTop: "30px"});
$test.css({paddingTop: "50px", marginLeft: "400px"});
console.assert($test[0].style.paddingTop == "50px" && $test[0].style.marginLeft == "400px", "css does not work");
console.compareCss($test, {paddingTop: "50px", marginLeft: "400px"});


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

$el.addClass('test');
console.assert($el[0].className.indexOf("test") > -1, "addClass not work");
console.testClass($el, 'test', true);

console.assert($($el[0]).hasClass('test'), "hasClass not work");

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
console.assert(div.parentNode == el, "appendTo1 does  not work");
console.assert(div.previousSibling.previousSibling.className == 'test', "appendTo2 does  not work");
console.assert(el.lastChild == div, "appendTo3 does  not work");

$(div).prependTo(el);
console.assert(div.parentNode == el, "appendTo1 does  not work");
console.assert(div.nextSibling.nextSibling.className == 'test', "appendTo2 does  not work");
console.assert(el.firstChild == div, "appendTo3 does  not work");

$(el).append(div);
console.assert(div.parentNode == el, "append does  not work");
console.assert(div.previousSibling.previousSibling.className == 'test', "append does  not work");
console.assert(el.lastChild == div, "appenddoes  not work");

$(el).prepend(div);
console.assert(div.parentNode == el, "appendTo1 does  not work");
console.assert(div.nextSibling.nextSibling.className == 'test', "appendTo2 does  not work");
console.assert(el.firstChild == div, "appendTo3 does  not work");

$($test[3]).insertAfter(div);

$($test[3]).insertBefore(div);










