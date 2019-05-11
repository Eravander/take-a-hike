$(document).ready(function () {
    var url = window.location.pathname;
    var welcome = $("#heading");
    var id;
    console.log(url)
    getName();

    function getName() {
        id = url.split("/")[2];
        console.log(id)
        $.get(`/api/user/${id}`, function (userInfo) {
            console.log(userInfo)
            if (userInfo.name === "undefined") {
                welcome.append(`Welcome, ${userInfo.name}`)
            }
            else {
                welcome.append(`Welcome, ${userInfo.email}`)
            }

        });

    };

    
});