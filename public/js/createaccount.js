$(document).ready(function () {
    var emailInput = $(".formInfo2");
    $(".submit").on("click", emailSubmit);

    
        function emailSubmit (event) {
            event.preventDefault();
            if (!emailInput.val().trim().trim()) {
                return;
            }

            addEmail({
                email: emailInput
                  .val()
                  .trim()
                
              });

            function addEmail(emailReq){
                console.log(emailReq);
                $.post("/api/user", emailReq);
                window.location.href = "/login"
            }
        }
    
})