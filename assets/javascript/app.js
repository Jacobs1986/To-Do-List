// Global variables
let listCount = 1;

// function for the #add-to-do button
$("#add-to-do").on("click", function(event) {
    event.preventDefault();
    console.log("Clicked button");

    // Get the value of #to-do
    let toDoItem = $("#to-do").val().trim();
    console.log(toDoItem);
    // Set $("<p>") to a variable
    paragraph = $("<p>");
    // Give p the text to-do
    paragraph.text(toDoItem);
    console.log(paragraph);
    // Set the id attr of p to Item-listCount
    paragraph.attr("id", `Item-${listCount}`);
    console.log(paragraph);
    // Set $("<button>") to a variable
    button = $("<button>");
    // Give the button an id of listCount
    button.attr("id", `${listCount}`);
    // Give the button an attr of data-to-do listCount
    // Give the button a class of checkbox
    // Give the button a text of X
    // Prepend the button to p
    // Add everything to the #toDoList
    // Add to the listCount
    // Clear the #to-do text box
})