const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function(event) {

    // Prevent the form from refreshing the page
    event.preventDefault();

    // Get the student's full name
    const fullName = document.getElementById("fullName").value;

    // Show a greeting message
    alert("Application submitted successfully for " + fullName + "!");
});
