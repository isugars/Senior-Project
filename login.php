<?php
/**
 * Created by IntelliJ IDEA.
 * User: Ivy
 * Date: 3/30/2017
 * Time: 4:18 PM
 */
if($_POST['submit'])
    $db = pg_connect("host=localhost port=5432 dbname=Web_App user=postgres password=Andy0986");
    if(!$db)
        die("Could not connect: ".pg_last_error());
    else
        echo "This Worked! WTF";

//$sql = "SELECT * FROM User_Account
//        WHERE login = $_POST['username']"
//        AND md5_password = $_POST['password'];
//$result = pg_query($db,$sql);

//if((pg_fetch_assoc($result)) == 't') {
//    header("Location: localhost/mainpage.html");
//    exit();
//}
//else
//    die("Wrong username/password. ".pg_last_error());

//if(isset($_POST['submit'])){
//    header("Location: localhost/mainpage.html");
//}
//else{
//    die("Wrong username/password.".pg_last_error());
//}

/*
 * if that doesn't work use:
 * if($done)
 *      header("Location: localhost/mainpage.html);
 *      exit;
 */

//pg_free_result($result);

pg_close($db);
