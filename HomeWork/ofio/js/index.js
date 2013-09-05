requirejs.config({
    paths: {
        jasmine: "jasmine-1.3.1/jasmine",
        'jasmine-html': "jasmine-1.3.1/jasmine-html"
    },
    shim: {
        jasmine: {
            exports: "jasmine"
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        }
    }
});


require(["jasmine-html", "test"], function (jasmine, test) {
    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 250;

    var htmlReporter = new jasmine.HtmlReporter();
    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function(spec) {
        return htmlReporter.specFilter(spec);
    };
    jasmineEnv.addReporter(htmlReporter);
    test();
    jasmineEnv.execute();

});



