<!DOCTYPE HTML>
<html>
<?php include("header.php")?>
<body  class="back6">
<?php include("menu.php")?><br>
<nav class="section-nav-header" style="margin-top:4.5%">
  
    <ul>
        <li><a href="contact.php"  >Contact Person</a></li>
        <li><a href="contactquery.php" class="current" > Mail Us </a></li>
        <li><a href="contactfind.php">Reach Us</a></li>
        
    </ul>
</nav><br><br><br><br>
<div class="wrap">
	<div class="main">
		   <div class="contact">				
					<div class="col span_2_of_3">
				  <div class="contact-form">
				  	<h3>Contact Us</h3>
					    <form method="post" action="contactpost.php">
					    	<div>
						    	<span><label>NAME</label></span>
						    	<span><input name="userName" type="text" class="textbox"></span>
						    </div>
						    <div>
						    	<span><label>E-MAIL</label></span>
						    	<span><input name="userEmail" type="text" class="textbox"></span>
						    </div>
						    <div>
						     	<span><label>MOBILE</label></span>
						    	<span><input name="userPhone" type="text" class="textbox"></span>
						    </div>
						    <div>
						    	<span><label>MESSAGE</label></span>
						    	<span><textarea name="userMsg"> </textarea></span>
						    </div>
						   <div>
						   		<span><input type="submit" value="Submit"></span>
						  </div>
					    </form>
					</div>
  				</div>
  				<div class="clear"></div>			
	    </div>
	</div>
</div>
	<?php include("footer.php"); ?>
</body>
</html>
