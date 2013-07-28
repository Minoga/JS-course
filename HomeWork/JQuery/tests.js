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










