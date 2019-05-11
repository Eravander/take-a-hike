function showTrails(id) {
  $.ajax({
    method: "GET",
    url: "/api/trails/" + id
  }).then(function(response) {
    console.log(response);
  });
}
