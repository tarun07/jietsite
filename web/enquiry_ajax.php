<?php 
session_start();

require_once('config.php');

if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']))
   echo "<script> window.location='index.php'</script>";

//echo $_SESSION['security_code'];
if (!empty($_REQUEST['captcha-form'])) {
    if (empty($_SESSION['security_code']) || trim(strtolower($_POST['captcha-form'])) != $_SESSION['security_code']) {
		
		$captcha_message = "Invalid captcha";
		echo "0";
		unset($_SESSION['security_code']);
		exit();
	} else if(isset($_POST['fquery']) && isset($_POST['fsub']) )
	 {
 
 		
		 
		$fsub=mysql_real_escape_string(trim($_POST['fsub']));
		$fquery=mysql_real_escape_string(trim($_POST['fquery']));
				  
 
       $sql="insert into suggetion set subject='".$fsub."' , message='".$fquery."', ip='".$_SERVER['REMOTE_ADDR']."', submit_date_time ='".date("Y-m-d h:i:m")."'";
	  
	  mysql_query($sql);
	  
	  
	 	
		echo "1";	
		unset($_SESSION['security_code']);
		exit();
		
	 	
    }
	echo "0";
	unset($_SESSION['security_code']);
	exit();
}
?>