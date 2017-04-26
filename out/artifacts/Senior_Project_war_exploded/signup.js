/**
 * Created by Ivy on 4/20/2017.
 */
function signup() {
    let user = document.forms["signup_form"]["username"].value;
    let email = document.forms["signup_form"]["email"].value;
    let password = document.forms["signup_form"]["password"].value;

    if(user == "" || password == "" || email == ""){
        alert("All information must be completed to register.");
    }else {
        location.anchor("https://bitnami-6jqo6cybkw.appspot.com/mainpage.html");
        location.replace("mainpage.html");
    }
}