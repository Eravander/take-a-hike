$(".submit").on("click", function (event) {
    event.preventDefault();
    //Get email and uniqueId from page elements
    var email = $(".formInfo").val().trim();
    var id;
    //Save email and uniqueId to login table, then save uniqueId to user table
    getEmail();

    function getEmail() {
        if (email.trim() === " ") {
            $.get(`/api/${email}`, function (userInfo) {
                if (userInfo.userId != "undefined") {
                    id = userInfo.userId;
                    window.location.href = `/user/${id}`
                } else {
                    window.location.href = "/login"
                }
            });
        }

    };

});
