/**
 * Created by Ivy on 4/20/2017.
 */
/*
connect to db
get username/password elements
query against db
 */
function login() {
    let user = document.forms["login_form"]["username"].value;
    console.log(user);
    var password = document.forms["login_form"]["password"].value;

    if(user == "uncaMotorsports" && password == "blob"){
        location.anchor("mainpage.html");
        location.replace("mainpage.html");
    }else {
        alert("Wrong username/password");
    }
}