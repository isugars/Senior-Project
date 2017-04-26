<?php
/**
 * Created by IntelliJ IDEA.
 * User: postgres
 * Date: 4/16/2017
 * Time: 5:01 PM
 */
$db = pg_connect("host=35.185.13.4 port=5432 dbname=postgres user=postgres password=alsoqp45");

if (!$db) {
    die("Could not connect: " . pg_last_error());
}