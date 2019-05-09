// Get references to page elements
var $gearInput = $("#gear-name");
// var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $gearDisplay = $("#gear-display");

$(document).on("click", ".gear-add", handleGearAdd);
$(document).on("click", ".remove-gear", handleGearRemove);
// The API object contains methods for each kind of request we'll make
var API = {
  handleGearAdd: function(gear) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/gear",
      data: JSON.stringify(gear)
    });
  },
  displayGear: function() {
    return $.ajax({
      url: "api/gear",
      type: "GET"
    });
  },
  handleGearRemove: function(id) {
    return $.ajax({
      url: "api/gear/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshGearList = function() {
  API.displayGear().then(function(data) {
    var $gearList = data.map(function(gearItem) {
      var $a = $("<a>")
        .text(gearItem.text)
        .attr("href", "/example/" + gearItem.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": gearItem.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $gearDisplay.empty();
    $gearDisplay.append($gearList);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var newGearItem = {
    text: $gearInput.val().trim()
  };

  if (!newGearItem) {
    alert("You must enter a name for your gear!");
    return;
  }

  API.handleGearAdd(gear).then(function() {
    refreshGearList();
  });

  $gearInput.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.handleGearRemove(idToDelete).then(function() {
    refreshGearList();
  });
};

// Add event listeners to the submit and delete buttons

$gearDisplay.on("click", ".delete", handleDeleteBtnClick);

// function showNav() {
//   document.getElementById("exploretext").innerHTML = "You got it!";
// }

$exampleList.on("click", ".delete", handleDeleteBtnClick);

