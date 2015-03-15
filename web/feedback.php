<html>
<head>
    <script src="tab-content/tabcontent.js" type="text/javascript"></script>


<script language="javascript">

 function enq_validation()
  {
  

  
  if(document.getElementById('fsub').value.trim()==0)
	   {
	      alert("Plz Select Subject");
		   document.getElementById('fsub').focus();
		  return false;
	   
	   }
  
  
  
   if(document.getElementById('fquery').value.trim()=="")
	   {
	      alert("Plz Enter Message");
		   document.getElementById('fquery').focus();
		  return false;
	   
	   }
  
   
 /*   if(isSpclChar(document.getElementById('fquery').value.trim(),""))
	   {
	      alert("Special Character not Allowed !!!");
		  document.getElementById('fquery').focus();
		  return false;
	   
	   }
	   */
	   if(document.getElementById('captcha-form').value.trim()=="")
	   {
	      alert("Plz Enter Captcha-Code");
		   document.getElementById('captcha-form').focus();
		  return false;
	   
	   }
	   if(confirm(" Are you Sure ???"))
        {
	   
  
  
     $.ajax({
			type: "POST",
			url: "web/enquiry_ajax.php",   
			async: true,
		    data:$('#suggetion').serialize(),
		
		success: function(result){  
 			  
			 
			         if(result.trim()==0)
					 {
					    alert("Please Enter Correct Captcha-Code");
					    document.getElementById('captcha-form').value="";
						document.getElementById('captcha').src='web/captcha/CaptchaSecurityImages.php?'+Math.random();
						document.getElementById('captcha-form').focus();
			            
								 
					 }
					   else if(result.indexOf('Invalid')>-1)
					   {
					      
						  alert(result);
					    document.getElementById('captcha-form').value="";
						document.getElementById('captcha').src='web/captcha/CaptchaSecurityImages.php?'+Math.random();
						document.getElementById('captcha-form').focus();
					   
					   }
					   
					   else
					   {
					     document.getElementById('response').innerHTML ="Thanks for Submittion !!! ";
						 document.getElementById('suggetion').style.display='none';
						 
					//	 sendemail(result);
						 document.getElementById("suggetion").reset();
		 			  }	
				}
			});  
   
   }
  
  }
  
function   sendemail(val)
 {
 
   $.ajax({
			type: "POST",
			url: "emailsubmit.php",   
			async: true,
		    //data:$('#enq').serialize(),
		    data: "type=EQ&val_id="+val+"&ap_name="+document.getElementById('txt_name').value.trim()+"&emailid="+document.getElementById('txt_email').value,
		success: function(result){  
 			
			
			      
				}
			});
	   
 
 
 
 }

</script>


	<meta charset="utf-8">
</head>
<?php include("header.php")?>
<body class="back-au">
<?php include("menu.php")?>
<br>
	 <div style="width: 80%;margin-left: 8%;margin-top:4.5%"">
	 <div class="section-header bckgrnd-black">
   Feed-Back
</div>
	 
	 <nav >
	     <ul class="section-nav-header-au" style="width: 89%; margin-left: 5.9%;">
           <li style="width:50%" ><a href="#view1">SUGGESIONS</a></li>
        <li style="width:50%" ><a href="#view2">COMPLIANCES</a></li>
        
        
        
        </ul>
      
	 
	 
    
    
</nav> 
	
  <br><br><br>
  
 
  <div class="aboutcontent">
  <div class="aboutcontainer">
  <div class="row-aboutcontent-area"><br><br>
  <div class="aboutcontent-main" id="aboutcontent-main">
  <div class="tabcontents">
            
                <div id="view1"> 
                <div class="aboutcontent-main" id="aboutcontent-main">
  
  
  
   <div id="fb">
  
      <div id='loading' style='display: none;' align="center"> 
	    <div id="black_overlay11">
		<center> 
		 <img src="images/ajax-loader.gif" title="Loading" />
		 </center>
		</div>						
	 </div> 
        <div style="font-size:19px;">Your Feedback is valuable to us and would help us improve. kindly fill in your suggestions.</div>	<br /> <br /> 
		
		
		
		
			  <div class="contact-form" id="">
				  <center>	
				  <form id="suggetion" method="post" action="#" >
				<table width="70%" align="center">
		<tbody>
		<tr style="bottom:1px" ><td>
		Subject <span class="mf">*</span> </td><td>
		
		
		
		<select style="width:98%" id="fsub"  name="fsub">
									<option value="0" >Select One</option>
									<option value="academics">Academics</option>
									<option value="library">Library</option>
									<option value="transport">Transport</option>
									<option value="Infrastructure">Infrastructure</option>
									<option value="sports_cultural">Sports_Cultural</option>
									<option value="attandance">Attandance</option>
									
									</select>
		</td></tr>
		<tr><td style="vertical-align:top;">
		Message <span class="mf">*</span> </td><td><textarea maxlength="250" cols="20" rows="5" name="fquery" id="fquery"></textarea>
		
		</td></tr>
		
		<tr><td><img width="195" height="64" id="captcha" src="web/captcha/CaptchaSecurityImages.php">
									<br /><a id="change-image" onClick="
								document.getElementById('captcha').src='web/captcha/CaptchaSecurityImages.php?'+Math.random();" href="javascript:void(0);">Not readable? Change text.</a>
									</td><td><input type="text" style="width:150px" autocomplete="off" id="captcha-form" name="captcha-form" oncopy="return false" ondrag="return false" ondrop="return false" onpaste="return false" maxlength="6"></td></tr>
		
		<tr><td>
		</td>
		<td>
		<input width="100px" type="submit" onClick="enq_validation();" value="Submit">&nbsp;&nbsp;
		<input type="reset" value="Reset">
		</td></tr>
		
		
		
		</tbody></form></table>
		
		</center>
					</div>
		
		
		

		   <div id="response"></div>
		 </div>
  


			  				
  </div>
            </div>
            <div id="view2">
             <div class="aboutcontent-main" id="aboutcontent-main">
  
 

 
			  				
  </div>               
            </div>
      
			
	
			
        </div>
  

  </div>
  </div>
  </div>
  </div>
  
  
			</div>
	</div>
</div><br><br>
	<?php include("footer.php"); ?>
	</body>
</html>