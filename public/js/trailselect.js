$(document).ready(function () {
   
   
    printcards();

    function printcards() {
        console.log("fuck")
        $.get("/api/trails/", function (trailInfo) {
            console.log(trailInfo.trail)
            trailInfo.forEach(function (data) {
                console.log(data.trail)
                //    create a new div
                card = $("<div>").addClass("col-lg-3").attr("id", "completed-trails");
                // and append the trail name onto it
                var trailName = $("<h5>").addClass("card-body").text("Trail Name: " + data.trail)
                card.append(trailName);
                // and then append the path type
                var theRoad = $("<p>").addClass("card-text").text("Road: " + data.road);
                card.append(theRoad);
                // and then append the elevation
                var theElevation = $("<p>").addClass("card-text").text("Elevation: " + data.elevation);
                card.append(theElevation);
                //adding the button
                var button = $("<a>").addClass("btn btn-dark").attr("href", "/api/trails/save").attr("role", "button");
                card.append(button);
                // and then add the new card div onto the html element I'm targeting
                var cardArea = $("#trail-row");
                cardArea.append(card);
            });
        });
    }
});