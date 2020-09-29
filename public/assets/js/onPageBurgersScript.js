//burger button function
$(document).ready(() => {
    //text field burgers are entered
    const textField = $("#burger-input");

    //set the "Eat Me!" buttons
    $(".devour-burger").click(function(event){
        event.preventDefault();
        event.stopPropagation();

        //get the id of the burger the button is attached to
        let id = $(this).attr("data-id");
        //turn the id from a string back into an int
        id = parseInt(id);
        
        $.ajax({
            url: "/api/burgers/" + id,
            type: "PUT"
        }).then(
            function() {
                location.reload();
            }
        );
    });

    //give Upload Burger button functionality
    $(".upload-button").click(function(event){
        event.preventDefault();
        event.stopPropagation();
        
        let burger_name = $(textField).val();
        $(textField).val("");

        if(burger_name.length > 0){
            $.ajax({
                url: "/api/burgers/",
                type: "POST",
                data: { burger_name: burger_name }
            }).then(
                function() {
                    location.reload();
                }
            );
        }
    });
});