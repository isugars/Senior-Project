<?php
/**
 * Created by IntelliJ IDEA.
 * User: postgres
 * Date: 3/30/2017
 * Time: 4:18 PM
 */
include ("db_config.php");
ob_start();
session_start();

    $sql = "SELECT * FROM User_Account WHERE login = '$_POST[username]' AND md5_password = '$_POST[password]'";
    $result = pg_query($db, $sql);

    if ((pg_fetch_assoc($result)) == 't') {
        $_SESSION['login'] = 'username';
        header("Location: localhost/Senior-Project/mainpage.html");
//        exit();
    } else {
        loginError("Wrong username/password.");
        header("Location: index.html");
        exit();
    }

function loginError($msg) {
    echo '<script type="javascript">alert("'.$msg.'")</script>';
}


    pg_free_result($result);

    pg_close($db);


