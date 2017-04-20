<?php
/**
 * Created by IntelliJ IDEA.
 * User: postgres
 * Date: 4/16/2017
 * Time: 2:20 PM
 */
include("db_config.php");

$username = pg_escape_string($_POST['username']);
$email = pg_escape_string($_POST['email']);
$password = pg_escape_string($_POST['password']);
$code = md5($_POST['password']);
$md5pass = $code;

//changed schema name under Web_App DB; error occurs because 2 DB are under a single server
$sql = "INSERT INTO Web_App.public.User_Account(Web_App.public.User_Account.login,
                    Web_App.public.User_Account.user_name, Web_App.public.User_Account.password,
                    mdWeb_App.public.User_Account.md5_password5_password) VALUES('$email','$username','$password', '$md5pass')";
$result = pg_query($db,$sql);

if (!$result) {
    die(pg_last_error());
//    $errormessage = pg_last_error();
//    echo "Error with query: " . $errormessage;
//    exit();
}else
    header("Location: mainpage.html");
//printf ("These values were inserted into the database - %s %s %s", $username, $email, $password);

pg_free_result($result);
pg_close($db);