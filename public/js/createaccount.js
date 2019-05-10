$(document).ready(function () {
    var nameInput = $(".formInfo2")
    $(document).on("click", emailSubmit);

    
        function emailSubmit (event) {
            event.preventDefault();
            if (!nameInput.val().trim().trim()) {
                return;
            }

            addEmail({
                name: nameInput
                  .val()
                  .trim()
              });

            function addEmail(email){
                $.post("/api/user", email);
            }
        }
    
})