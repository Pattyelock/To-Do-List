$(document).ready(function () {
    // Function to add a new item
    function newItem() {
        const input = $("#input");
        const inputValue = input.val().trim();

        if (inputValue === "") {
            alert("Please enter an item");
            return;
        }

        // Create list item with delete button
        const li = $("<li></li>").text(inputValue);
        li.dblclick(function () {
            $(this).toggleClass("strike");
        });

        const deleteButton = $("<button></button>").text("X");
        deleteButton.addClass("crossOutButton");
        deleteButton.click(function (e) {
            e.stopPropagation();
            $(this).parent().remove();
        });

        li.append(deleteButton);
        $("#list").append(li);

        // Clear input field
        input.val("");

        // Make the list sortable
        $("#list").sortable();
    }

    // Add item when "Add" button is clicked
    $("#button").click(newItem);

    // Add item when Enter is pressed in the input field
    $("#input").keypress(function (e) {
        if (e.which === 13) {
            e.preventDefault();
            newItem();
        }
    });
});
