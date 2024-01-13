//your JS code here. If required.
 function submitForm() {
            // Get values from input fields
            var firstName = document.getElementById("firstName").value;
            var lastName = document.getElementById("lastName").value;
            var phoneNumber = document.getElementById("phoneNumber").value;
            var email = document.getElementById("email").value;

            // Display the result using alert with specific formatting
            var resultMessage = "First Name: " + firstName + "\n"
                              + "Last Name: " + lastName + "\n"
                              + "Phone Number: " + phoneNumber + "\n"
                              + "Email ID: " + email;

            alert(resultMessage);}