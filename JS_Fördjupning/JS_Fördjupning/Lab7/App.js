
$(document).ready(function () {
    //Divs
    var gameDiv = document.getElementById('gameDiv');
    var bookDiv = document.getElementById('bookDiv');
    var dvdDiv = document.getElementById('dvdDiv');
    var allDiv = document.getElementById('allDiv');
    var formDiv = document.getElementById('formDiv');
})


function showBooks() {
    hideAll();
    bookDiv.className = '';
}
function showDvds() {
    hideAll();
    dvdDiv.className = '';
}
function showGames() {
    hideAll();
    gameDiv.className = '';
}
function showAll() {
    hideAll();
    allDiv.className = '';
}
function showForm() {
    hideAll();
    formDiv.className = '';
}
function hideAll() {
    gameDiv.className = 'hiddenDiv';
    bookDiv.className = 'hiddenDiv';
    dvdDiv.className = 'hiddenDiv';
    allDiv.className = 'hiddenDiv';
    formDiv.className = 'hiddenDiv';
}




var myApp = angular.module("myApp", ["ngRoute"]);
myApp.config(function ($routeProvider) {
    $routeProvider
    .when('/one', {
        controller: "OneController",
        templateUrl: "PartialViews/one.html "
    })
    .when('/two', {
        controller: "TwoController",
        templateUrl: "PartialViews/two.html"
    })
     .otherwise({
         template: "<h2>Press a Link to see Labs</h2>",

     });;
});

myApp.factory("OneFactory", function () {


    var factory = {};
    factory.EuroToSek = function (Euro) {
        let result = EuroToSek(Euro);
        return result;
    }

    factory.SekToEuro = function (Sek) {
        let result = SekToEuro(Sek);
        return result;
    }

    return factory;

});
myApp.factory("TwoFactory", function () {
    var factory = {};
 
    factory.getFullDb = function () {
        let fullDb = GetDataBase();
        return fullDb;
    }
    factory.getBooks = function () {
        let books = GetBooks();
        return books;
    }
    factory.getDvds = function () {
        let dvds = GetDvds();
        return dvds;
    }
    factory.getGames = function () {
        let games = GetGames();
        return games;
    }
    factory.addNewBookToDb = function (newBook) {
        if (newBook.pocket !== "true") {
            newBook.pocket = false;
        }
        AddNewBook(newBook);
    }
    return factory;
});



var controllers = {};
controllers.OneController = function ($scope, OneFactory) {
    $scope.updateSek = function () {
        let euro = $scope.EuroInput;
        if (typeof euro !== "number") { euro = 0; }
        $scope.SekInput = OneFactory.EuroToSek(euro);
    }
    $scope.updateEuro = function () {
        let sek = $scope.SekInput;
        if (typeof sek !== "number") { sek = 0; }
        $scope.EuroInput = OneFactory.SekToEuro(sek);
    }
}

var orderDescending = false;
var orderHolder = '';
controllers.TwoController = function ($scope, TwoFactory) {

    $scope.products = TwoFactory.getFullDb();
    $scope.books = TwoFactory.getBooks();
    $scope.dvds = TwoFactory.getDvds();
    $scope.games = TwoFactory.getGames();
    $scope.AddNewBook = function () {
        TwoFactory.addNewBookToDb({
            name: $scope.newBookName,
            price: $scope.newBookPrice,
            category: $scope.newBookCathegory,
            articleNumber: $scope.newBookArticleNumber,
            writer: $scope.newBookWriter,
            pocket: $scope.newBookPocket
        })
    }

    //Spepreate to own function
    $scope.sortBy = function (orderByMe) {
        var flag = false;
        if (orderHolder === orderByMe) {
            flag = true;
        }
        orderHolder = orderByMe;
        if (flag) {
            if (orderDescending) {
                orderByMe = '-' + orderByMe;
                orderDescending = false;
            }
            else {
                orderDescending = true;
            }
        }    
        $scope.orderFilter = orderByMe;
    }

}
myApp.controller(controllers);

