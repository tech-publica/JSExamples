//IIFE
(function () {
    let nome = document.forms["Ourform"]["Nome"];
    let nomeError = document.getElementById("Non")
    let cognome = document.forms["Ourform"]["Cognome"];
    let cognomeError = document.getElementById("Nal");
    let email = document.forms["Ourform"]["Email"];
    let emailError = document.getElementById("Email");
    let tel = document.forms["Ourform"]["Tel"];
    let telError = document.getElementById("Nat");
    let dataNascita = document.forms["Ourform"]["Data"];
    let dataNascitaError = document.getElementById("Nad");
    let interessi = document.forms["Ourform"]["interessi"];
    let interessiError = document.getElementById("Naselect");


        document.querySelector("#button").addEventListener("click", function (evt) {

            if (nome.value == "" || !isNaN(nome.value) || (nome.value.length < 3 || nome.value.length > 30)) {
                nomeError.innerHTML = "*Nome non valido";
                nome.style.borderColor = "red";
            }
            else {
                nomeError.innerHTML = " ";
                nome.style.borderColor = "green";
            }

            if (cognome.value == "" || !isNaN(cognome.value) || (cognome.value.length < 3 || cognome.value.length > 30)) {
                cognomeError.innerHTML = "*Cognome non valido";
                cognome.style.borderColor = "red";

            }
            else {
                cognomeError.innerHTML = " ";
                cognome.style.borderColor = "green";

            }

            if (email.value == "" || !validateEmail(email.value) || (email.value.length < 3)) {

                emailError.innerHTML = "*Mail non valida";
                email.style.borderColor = "red";

            }

            else {
                emailError.innerHTML = " ";
                email.style.borderColor = "green";

            }

            if (tel.value == "" || !isPhoneFormat(tel.value) || (tel.value.length < 3)) {
                telError.innerHTML = "*Inserire numero di telefono valido";
                tel.style.borderColor = "red";

            }
            else {
                telError.innerHTML = " ";
                tel.style.borderColor = "green";

            }

            let datey = new Date(dataNascita.value);
            datey.setFullYear(datey.getFullYear() + 18);
            let currentDate = new Date();

            if (!isValidDate(datey) || datey >= currentDate) {
                dataNascitaError.innerHTML = "*Inserire data valida, devi essere maggiorenne";
                dataNascita.style.borderColor = "red";

            }
            else {
                dataNascitaError.innerHTML = "";
                dataNascita.style.borderColor = "green";

            }

            if (interessi.value === "nessuno") {
                interessiError.innerHTML = "*Selezionare un interesse";
                interessi.style.borderColor = "red";

            }
            else {
                interessiError.innerHTML = "";
                interessi.style.borderColor = "green";

            }


        });

})();

function isPhoneFormat(phone) {
    return /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(phone);
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function isValidDate(date) {
    return date.getTime && !isNaN(date.getTime());
}