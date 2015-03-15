<?php
session_start();
include("config.php");
require_once "Mail.php";

/*if($_SERVER['HTTP_X_POSTED_WITH']!= "XMLHttpRequest")
  echo "<script> window.location='404.php'</script>";
*/
function emailSend()
{
			$from = "No-Reply<info@sainimalisamaj.com>";
			$to = $_POST['femailid'];
			$subject = "Acknowledgement Email - SKDGCC(BPPS)";
			$body = "<html><body>Dear <span style='text-transform: uppercase;'><b>".$_POST["fname"].",</b></span><br/ ><br/ >We thank you for your Feedback/Query.
			 <br />We will get back to you at the earliest. Please keep in touch with us.<br /> <br/><br />
			 
			 With best wishes,
			 <br>SKDGCC(BPPS)</br>
			         
			</body></html> ";
		
			$host = "mail.sainimalisamaj.com";
			$port = "26";
			$username = "info@sainimalisamaj.com";
			$password = "Jairam@2012";
		
			$headers = array ('MIME-Version'=>'1.0' ,'Content-type'=>'text/html','From' => $from,
			  'To' => $to,
			  'Subject' => $subject); 
			
			$smtp = Mail::factory('smtp',
			  array ('host' => $host,
				'port' => $port,
				'auth' => true,
				'username' => $username,
				'password' => $password));
		
			$mail = $smtp->send($to, $headers, $body);
		
				if (PEAR::isError($mail)) 
				{
				 // echo("<p>" . $mail->getMessage() . "</p>");
				 } 
				 else
				  {
							
				//  echo("<p>Message successfully sent!</p>");
				 }
		   


}

if (!empty($_POST['captcha'])) 
{
 if (empty($_SESSION['captcha']) || trim(strtolower($_POST['captcha'])) != $_SESSION['captcha'])
 {
		$captcha_message = "Invalid captcha";
		echo "0";
		unset($_SESSION['captcha']);
		 
		exit();
     
	} 
 else
 {
   
  
    $sql = "Insert into feedback set submit_time = '".date("Y-m-d h:i:m")."', name = '". mysql_real_escape_string($_POST["fname"]) ."', email_id = '".mysql_real_escape_string($_POST["femailid"])."' , subject = '".mysql_real_escape_string($_POST["fsub"])."', feedback = '".mysql_real_escape_string($_POST["fquery"])."',  ip_address = '".$_SERVER['REMOTE_ADDR']."'";
	mysql_query($sql);
	emailSend();
   echo "1";
   exit();
  
   
} 
} 
  else{
  unset($_SESSION['captcha']);
    echo "0";
	exit();
  }
 



?>