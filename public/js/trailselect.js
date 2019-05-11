$(document).ready(function(){
    printcards();

    function printcards(){
        $.get("/api/trails/", function (userInfo) {
            userInfo.forEach(function(card){
                
            })
        });
    };
});