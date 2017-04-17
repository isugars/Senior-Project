<?php
/**
 * Created by IntelliJ IDEA.
 * User: postgres
 * Date: 4/16/2017
 * Time: 5:01 PM
 */
$db = pg_connect("host=localhost port=5432 dbname=Web_App user=postgres password=Andy0986");

if (!$db) {
    die("Could not connect: " . pg_last_error());
}