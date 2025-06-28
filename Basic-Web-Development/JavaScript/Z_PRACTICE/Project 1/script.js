function checkData(){
    const uEmail = document.getElementById("email").value;
    const uPassword = document.getElementById("password").value;

    // Check if email is empty
    if(uEmail === ""){
        alert("Please enter your email");
        return false;
    }

    // Check if email is valid
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailPattern.test(uEmail)){
        alert("Please enter a valid email address");
        return false;
    }

    // Check if password is empty
    if(uPassword === ""){
        alert("Please enter your password");
        return false;
    }

    // Check password length
    if(uPassword.length < 8){
        alert("Password must be at least 8 characters long");
        return false;
    }

    // Check password strength
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/;
    if(!passwordPattern.test(uPassword)){
        alert("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

function loginWithGoogle() {
  alert("Simulated: Logged in with Google!");
  // window.location.href = "dashboard.html"; // Optional: redirect
}

function loginWithApple() {
  alert("Simulated: Logged in with Apple!");
  // window.location.href = "dashboard.html";
}
