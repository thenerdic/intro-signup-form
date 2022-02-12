const validateEmail = (email) => {
    const emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (email.value.match(emailPattern)) {
        alert("Thanks for signing up!");
        document.form1.email.focus();
        return true;
    } else {
        alert("Invalid Email!");
        document.form1.email.focus()
        return false;
    }
}