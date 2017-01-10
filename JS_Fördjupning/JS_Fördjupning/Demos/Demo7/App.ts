//// Variables
// let age: number;
// let firstName: string;
// let lastName: string;
// let person: Object;

// age = 34;
// firstName = "Andreas";
// lastName = "Lefkopoulos";
// person = { name: "Andreas" };

//// array med spcifik typ av värden
// let numberList: Array<number> = [1, 2, 3];

// array med specifika typr av värden
let personInfo:[number, string];
//personInfo = ["Andreas", 34]; //fungerar inte.. fel ordning
personInfo = [34, "Niklas"];

// loopar
let list = [4, 5, 6];

for (let i in list) {
    console.log("Values from for (let i in list): " + i); // Ger index. alltså 0,1,2
}

for (let i of list) {
    console.log("Values from for (let i of list): " + i); // Ger value. Alltså 4,5,6
}

// metoder

function myFunc():void { //returen är av typen void
    let x = 5;
     //Får inte returnera någon eftersom returen är av typen void
}

function myFunc2(): string { //returen är av typen sträng
    let x = "5";

    return x;
}

let result = myFunc2();

function myFunc3(age:number, name:string): number { //inparaeter av typ number och string retur av typ number
    var x = 10 + age;

    return x;
}

let resultFromMyFunc3 = myFunc3(34, "Niklas");

//Klasser
class Pet {
    public name: string; // publik. Accessbar utifrån klasse
    private age: number; // Privat endast Accessbar inifrån klassen

    // konstruktor
    public constructor(petName: string) {
        this.name = petName;
    }

    public setNewAge(newAge: number): void {
        age = newAge;
        this.verifyNewAge(newAge);
    }

    private verifyNewAge(ageToVerify: number): number { return ageToVerify }

    public getAge(): number {
        return age;
    }
}

let pet1: Pet = new Pet("Rocky");
pet1.name = "Balboa";
pet1.setNewAge(3);
let pet1Age: number = pet1.getAge();


console.log("pet1Age is: " + pet1Age);

// Klasser med Arv
  // Base-class
class Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(distanceInMeters: number) {
        console.log(this.name + " moved " + distanceInMeters + "meters");
    }
}
   // derived class
class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log("Slithering....");
        super.move(distanceInMeters);
    }
}
let mySnake: Snake = new Snake("Sovass");
mySnake.name = "Kaah"; // Har tillgång till variable name eftersom den finns i Base-klassen
mySnake.move();


// modules
module Animals {
    export class Animal {
        public Name: string;
        private age: number;

        public constructor(theName: string) {
            this.Name = theName;
        }
    }
}

// let newPet: MainApp.Snake = new MainApp.Snake("name");

let myAnimalFromModule: Animals.Animal = new Animals.Animal("Lassie");












