var manager = new Manager;
var test = new List(document.getElementById('first_ul'));
var test1 = new ListLigthing(document.getElementById('second_ul'));
var test2 = new ListAdder(document.getElementById('third_ul'), manager);
manager.pushList(test);
manager.pushList(test1);
manager.pushList(test2);

