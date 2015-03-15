<?php

$Host="localhost";
$User="root";
$pass="";
$DB="jiet-feedback";
$link = mysql_connect($Host,$User,$pass);
mysql_select_db($DB);
if (!$link) {
    die('Could not connect: ' . mysql_error());
}
mysql_query ("set character_set_results='utf8', character_set_client = 'utf8', character_set_connection = 'utf8', character_set_database = 'utf8', character_set_server = 'utf8'"); 

?>