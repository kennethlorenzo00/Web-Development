function submitForm() {
    var form = document.getElementById("form1");

    var isEmailValid = /\b[A-Za-z0-9._%+-]+@gmail\.com\b/.test(document.getElementById("email").value.trim());
    var isAgeValid = /^[0-9]+$/.test(document.getElementById("age").value.trim());

    var areAllFieldsFilled = Array.from(form.elements).every(function (element) {
        if (element.tagName.toLowerCase() === 'select') {
            return element.value.trim() !== '';
        } else if (element.type !== 'text') {
            return true;
        }
        return element.value.trim() !== '';
    });

    if (areAllFieldsFilled && isEmailValid && isAgeValid) {
        var confirmation = confirm("Are you sure you want to submit the form?");
        if (confirmation) {
            form.submit();
            var message = 'Form is submitted successfully!'
            alert(message);
            //delete
        }
    } else {
        var errorMessages = ["Please correct the following errors before submitting:"];

        if (!areAllFieldsFilled) {
            errorMessages.push("- All required fields must be filled out.");
        }

        if (!isEmailValid) {
            errorMessages.push("- Email address should be valid.");
        }

        if (!isAgeValid) {
            errorMessages.push("- Age should be a number.");
        }

        alert(errorMessages.join("\n"));
    }

        alert(errorMessage);
    }
