//// Variables
// let age: number;
// let firstName: string;
// let lastName: string;
// let person: Object;
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// age = 34;
// firstName = "Andreas";
// lastName = "Lefkopoulos";
// person = { name: "Andreas" };
//// array med spcifik typ av värden
// let numberList: Array<number> = [1, 2, 3];
// array med specifika typr av värden
var personInfo;
//personInfo = ["Andreas", 34]; //fungerar inte.. fel ordning
personInfo = [34, "Niklas"];
// loopar
var list = [4, 5, 6];
for (var i in list) {
    console.log("Values from for (let i in list): " + i); // Ger index. alltså 0,1,2
}
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var i = list_1[_i];
    console.log("Values from for (let i of list): " + i); // Ger value. Alltså 4,5,6
}
// metoder
function myFunc() {
    var x = 5;
    //Får inte returnera någon eftersom returen är av typen void
}
function myFunc2() {
    var x = "5";
    return x;
}
var result = myFunc2();
function myFunc3(age, name) {
    var x = 10 + age;
    return x;
}
var resultFromMyFunc3 = myFunc3(34, "Niklas");
//Klasser
var Pet = (function () {
    // konstruktor
    function Pet(petName) {
        this.name = petName;
    }
    Pet.prototype.setNewAge = function (newAge) {
        age = newAge;
        this.verifyNewAge(newAge);
    };
    Pet.prototype.verifyNewAge = function (ageToVerify) { return ageToVerify; };
    Pet.prototype.getAge = function () {
        return age;
    };
    return Pet;
}());
var pet1 = new Pet("Rocky");
pet1.name = "Balboa";
pet1.setNewAge(3);
var pet1Age = pet1.getAge();
console.log("pet1Age is: " + pet1Age);
// Klasser med Arv
// Base-class
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "meters");
    };
    return Animal;
}());
// derived class
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        _super.call(this, name);
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering....");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var mySnake = new Snake("Sovass");
mySnake.name = "Kaah"; // Har tillgång till variable name eftersom den finns i Base-klassen
mySnake.move();
// modules
var Animals;
(function (Animals) {
    var Animal = (function () {
        function Animal(theName) {
            this.Name = theName;
        }
        return Animal;
    }());
    Animals.Animal = Animal;
})(Animals || (Animals = {}));
// let newPet: MainApp.Snake = new MainApp.Snake("name");
var myAnimalFromModule = new Animals.Animal("Lassie");
//# sourceMappingURL=App.js.map