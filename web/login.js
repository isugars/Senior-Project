/**
 * Created by Ivy on 4/20/2017.
 */
/*
connect to db
get username/password elements
query against db
 */
function login() {
    print("dummy1");
    let username = document.getElementsByClassName("username").valueOf();
    let password = document.getElementsByClassName("password").valueOf();
    print("dummy2");
    if(username == "uncaMotorsports" && password == "blob"){
        alert("you're logged in");
        window.location = "mainpage.html";
    }else {
        alert("Wrong username/password");
    }
}