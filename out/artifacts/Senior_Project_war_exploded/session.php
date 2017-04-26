<?php
/**
 * Created by IntelliJ IDEA.
 * User: postgres
 * Date: 4/16/2017
 * Time: 5:44 PM
 */
include('db_config.php');
session_start();
$user = $_SESSION['login'];
$sql = "SELECT * FROM User_Account WHERE login = '$_POST[username]' AND md5_password = '$_POST[password]'";
$result = pg_query($db, $sql);
$login = $result['username'];

if(!isset($_SESSION['login'])){
    header("Location: login.html");
}else
    header("Location: mainpage.html");