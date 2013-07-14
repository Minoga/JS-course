var manager = new Manager;
manager.addList(document.getElementById('first_ul'));
manager.addList(document.getElementById('second_ul'));
manager.addList(document.getElementById('third_ul'));
var test = new List(document.getElementById('first_ul'));
var test1 = new ListLigthing(document.getElementById('second_ul'));
var test2= new ListAdder(document.getElementById('third_ul'), manager);

