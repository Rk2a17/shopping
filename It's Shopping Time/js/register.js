function doRegister() {
    var userObj = new user;
    userObj.name = document.getElementById("Username").value;
    userObj.password = document.getElementById("password").value;
    userObj.lastname = document.getElementById("Lastname").value;
    userObj.confirm_password = document.getElementById("Confirmpassword").value;
    userObj.Email_id = document.getElementById("Emailid").value;
    if (checkValidationsOnRegister(userObj)) {
        return;
    }
    firebaseOperations.registerUser(userObj);
}

function checkValidationsOnRegister(userObj) {
    for (let key in userObj) {
        if (userObj[key] == "") {
            alert("Please enter " + key);
            return 1;
        }
    }
    if (userObj.password != userObj.confirm_password) {
        alert("Please Enter Correct Password")
        return 1;
    }
}