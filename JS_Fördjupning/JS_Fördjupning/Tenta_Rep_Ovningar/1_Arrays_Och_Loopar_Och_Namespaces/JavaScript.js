$(document).ready(function () {
    // Divs
    var listPersonDiv = $('#listPersonDiv');
    var searchPersonDiv = $('#searchPersonDiv');
    var personFormDiv = $('#personFormDiv');
    listPersonDiv.hide(); searchPersonDiv.hide(); personFormDiv.hide();
    // Buttons
    var btn_list = $('#btn_list');
    var btn_sreach = $('#btn_sreach');
    var btn_add = $('#btn_add');

    // Person array
    var personArray = [
        { fName: "Hampus", lName: "Lundgren", age: 32, city: "Helsingborg", fullName: function () { return this.fName + ' ' + this.lName; } },
        { fName: "Olle", lName: "Svensson", age: 12, city: "Oslo", fullName: function () { return this.fName + ' ' + this.lName; } },
        { fName: "Tage", lName: "Carlstein", age: 97, city: "Vänersborg", fullName: function () { return this.fName + ' ' + this.lName; } },
        { fName: "Anja", lName: "Persson", age: 35, city: "Umeå", fullName: function () { return this.fName + ' ' + this.lName; } }];

    // Clicks
    btn_list.click(function () {     
        personFormDiv.hide();
        listPersonDiv.html(listAllPersons);
        listPersonDiv.toggle(200);
    });
    btn_sreach.click(function () {
        searchPersonDiv.toggle(200);
    });
    btn_add.click(function () {
        listPersonDiv.hide();
        personFormDiv.toggle(200);
    });
    // functions
    function listAllPersons() {
        let htmlContent = "<h2>List Persons</h2>";
        for (var i = 0; i < personArray.length; i++) {
            let index = i + 1;
            htmlContent += index + " - Name: " + personArray[i].fullName() + " - Age: " + personArray[i].age + " - City: " + personArray[i].city + "</br>";
        }
        return htmlContent;
    }

});