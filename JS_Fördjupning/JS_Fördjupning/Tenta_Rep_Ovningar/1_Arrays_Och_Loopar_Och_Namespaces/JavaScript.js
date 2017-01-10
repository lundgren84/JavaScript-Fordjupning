$(document).ready(function () {
    // --Divs--
    var listPersonDiv = $('#listPersonDiv');
    var searchPersonDiv = $('#searchPersonDiv');
    var personFormDiv = $('#personFormDiv');
    listPersonDiv.hide(); searchPersonDiv.hide(); personFormDiv.hide();

    var searchResultDiv = $('#searchResultDiv');
    // --Buttons--
    var btn_listDiv = $('#btn_listDiv');
    var btn_sreachDiv = $('#btn_sreachDiv');
    var btn_addDiv = $('#btn_addDiv');

    var btn_searchPerson = $('#btn_searchPerson');
    var btn_GetLastSearch = $('#btn_GetLastSearch');
    // --Inputs--
    var txt_searchText = $('#txt_searchText');
    // --Person array--
    var personArray = [
        { fName: "Hampus", lName: "Lundgren", age: 32, city: "Helsingborg", fullName: function () { return this.fName + ' ' + this.lName; } },
        { fName: "Olle", lName: "Svensson", age: 12, city: "Oslo", fullName: function () { return this.fName + ' ' + this.lName; } },
        { fName: "Tage", lName: "Carlstein", age: 97, city: "Vänersborg", fullName: function () { return this.fName + ' ' + this.lName; } },
        { fName: "Anja", lName: "Persson", age: 35, city: "Umeå", fullName: function () { return this.fName + ' ' + this.lName; } }];

    // Clicks
    btn_listDiv.click(function () {
        personFormDiv.hide();
        listPersonDiv.html(listAllPersons);
        listPersonDiv.toggle(200);
    });
    btn_sreachDiv.click(function () {
        searchPersonDiv.toggle(200);
    });
    btn_addDiv.click(function () {
        listPersonDiv.hide();
        personFormDiv.toggle(200);
    });
    btn_searchPerson.click(function () {
        searchResultDiv.html(listSearchResult);
        searchResultDiv.hide();
        searchResultDiv.toggle();

    });
    btn_GetLastSearch.click(function () {
        txt_searchText.val(localStorage.lastSearch);
        searchResultDiv.html(listSearchResult);
        searchResultDiv.hide();
        searchResultDiv.toggle();
    });
    // functions
    function listSearchResult() {
        let htmlContent = "";
        let searchInput = txt_searchText.val();
        localStorage.lastSearch = searchInput;
        for (var i = 0; i < personArray.length; i++) {
            if (searchInput.toLowerCase() === personArray[i].fName.toLowerCase() || searchInput.toLowerCase() === personArray[i].lName.toLowerCase()) {
                let index = i + 1;           
                    htmlContent += index + " - Name: " + personArray[i].fullName() + " - Age: " + personArray[i].age + " - City: " + personArray[i].city + "</br>";         
            }
        }

        return htmlContent;
    }

    function listAllPersons() {
        let htmlContent = "<h2>List Persons</h2>";
        for (var i = 0; i < personArray.length; i++) {
            let index = i + 1;
            htmlContent += index + " - Name: " + personArray[i].fullName() + " - Age: " + personArray[i].age + " - City: " + personArray[i].city + "</br>";
        }
        return htmlContent;
    }

});