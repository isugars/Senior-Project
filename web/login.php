<?php
/**
 * Created by IntelliJ IDEA.
 * User: postgres
 * Date: 3/30/2017
 * Time: 4:18 PM
 */
include("db_config.php");
require_once 'C:\Bitnami\wappstack-7.1.2-0\apache2\htdocs\Senior-Project\vendor\autoload.php';

//create client object
//$client = new Google_Client();
//$client->setAuthConfig('client_secrets.json');
//$client->setAccessType("online");
////$client->setIncludeGrantedScopes(true);   // incremental auth
//$client->addScope(Google_Service_Drive::DRIVE_METADATA_READONLY);
//$client->setRedirectUri('http://' . $_SERVER['HTTP_HOST'] . '/oauth2callback.php');
//
////create anti-forgery state token
//// Create a state token to prevent request forgery.
//// Store it in the session for later validation.
//function createToken()
//{
//    $state = sha1(openssl_random_pseudo_bytes(1024));
//    $app['session']->set('state', $state);
//// Set the client ID, token state, and application name in the HTML while
//// serving it.
//    return $app['twig']->render('index.html', [
//        'CLIENT_ID' => CLIENT_ID,
//        'STATE' => $state,
//        'APPLICATION_NAME' => APPLICATION_NAME
//    ]);
//}
////send authentication request to google
//$url = "https://accounts.google.com/o/oauth2/v2/auth";
//$client_id = "25492660997-kb69tabp2l81vg3kk2mu8orpsu4vsoi7.apps.googleusercontent.com";
//$response_type = "code";
//$scope = "openid%20email";
//$redirect_uri = "bitnami-6jqo6cybkw.appspot.com/mainpage.html";
//$login_hint = "jsmith@example.com";
//$request = "$url?client_id=$client_id&response_type=$response_type&scope=$scope&redirect_uri=$redirect_uri&login_hint=$login_hint";
//http_get($request);
//
////confirm antiforgery state token
//// Ensure that there is no request forgery going on, and that the user
//// sending us this connect request is the user that was supposed to.
//if ($request->get('state') != ($app['session']->get('state'))) {
//    return new Response('Invalid state parameter', 401);
//}


    $sql = "SELECT * FROM UserAccount WHERE username = '$_POST[username]' AND password = '$_POST[password]'";
    $result = pg_query($db, $sql);

    if ((pg_fetch_assoc($result)) == 't') {
        $_SESSION['login'] = 'username';
        header("Location: mainpage.html");
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


