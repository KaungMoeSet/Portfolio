const form = document.querySelector(".contact-form");
const errorNodes = document.querySelectorAll(".error");
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const success = document.querySelector("#success");

function validateForm() {

    clearMessages();
    let errorFlag = false;

    if(nameInput.value.length < 1){
        errorNodes[0].innerText =  "Name cannot be empty";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if(!emailIsValid(email.value)){
        errorNodes[1].innerText =  "Email is invalid";
        email.classList.add("error-border");
        errorFlag = true;
    }

    if(subject.value.length < 1){
        errorNodes[2].innerText =  "Subject cannot be empty";
        subject.classList.add("error-border");
        errorFlag = true;
    }

    if(message.value.length < 1){
        errorNodes[3].innerText =  "Message cannot be empty";
        message.classList.add("error-border");
        errorFlag = true;
    }

    if(!errorFlag){

        sendEmail(nameInput.value, email.value, subject.value, message.value);

        success.innerText = "Thank you!";
    }
}

function clearMessages() {
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }

    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    subject.classList.remove("error-border");
    message.classList.remove("error-border");
}

function emailIsValid(email) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

function sendEmail(name, email, subject, message) {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "kaungmoeset@gmail.com",
        Password: "B2A4D86BBA8CC3035B0211D0DFC3B73C3E5A",
        To: "kaungmoeset@gmail.com",
        From: "kaungmoeset@gmail.com",
        Subject: subject,
        Body: `Name: ${name} <br> Email: ${email} <br> Message: ${message}`
    }).then((success) => {
        alert("message sent successfully!");
    }).catch((error) => {
        alert("error sending message!");
    })
}
/*================================  Contact Section ================================*/


/*================================  Nav change Active ================================*/
var navContainer = document.getElementById("navbarNav");

var navs = navContainer.getElementsByClassName("nav-item");

for (var i = 0; i < navs.length; i++) {
    navs[i].addEventListener('click', function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    })
}

var navFooter = document.getElementById("nav-container");

var footer = navFooter.getElementsByClassName("nav-item");
for (var i = 0; i < footer.length; i++) {
    footer[i].addEventListener('click', function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    })
}