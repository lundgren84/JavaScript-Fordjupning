var myNS = myNS || {};

$(document).ready(function () {
    // --Divs--
    myNS.listPersonDiv = $('#listPersonDiv');
    myNS.searchPersonDiv = $('#searchPersonDiv');
    myNS.personFormDiv = $('#personFormDiv');
    myNS.listPersonDiv.hide(); myNS.searchPersonDiv.hide(); myNS.personFormDiv.hide();

    myNS.searchResultDiv = $('#searchResultDiv');
    // --Buttons--
    myNS.btn_listDiv = $('#btn_listDiv');
    myNS.btn_sreachDiv = $('#btn_sreachDiv');
    myNS.btn_addDiv = $('#btn_addDiv');

    myNS.btn_searchPerson = $('#btn_searchPerson');
    myNS.btn_GetLastSearch = $('#btn_GetLastSearch');
    myNS.btn_newAccountToArray = $('#btn_newAccountToArray');
    // --Inputs--
    myNS.txt_searchText = $('#txt_searchText');
    // --Person array--
    myNS.personArray = [
        { fName: "Hampus", lName: "Lundgren", age: 32, city: "Helsingborg", fullName: function () { return this.fName + ' ' + this.lName; } },
        { fName: "Olle", lName: "Svensson", age: 12, city: "Oslo", fullName: function () { return this.fName + ' ' + this.lName; } },
        { fName: "Tage", lName: "Carlstein", age: 97, city: "Vänersborg", fullName: function () { return this.fName + ' ' + this.lName; } },
        { fName: "Anja", lName: "Persson", age: 35, city: "Umeå", fullName: function () { return this.fName + ' ' + this.lName; } }];

    // Clicks
    myNS.btn_listDiv.click(function () {
        //myNS.personFormDiv.hide();
        myNS.listPersonDiv.html(listAllPersons);
        myNS.listPersonDiv.toggle(200);
    });
    myNS.btn_sreachDiv.click(function () {
        myNS.searchPersonDiv.toggle(200);
    });
    myNS.btn_addDiv.click(function () {
        //myNS.listPersonDiv.hide();
        myNS.personFormDiv.toggle(200);
    });
    myNS.btn_searchPerson.click(function () {
        personSearch();

    });
    myNS.btn_GetLastSearch.click(function () {
        myNS.txt_searchText.val(localStorage.lastSearch);
        personSearch();
    });
    myNS.btn_newAccountToArray.click(function () {
        let theNewPerson = newPerson($('#newPfName').val(), $('#newPlName').val(), $('#newPAge').val(), $('#newPCity').val());
        myNS.personArray.push(theNewPerson);
        $('#newPfName').val(''); $('#newPlName').val(''); $('#newPAge').val(''); $('#newPCity').val('');
        myNS.listPersonDiv.html(listAllPersons);
    });
    // functions
    function personSearch() {
        //FIX PUT The stuff in the "then" methods, to get acces to fail search method!!
        checkSearch(listSearchResult, myNS.personArray).then(function () { }, function () { }).always(function () { });

        myNS.searchResultDiv.html(listSearchResult);
        myNS.searchResultDiv.hide();
        myNS.searchResultDiv.toggle('slow');
    }
    function newPerson(fname, lname, age, city) {
        let person = { fName: fname, lName: lname, age: age, city: city, fullName: function () { return this.fName + ' ' + this.lName; } };
        return person;
    }
    function listSearchResult() {
        let htmlContent = "";
        let searchInput = myNS.txt_searchText.val();
        localStorage.lastSearch = searchInput;    
        for (var i = 0; i < myNS.personArray.length; i++) {
            if (searchInput.toLowerCase() === myNS.personArray[i].fName.toLowerCase() || searchInput.toLowerCase() === myNS.personArray[i].lName.toLowerCase()) {
                let index = i + 1;           
                htmlContent += index + " - Name: " + myNS.personArray[i].fullName() + " - Age: " + myNS.personArray[i].age + " - City: " + myNS.personArray[i].city + "</br>";
            }
        }
        return htmlContent;
    }

    function listAllPersons() {
        let htmlContent = "<h2>List Persons</h2>";    
        for (var i = 0; i < myNS.personArray.length; i++) {
            let index = i + 1;
            htmlContent += index + " - Name: " + myNS.personArray[i].fullName() + " - Age: " + myNS.personArray[i].age + " - City: " + myNS.personArray[i].city + "</br>";
        }
        return htmlContent;
    }
    //Promises
    function checkSearch(input,array) {
        dfd = $.Deferred();

        let foundPerson = false;
        for (var i = 0; i < array.length; i++) {
            if (searchInput.toLowerCase() === array[i].fName.toLowerCase() || searchInput.toLowerCase() === array[i].lName.toLowerCase()) {
                foundPerson = true;
                break;
            }
        }
        if (foundPerson) {
            dfd.resolve();          
        }
        else {
            dfd.reject();
        }
        return dfd.promise();
    }

});