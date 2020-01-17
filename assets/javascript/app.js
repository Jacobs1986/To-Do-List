// I've decided that I want to try and save the information to Firebase rather than to local storage. I just want to see how I can get this to work.

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBHOtv6T25h0nnUClZ5zUBoDl3Yh5wt_kg",
    authDomain: "fir-demo-9f6b7.firebaseapp.com",
    databaseURL: "https://fir-demo-9f6b7.firebaseio.com",
    projectId: "fir-demo-9f6b7",
    storageBucket: "fir-demo-9f6b7.appspot.com",
    messagingSenderId: "491402112622",
    appId: "1:491402112622:web:23f52a226ec9cb24dd007f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// variable for the database
let database = firebase.database();

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
    button.attr("data-to-do", `${listCount}`);
    // Give the button a class of checkbox
    button.addClass("checkbox");
    // Give the button a text of X
    button.text("x");
    // Prepend the button to p
    paragraph.prepend(button);
    // Add everything to the #toDoList
    $("#toDoList").append(paragraph);
    // Add to the listCount
    listCount++
    // Clear the #to-do text box
    $("#to-do").val("").focus();
})

// Function to remove the button from the list
$(document.body).on("click", ".checkbox", function () {
    console.log(this);
    // get the number from the data-to-do attr store it in a variable
    let toDoNumber = $(this).attr("data-to-do");
    console.log(toDoNumber);
    // Empty the <p> element using the #Item-variable id
    $(`#Item-${toDoNumber}`).remove();
})