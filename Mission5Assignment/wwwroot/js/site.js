// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    $("#calculate").click(function () {
        let hours = parseFloat($("#hours").val()); // Variable to store the user's inputted hours
        let rate = parseFloat($("#rate").val());   // Variable to store the non-editable rate

        // Validate input. Must be a positive number greater than 0
        if (hours === "" || isNaN(hours) || hours <= 0) {
            alert("Please enter a valid positive number of hours.");
            return;
        }

        let total = hours * rate;                 // Variable to store the total (hours * rate)
        $("#total").text(`$${total.toFixed(2)}`); // Assign the value of the element with id "total" to the variable total
    });
});



