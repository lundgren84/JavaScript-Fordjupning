var persons = ["Hampus", "Anna", "Sara"]

var person = { Name: "Hampus", Age: 32, Country: "Sweden", getFullInfo: function () { return this.Name + " " + this.Age + " " + this.Country + " " + this.City } }

person.City = "Helsingborg"
x
function FillForm() {
    document.getElementById('NameInput').value = person.Name
    document.getElementById('CountryInput').value = person.Country
}


console.log("Array of objects")
// Array of objects

var Persons = [
   { Name: "Hampus", Age: 32, Country: "Sweden",City: "Helsingborg", getFullInfo: function () { return this.Name + " " + this.Age + " " + this.Country + " " + this.City }} ,
   { Name: "Olle", Age: 12, Country: "Danmark",City: "Helsingör", getFullInfo: function () { return this.Name + " " + this.Age + " " + this.Country + " " + this.City }} ,
   { Name: "Pelle", Age: 66, Country: "Norge",City: "Oslo", getFullInfo: function () { return this.Name + " " + this.Age + " " + this.Country + " " + this.City }}
]

for (var i = 0; i < Persons.length; i++) {
    console.log("Full info: " + Persons[i].getFullInfo())
}

