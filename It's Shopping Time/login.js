var loginUser = {};

function doLogin() {
    loginUser.userid = document.getElementById("userid").value;  // Value come from the Text Box
    loginUser.pwd = document.getElementById("password").value;
    if (loginUser.userid == "admin" && loginUser.pwd == "admin") {
        location.href = "crud.html";
        return;
    }
    firebaseOperations.getUser(loginUser.userid, checkUser);
}

function checkUser(userObj) {
    if (userObj.password == loginUser.pwd) {
        location.href = "index.html";
    }
    else {
        alert("Please enter correct userId or password")
    }
}