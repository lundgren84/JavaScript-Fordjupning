var App = angular.module("App", []);

//Angular Factory
App.factory("personsFactory", function(){
    var persons = [{name: 'Andreas', city:'Malmo'},
                      {name: 'Niklas', city:'Stockholm'},
                      {name: 'Sara', city:'Helsingborg'},
                      {name: 'Beatrice', city:'Malmo'}];
    
    var factory = {};
    factory.getPersons = function(){
        return persons;
    }

    factory.AddPersonToArray = function(person){
        persons.push(person);
    }

    return factory;

});

// On way to create a controller

// App.controller("personsController", function($scope){
//     $scope.persons = [{name: 'Andreas', city:'Malmo'},
//                       {name: 'Niklas', city:'Stockholm'},
//                       {name: 'Sara', city:'Helsingborg'},
//                       {name: 'Beatrice', city:'Malmo'}];
// })

//Another way to create multiple controllers
var controllers = {};

// controllers.personsController = function($scope){
//     $scope.persons = [{name: 'Andreas', city:'Malmo'},
//                       {name: 'Niklas', city:'Stockholm'},
//                       {name: 'Sara', city:'Helsingborg'},
//                       {name: 'Beatrice', city:'Malmo'}];
// }

// Get the data from an Angular Factory
controllers.personsController = function($scope, personsFactory){
    $scope.persons = personsFactory.getPersons();

    $scope.AddPerson = function(){
        personsFactory.AddPersonToArray({name: $scope.newPersonName, city:$scope.newPersonCity })
    }
}

App.controller(controllers);