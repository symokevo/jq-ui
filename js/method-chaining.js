$(document).ready(function() {
    // Attach a click event to the animate button
    $("#animateButton").click(function() {
        // Chain methods to animate the button
        $("#box")
        .css("background-color", "purple")
        .animate({ width: "200px" }, 1000)
        .delay(500)
        .fadeOut()
        .fadeIn()
        .slideUp();
    });
});