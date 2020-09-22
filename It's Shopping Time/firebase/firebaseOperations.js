var firebaseOperations = {
    registerUser(userObj) {
        firebase.database().ref('collegeproject/' + userObj.name).set(userObj);
        alert("User Registered")
    },

    getUser(username, callBackFunction) {
        var dbref = firebase.database().ref('collegeproject/' + username);
        dbref.once('value', (snapshot) => {
            console.log(snapshot.val())
            if (snapshot.val()) {
                callBackFunction(snapshot.val());
            }
            else {
                alert("Please enter correct userId and password")
            }
        })
    }
}