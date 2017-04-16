<?php
/**
 * Created by IntelliJ IDEA.
 * User: postgres
 * Date: 3/30/2017
 * Time: 4:18 PM
 */
$db = pg_connect("host=localhost port=5432 dbname=Web_App user=postgres password=Andy0986");
if (!$db) {
    die("Could not connect: " . pg_last_error());
}

$sql = "SELECT * FROM User_Account WHERE login = '$_POST[username]' AND md5_password = '$_POST[password]'";
$result = pg_query($db,$sql);

if((pg_fetch_assoc($result)) == 't') {
    header("Location: localhost/Senior-Project/mainpage.html");
    exit();
}
else
    die("Wrong username/password. ");

pg_free_result($result);

pg_close($db);
