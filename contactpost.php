<?php
$message = $_POST["userMsg"]+" from Name: " + $_POST["userName"] +" Email: "+$_POST["userEmail"]+" Mobile: "+$_POST["userPhone"];
$message = wordwrap($message, 70, "\r\n");
 if (mail( "info@jietjodhpur.com" , "jiet query request" ,$message))
{
 echo ("Successful. <br />");
}
 else {
 echo ("Failed. <br />");
 }
echo("Thankyou. Please go back to main site.");
?>