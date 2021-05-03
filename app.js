let i = 0;
let txt = 'LETTERS'; /* The text */
let speed = 200; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    console.log("FN called")
  if (i < txt.length) {
    document.getElementById("super-font").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
function load2(event){
    location.replace("/2.html");
}

function verifyPassword() {  
  var pw = document.getElementById("pswd").value;  
  //check empty password field  
  if(pw == "") {  
     document.getElementById("message").innerHTML = "**Fill the password please!";  
     return false;  
  }  
   
 //minimum password length validation  
  if(pw.length < 8) {  
     document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
     return false;  
  }  
  
//maximum length of password validation  
  if(pw.length > 15) {  
     document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
     return false;  
  }
}


