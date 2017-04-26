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
    let password = document.forms["login_form"]["password"].value;

    if(user == "uncaMotorsports" && password == "blob"){
        location.anchor("https://bitnami-6jqo6cybkw.appspot.com/mainpage.html");
        location.replace("mainpage.html");
    }else {
        alert("Wrong username/password");
    }
}