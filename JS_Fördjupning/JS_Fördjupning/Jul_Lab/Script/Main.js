
var myApp = angular.module("myApp", []);
var movieButton = $('#movieButton');
movieButton.hide();

var controllers = {};
var factories = {};
//var passwordInput = $('#');
//var userNameInput = $('#');


var remember = localStorage.getItem("rememberMe");
var you = { userName: localStorage.getItem("userName"), password: localStorage.getItem("password") }



myApp.factory("myAppFactory", function () {
    var factory = {};

    var Movies = [{ title: "Die Hard", year: 1988 },
              { title: "Die Hard 2", year: 1990 },
              { title: "Matrix", year: 1999 },
              { title: "Independence Day", year: 1996 },
              { title: "The Godfather", year: 1972 },
              { title: "The Dark Knight", year: 2008 },
              { title: "Schindler's List", year: 1993 },
              { title: "Pulp Fiction", year: 1994 },
              { title: "The Lord of the Rings: The Return of the King", year: 2003 },
              { title: "The Good, the Bad and the Ugly", year: 1967 },
              { title: "Fight Club", year: 1999 },
              { title: "Forrest Gump", year: 1994 }, ];
    var Users = [{ name: "Hampus Lundgren", userName: "Hampe", password: "1234" },
                 { name: "Olle Svensson", userName: "OlleIsKing", password: "Olle12" },
                 { name: "Frida Ohlsson", userName: "CutePie", password: "CutePie55" },
                 { name: "Kalle Ragnarsson", userName: "MrCool", password: "MammaMamma41" },
                 { name: "Ronja Rövardotter", userName: "OldSchoolRonja", password: "SkallePär" }, ];

    factory.getMovies = function () {
        return Movies;
    }
    factory.getUsers = function () {
        return Users;
    }
    factory.getCurrentUser = function () {
        return localStorage.getItem("currentUser");
    }

    factory.logginSucceeded = function () {
        alert("succefully logged in!")
        movieButton.fadeIn();
    }
    factory.logginFailed = function () {
        alert("The combination of user and password did not match. Please try again!")
        movieButton.hide();
    }
    factory.getLocalUserName = function () {
        if (localStorage.getItem("rememberMe") === "true") {
            return localStorage.getItem("userName");
        }
        else return "";
    }
    factory.getLocalPassword = function () {
        if (localStorage.getItem("rememberMe") === "true") {
            return localStorage.getItem("password");
        }
        else return "";
    }


    return factory;
});




controllers.myAppController = function ($scope, myAppFactory) {

    $scope.movies = myAppFactory.getMovies();
    $scope.Users = myAppFactory.getUsers();
    $scope.currentUser = myAppFactory.getCurrentUser();

    $scope.usernameInput = myAppFactory.getLocalUserName();
    $scope.passwordInput = myAppFactory.getLocalPassword();

    $scope.checkLogin = function () {
        CheckLoginData({ userName: $scope.usernameInput, password: $scope.passwordInput, rememberMe: $scope.rememberMeCheckbox }, myAppFactory.getUsers()).then(
            function () { myAppFactory.logginSucceeded($scope.usernameInput) }, function () { myAppFactory.logginFailed() })
    }
}



function CheckLoginData(inputData, UserDb) {
    var dfd = $.Deferred();

    var userNamePassword_Right = false;
    for (var i = 0; i < UserDb.length; i++) {
        if (inputData.userName === UserDb[i].userName && inputData.password === UserDb[i].password) {
            userNamePassword_Right = true;
            break;
        }
    }
    if (userNamePassword_Right) {
        localStorage.setItem("currentUser", inputData.userName);
        if (inputData.rememberMe) {
            localStorage.setItem("userName", inputData.userName);
            localStorage.setItem("rememberMe", true);
            localStorage.setItem("password", inputData.password);
        }
        dfd.resolve();
    } else {
        dfd.reject();
    }
    return dfd.promise();
}




myApp.controller(controllers);