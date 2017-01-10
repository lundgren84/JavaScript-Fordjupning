
$(document).ready(function(){

    doWork(2).then(function(){
        alert("Awesome.. inside success method");
    }, function(){
        alert("Totally unawesome ... Inside Fail method");
    }).always(function(){
        alert("Work is done now wheter good or bad");
    });

});

function doWork(num){
    var dfd = $.Deferred();

    if(num === 1){
        alert("Awesome... will resolve the promise");
        dfd.resolve();
    } else {
        alert("Totally unawesome ... will reject the promise");
        dfd.reject();
    }

    return dfd.promise();
}