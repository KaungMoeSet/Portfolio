const form = document.querySelector(".contact-form");
form.addEventListener("submit", function(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var body = 'name: ' + name + '<br/> message: ' + message;

    document.querySelector(".contact-form").reset();

    sendEmail(name, email, subject, body);
})

function sendEmail(name, email, subject, body){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kaungmoeset@gmail.com",
        Password : "B2A4D86BBA8CC3035B0211D0DFC3B73C3E5A",
        To : "kaungmoeset@gmail.com",
        From : "kaungmoeset@gmail.com",
        Subject : subject,
        Body : `Name: ${name} <br> Email: ${email} <br> Message: ${body}`
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

for(var i=0; i< navs.length; i++) {
    navs[i].addEventListener('click', function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className  += " active";
    })
}

var navFooter = document.getElementById("nav-container");

var footer = navFooter.getElementsByClassName("nav-item");
for(var i=0; i< footer.length; i++) {
    footer[i].addEventListener('click', function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className  += " active";
    })
}