function MyView(el) {
    View.call(this, el);
}
inherit(View, MyView);
MyView.prototype.events = {
    'click': 'doSmth',
    'click .a': 'doA',
    'click .b': 'doB'
};

MyView.prototype.doSmth = function(){
    console.log('doSmth');
};

MyView.prototype.doA = function(){
    console.log('doA');
};

MyView.prototype.doB = function(){
    console.log('doB');
};