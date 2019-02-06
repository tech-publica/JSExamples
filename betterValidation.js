//IIFE

console.log(wondow.x);

let validator = (function () {
    let nome = document.forms["ourForm"]["Nome"];
    let nomeError = document.getElementById("Non")
    let cognome = document.forms["ourForm"]["Cognome"];
    let cognomeError = document.getElementById("Nal");
    let email = document.forms["ourForm"]["Email"];
    let emailError = document.getElementById("Email");
    let tel = document.forms["ourForm"]["Tel"];
    let telError = document.getElementById("Nat");
    let dataNascita = document.forms["ourForm"]["Data"];
    let dataNascitaError = document.getElementById("Nad");
    let interessi = document.forms["ourForm"]["interessi"];
    let interessiError = document.getElementById("Naselect");

    function validate(field, isInvalid, fieldError, errorMessage) {
        if (isInvalid(field.value)) {
            field.className = "invalid";
            fieldError.innerHTML = errorMessage;
        }
        else {
            //field.style.borderColor = "green";
            field.className = "valid";
            fieldError.innerHTML = "";
        }
    }

    function validateForm() {
        validate(nome,
            (n) => n.length < 3 || n.length > 30,
            nomeError,
            "il nome deve essere tra 3 e 30 caratteri");

        validate(cognome,
            (c) => c.length < 3 || c.length > 30,
            cognomeError,
            "il cognome deve essere tra 3 e 30 caratteri");

        validate(email,
            (e) =>!validateEmail(e) || e.length < 3,
            emailError,
            "la mail deve essere valida e piu di 3 caratteri..");

        validate(tel,
            (t) => !isPhoneFormat(t) || t.length < 3,
            telError,
            "la telefono deve essere valido");

        validate(dataNascita,
            (d) => {
                let checkDate = new Date(d);
                if (!isValidDate(checkDate)) {
                    return true;
                }
                checkDate.setFullYear(checkDate.getFullYear() + 18);
                return new Date() < checkDate;
            },
            dataNascitaError,
            "la data deve essere valida e l'utente maggiorenne");


        validate(interessi,
            (i) => i == "nessuno",
            interessiError,
            "se non hai interessi non ci interessi");
    }

    function isPhoneFormat(phone) {
        return /^\+?[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(phone);
    }

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function isValidDate(date) {
        return date.getTime  &&  !isNaN(date.getTime());
    }


    return { 
        validate: validate,
        isPhoneFormat: isPhoneFormat,
        validateEmail: validateEmail,
        validateForm: validateForm,
        isValidDate: isValidDate
    };


})();



document.querySelector('form[name="ourForm"]')
    //document.querySelector('#button')
    .addEventListener("submit", function (evt) {
        evt.preventDefault();
        console.log("hello");
        validator.validateForm();
    });


