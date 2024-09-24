const navbarr = document.querySelector(".navbar-nav");

document.querySelector("#menu").onclick = () => {
  navbarr.classList.toggle("active");
};

// click outside sidebar to hide nav

const menuu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menuu.contains(e.target) && !navbarr.contains(e.target)) {
    navbarr.classList.remove("active");
  }
});

const locationn = document.querySelector(".map");

// function validate(){
//   var email = document.getElementById("email").value

//   if(email.endsWith("@gmail.com") == false || email.endsWith("@yahoo.com") == false){
//     document.getElementById("error_message").innerHTML ="emailnya pake yg gmail!"
// }}

function validate(){
    var name = document.getElementById("name").value
    var email =document.getElementById("email").value
    var country =document.getElementById("country")
    var messages =document.getElementById("messages").value
    var agree =document.getElementById("agree")
    var e=document.getElementById("country")
    var ddl=document.getElementById("country")

    
    if(name.length <  5 ){
        alert("Please insert your name more than 5 characters")
    }

    else if(email.endsWith("@gmail.com") == false){
        alert("Your email must end with @gmail.com")
    }

    else if(email.lenth < 7){
        alert("Please insert your email more than 7 characters")
    }

    else if(ddl.value=="Select your region"){
        alert("Please select your region");
    }

    else if(messages.length < 1 ){
        alert("Please type your message");
    }

    else if(!agree.checked){
        alert("You must agree to our terms and services");
    }

    else{
        alert("Form Submitted")
        document.contactusform.submit();
        // document.contactusform.reset();
    }
}
