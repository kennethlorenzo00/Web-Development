function submitForm() {
    var form = document.getElementById("form1");

    var isEmailValid = /\b[A-Za-z0-9._%+-]+@gmail\.com\b/.test(document.getElementById("email").value.trim());
    var isAgeValid = /^[0-9]+$/.test(document.getElementById("age").value.trim());

    var areAllFieldsFilled = Array.from(form.elements).every(function (element) {
        if (element.type === 'checkbox') {
            return true; 
        } else if (element.type === 'radio') {
            return document.querySelector('input[name="' + element.name + '"]:checked'); 
        } else {
            return element.value.trim() !== '';
        }
    });

    if (areAllFieldsFilled && isEmailValid && isAgeValid) {
        var confirmation = confirm("Are you sure you want to submit the form?");
        if (confirmation) {
            form.submit();
            var message = 'Form is submitted successfully!'
            alert(message);
            form.reset();
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
