var superMan = new Man(10);
var loh = new Man(1);
var girls = [new Girl(1, "Saratov"), new Girl(5, "Sochi"), new Girl(10, "Moscow")];
console.assert(loh.pickUp(girls).length == 1, "Not right number");
console.assert(superMan.pickUp(girls).length == 3, "Not right number");
console.assert(girls[0].girlName == "Saratov", "Not right girl object");






