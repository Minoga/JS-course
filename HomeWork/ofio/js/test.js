define(["Ofio"], function (Ofio) {
    var test = function() {
        var Class = Ofio.extend({

            /**
             * @constructor
             * @protected
             */
            _init: function (val) {
                this.val = val;
            },

            /**
             * @public
             */
            method: function () {
                return 'Class method';
            }
        });

        var parentClass = new Class(10);

        describe("Initialization class tests", function() {
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
                        this._super();
                    },

                    method: function () {
                        return 'ChildClass method';
                    }
                });
                expect(bar).not.toThrow();
            });
        });

        describe("Inherit tests", function() {
            var ChildClass = Class.extend({
                /**
                 * @constructor
                 * @protected
                 */
                _init: function (val) {
                    this._super();
                },

                method: function () {
                    return 5;
                }
            });
            var childClass = new ChildClass;
            it("parentClass instanceof Class", function() {
                expect(parentClass instanceof Class).toBeTruthy();
            });
            it("childClass instanceof Class", function() {
                expect(childClass instanceof Class).toBeTruthy();
            });
            it("childClass instanceof ChildClass", function() {
                expect(childClass instanceof ChildClass).toBeTruthy();
            });
            it("childClass.constructor ChildClass", function() {
                expect(childClass.constructor).toBe(ChildClass);
            });
            it("parentClass.constructor Class", function() {
                expect(parentClass.constructor).toBe(Class);
            });
        });
        describe("Test methods", function() {
            var ChildClass = Class.extend({
                /**
                 * @constructor
                 * @protected
                 */
                _init: function (val, privateVal) {
                    this._super(val);
                    this.privateVal = privateVal;
                },

                method: function () {
                    return 'ChildClass method';
                }
            });
            var childClass = new ChildClass(15, 20);
            it("parentClass.method must to be 'Class method'", function() {
                expect(parentClass.method()).toBe('Class method');
            });
            it("childClass.method to be 'ChildClass method'", function() {
                expect(childClass.method()).toBe('ChildClass method');
            });
            it("parentClass.val to be 10", function() {
                expect(parentClass.val).toBe(10);
            });
            it("childClass.val to be 15", function() {
                expect(childClass.val).toBe(15);
            });
            it("childClass.privateVal to be 20", function() {
                expect(childClass.privateVal).toBe(20);
            });
        });
    };
    return test;
});
