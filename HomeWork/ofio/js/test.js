define(["Ofio"], function (Ofio) {
    var test = function() {
        var Class = Ofio.extend({

            /**
             * @constructor
             * @protected
             */
            _init: function () {
                console.log('init');
            },

            /**
             * @public
             */
            method: function () {
                return 'method';
            }
        });

        var parentClass = new Class;


        describe("initial class", function() {
            it("ChildClass is not exist", function() {
                var bar = function(){
                    return new ChildClass;
                }
                expect(bar).toThrow();
            });
            it("ChildClass must exist", function() {
                var bar = function(){
                    return new ChildClass;
                }
                var ChildClass = Class.extend({
                    /**
                     * @constructor
                     * @protected
                     */
                    _init: function () {
                        this._super()
                    },

                    method: function () {
                        return 5;
                    }
                });
                expect(bar).not.toThrow();
            });
        });

        describe("Inherit test", function() {
            var ChildClass = Class.extend({
                /**
                 * @constructor
                 * @protected
                 */
                _init: function () {
                    this._super();
                },

                method: function () {
                    return 5;
                }
            });
            var childClass = new ChildClass;
            it("parentClass instanceof Class must be true", function() {
                expect(parentClass instanceof Class).toBeTruthy();
            });
            it("childClass instanceof Class must be true", function() {
                expect(childClass instanceof Class).toBeTruthy();
            });
            it("childClass instanceof ChildClass must be true", function() {
                expect(childClass instanceof ChildClass).toBeTruthy();
            });
            describe("Test method", function() {
                it("parentClass.method must be 'method'", function() {
                    expect(parentClass.method()).toBe('method');
                });
                it("childClass.method must be 5", function() {
                    expect(childClass.method()).toBe(5);
                });
            });
        });
    };





    return test;
});
