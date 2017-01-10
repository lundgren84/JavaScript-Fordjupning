//alert("inside my js file");
var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: "PeopleController",
            templateUrl: "home.html"
        })
        .when('/PeopleListing', {
            controller: "PeopleController",
            templateUrl: "PeopleListing.html"
        })
        .when('/Tomato', {
            template: "<h2>These are my tomatoes</h2>"
        })
        .otherwise({
            redirectTo: '/'
        })
        
});

mainApp.controller("PeopleController", function ($scope) {
    $scope.people = [{ name: "Andreas", city: "Helsingborg" },
                     { name: "Sara", city: "Stockholm" }
    ];
})