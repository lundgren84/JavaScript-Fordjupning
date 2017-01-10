var persons = [{Name: "Andreas", Age: 34, City:"Malmo"},
               {Name: "Anna", Age: 34, City:"Helsingborg"},
               {Name:"Samuel", Age: 55, City:"Malmo"}];

var persons2 = [{Name: "Ali", Age: 34, City:"Malmo"},
               {Name: "Rickard", Age: 34, City:"Helsingborg"},
               {Name:"Sussane", Age: 55, City:"Malmo"}];


function populateWithData(){
    var names = "";
    $.each(persons, function(key, value){
        names += value.Name + "<br />";
    })

    $("#DivOutput").html(names);  
};

function populateList(){
 $.each(persons, function(key, value){
          $("#unsortedList1").append("<li>" + value.Name + "</li>")
      })
};

function populateList2(){
 $.each(persons2, function(key, value){
          $("#unsortedList2").append("<li>" + value.Name + "</li>")
      })
};



$(document).ready(function(){
      //populateWithData();
      populateList();
      populateList2();

      //$("#unsortedList2").hide();

      $("ul li:nth-child(2)").append("<span> - The Scrum Master!</span>");

     

});

function fadeOut(){
$("#unsortedList2").fadeOut(500);
}

function fadeIn(){
$("#dummyList2").hide();   
$("#unsortedList2").fadeIn(2000).addClass("RedText");
//$("#unsortedList2").addClass("RedText");
}

function showTextInDiv(){

    var names = "";
    $.each(persons, function(key, value){
        names += value.Name + "<br />";
    })

    $("#DivOutput").html(names);
}