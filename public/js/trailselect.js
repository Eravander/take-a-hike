$(document).ready(function() {
  printcards();

  function printcards() {
    console.log("fuck");
    $.get("/api/trails/", function(trailInfo) {
      console.log(trailInfo);
      trailInfo.forEach(function(data) {
        console.log(data.trail);
        //    create a new div
        card = $("<div>")
          .addClass("col-lg-3")
          .attr("id", "completed-trails");
        // and append the trail name onto it
        var trailName = $("<h5>")
          .addClass("card-body")
          .text("Trail Name: " + data.trail);
        card.append(trailName);
        // and then append the path type
        var theRoad = $("<p>")
          .addClass("card-text")
          .text("Road: " + data.road);
        card.append(theRoad);
        // and then append the elevation
        var theElevation = $("<p>")
          .addClass("card-text")
          .text("Elevation: " + data.elevation);
        card.append(theElevation);
        //adding the button
        var button = $("<button>Save</button>")
          .addClass("btn btn-dark")
          .attr("href", "/api/trails/save")
          .attr("value", data.trailId)
          .attr("id", "clickMe")
          console.log(button)
        card.append(button);
        // and then add the new card div onto the html element I'm targeting
        var cardArea = $("#trail-row");
        cardArea.append(card);
      });
    });
  }

  $("#clickMe").on("click", function(event) {
      console.log("fuck")
    event.preventDefault();
    var url = window.location.pathname;
    var trail = $(this).val();
    console.log(trail)
    var user = url.split("/")[2];
    console.log(user)
    addTrail({
      HikeTrailId: trail,
      UserUserId: user
    });
    function addTrail(data) {
      $.post(`/api/user/${user}/savetrail`, data);
      window.location.href = "/user/1/mytrails";
    }
  });
});
