
function readCookie(name) {
	var nameEQ1 = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ1) == 0) 
		{	
			   
			return  c.substring(nameEQ1.length,c.length);
		}
	}
	return false;
}


function createCookie(name,value) {
	
	var expires="";
	if(readCookie(name))
	{
		return;
	}
	else
	{
		var date = new Date();
		date.setTime(date.getTime()+(0*0*0*0*0));
		expires = "; expires="+date.toGMTString();
		document.cookie = name+"="+value+"; path=/";
	}
}


function compareofdate(to_value,from_value)
{


 var fdate_to = new Date();
  var fdate_from = new Date();
  to_value= to_value.split("-");
  from_value=from_value.split("-");
 
 
fdate_to.setDate(to_value[2]);
	fdate_to.setMonth(to_value[1]); // January = 0
	fdate_to.setFullYear(to_value[0]); 
  
  fdate_from.setDate(from_value[2]);
	fdate_from.setMonth(from_value[1]); // January = 0
	fdate_from.setFullYear(from_value[0]); 
  
  if(fdate_to > fdate_from)
  {
   
    return true;
  }
  
  return false;


}


function numericOnly(evt) {
    //var charCode = (evt.which) ? evt.which : window.event.keyCode;
    if (!evt) var evt = window.event;
    if (evt.keyCode) charCode = evt.keyCode;
    else if (evt.which) charCode = evt.which;
    if (charCode <= 13 || charCode == 46) {
    return true;
    } else {
    var keyChar = String.fromCharCode(charCode);
    var re = /[0-9]/
    return re.test(keyChar);
    }
    }


function purposeType()
{
	
  if(document.getElementById('col_4').value=="O")	
  {
	  
	  document.getElementById('col_41').style.display="";
  }
  else 
     document.getElementById('col_41').style.display="none";
}

function kilofeetOnly(evt) {
    //var charCode = (evt.which) ? evt.which : window.event.keyCode;
    if (!evt) var evt = window.event;
    if (evt.keyCode) charCode = evt.keyCode;
    else if (evt.which) charCode = evt.which;
    if (charCode <= 13 || charCode == 46) {
    return true;
    } else {
    var keyChar = String.fromCharCode(charCode);
    var re = /[0-9.]/
    return re.test(keyChar);
    }
    }


 function khararaVal(data)
  {
	//rek =  new RegExp(/^[0-9]\/\d*$|[0-9]$/)
   //return rek.test(k);
   
   iChars = "!@#$%^&*()+=[]\\\';{}|\":<>?`~";
	for (var i = 0; i <data.length; i++) 
	 {
		if (iChars.indexOf(data.charAt(i)) != -1) 
		{
			return false;
 	
    	}
	}
	return true;
	  
  }
  
  
  function areaVal(k)
  {
	rek =  new RegExp(/^\d*[0-9](\.\d*[0-9])?$|^\d*[0-9](\.\d*[0-9]\.\d*[0-9])?$/);  
 
	return rek.test(k);
	  
  }

 function kilometer(k)
 {
	 rek =  new RegExp(/^\d*[0-9](\.\d*[0-9])?$/);  
     return rek.test(k);
 }

function isSpclChar(data,flag){
	var iChars="";
	if(flag=="n")
		 iChars = "!@#$%^&*()+=[]\\\';,/{}|\":<>?0123456789`~";
	else
	iChars = "!@#$%^&*()+=[]\\\';/{}|\":<>?`~";
	
	
	for (var i = 0; i <data.length; i++) {
		if (iChars.indexOf(data.charAt(i)) != -1) {
		//alert ("The box has special characters. \nThese are not allowed.\n");
		return true;
			}
		}
	return false;
}   
	



function validation()
{


    var countTab=document.getElementById("dataTable").rows.length;
	 for(i=2;i<=countTab;i++)
	 {
	    if(document.getElementById('txt_name'+i).value.trim()=="")
	     {
			  alert('कृपया नाम लिखे ।') ;
			  document.getElementById('txt_name'+i).focus();
			  return false;
		 }
	 	 
	 	 if(isSpclChar(document.getElementById('txt_name'+i).value.trim(),"n"))
		  {
				alert('कृपया नाम सही लिखे ।') ;
				document.getElementById('txt_name'+i).focus();
				return false;
		  }
	  
		if(document.getElementById('cbo_rel'+i).value==0)
		{
			alert('कृपया पिता/पति चयन करें।') ;
			document.getElementById('cbo_rel'+i).focus();
			return false;
		}
	 
		if(document.getElementById('ftext'+i).value.trim()=="")
		{
			alert('कृपया पिता नाम लिखे ।') ;
			document.getElementById('ftext'+i).focus();
			return false;
		}
	
		if(isSpclChar(document.getElementById('ftext'+i).value.trim(),"n"))
		  {
				alert('कृपया पिता नाम सही लिखे ।') ;
				document.getElementById('ftext'+i).focus();
				return false;
		  }
	 
		if(document.getElementById('atext'+i).value.trim()=="")
		{
				alert('कृपया पता लिखे ।') ;
				document.getElementById('atext'+i).focus();
				return false;
		}
	 
		if(isSpclChar(document.getElementById('atext'+i).value.trim(),""))
		{
			alert('कृपया पता सही लिखे ।') ;
			document.getElementById('atext'+i).focus();
			return false;
		}
	  
	   if(document.getElementById('mtext'+i).value !="")
	     {
		   if(isNaN(document.getElementById('mtext'+i).value.trim()))
	       {
              alert('कृपया सही मोबाइल नंबर प्रेक्षित करे'); 
			  document.getElementById('mtext'+i).focus(); 
			  return false;
		   }
		  
		   if (document.getElementById('mtext'+i).value.length!=10)
	       {
                alert('सिर्फ 10 अंको के ही मोबाइल नंबर लिखे'); 
				document.getElementById('mtext'+i).focus();  
				return false;
           }
		 }
	  
		 if(document.getElementById('etext'+i).value!="")
		 {
			 if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById('etext'+i).value)))
			   {
					alert('कृपया सही ईमेल पता लिखें');
					document.getElementById('etext'+i).focus();
					return false;
				}			   
		 }
	 }


/////////////////////////////////
	var opt_3a_ex=$('input:radio[name=opt_3a]:checked').val();	
if(opt_3a_ex == 0)
{
 	var countTab1=document.getElementById("dataTableAp").rows.length;
	 for(i=2;i<=countTab1;i++)
	 {
	    if(document.getElementById('txt_name_ap'+i).value.trim()=="")
	     {
			  alert('कृपया नाम लिखे ।') ;
			  document.getElementById('txt_name_ap'+i).focus();
			  return false;
		 }
	 	 
	 	 if(isSpclChar(document.getElementById('txt_name_ap'+i).value.trim(),"n"))
		  {
				alert('कृपया नाम सही लिखे ।') ;
				document.getElementById('txt_name_ap'+i).focus();
				return false;
		  }
	  
		if(document.getElementById('cbo_rel_ap'+i).value==0)
		{
			alert('कृपया पिता/पति चयन करें।') ;
			document.getElementById('cbo_rel_ap'+i).focus();
			return false;
		}
	 
		if(document.getElementById('ftext_ap'+i).value.trim()=="")
		{
			alert('कृपया पिता नाम लिखे ।') ;
			document.getElementById('ftext_ap'+i).focus();
			return false;
		}
	
		if(isSpclChar(document.getElementById('ftext_ap'+i).value.trim(),"n"))
		  {
				alert('कृपया पिता नाम सही लिखे ।') ;
				document.getElementById('ftext_ap'+i).focus();
				return false;
		  }
	 
		if(document.getElementById('atext_ap'+i).value.trim()=="")
		{
				alert('कृपया पता लिखे ।') ;
				document.getElementById('atext_ap'+i).focus();
				return false;
		}
	 
		if(isSpclChar(document.getElementById('atext_ap'+i).value.trim(),""))
		{
			alert('कृपया पता सही लिखे ।') ;
			document.getElementById('atext_ap'+i).focus();
			return false;
		}
	  
	   if(document.getElementById('mtext_ap'+i).value !="")
	     {
		   if(isNaN(document.getElementById('mtext_ap'+i).value.trim()))
	       {
              alert('कृपया सही मोबाइल नंबर प्रेक्षित करे'); 
			  document.getElementById('mtext_ap'+i).focus(); 
			  return false;
		   }
		  
		   if (document.getElementById('mtext_ap'+i).value.length!=10)
	       {
                alert('सिर्फ 10 अंको के ही मोबाइल नंबर लिखे'); 
				document.getElementById('mtext_ap'+i).focus();  
				return false;
           }
		 }
	  
		 if(document.getElementById('etext_ap'+i).value!="")
		 {
			 if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById('etext_ap'+i).value)))
			   {
					alert('कृपया सही ईमेल पता लिखें');
					document.getElementById('etext_ap'+i).focus();
					return false;
				}			   
		 }
	 }
}
////////////////

		if(document.getElementById('cbo_tehsil').value==0)
		{
			alert('कृपया तहसीलचयन करें।') ;
			document.getElementById('cbo_tehsil').focus();
			return false;
		}

	
		if(document.getElementById('cbo_village').value==0)
		{
			alert('कृपया गाँव का चयन करें।') ;
			document.getElementById('cbo_village').focus();
			return false;
		}
	 
	   
	   if(document.getElementById('khasra').value.trim()=="")
		{
			alert('कृपया खसरा संख्या  लिखें ।') ;
			document.getElementById('khasra').focus();
			return false;
		}
	   
	   
	    if(!khararaVal(document.getElementById('khasra').value))
		{
			alert('कृपया खसरा संख्या सही लिखें ।') ;
			document.getElementById('khasra').focus();
			return false;
		}
	   
	   
	    if(document.getElementById('area').value.trim()=="")
		{
			alert('कृपया क्षेत्रफल लिखें ।') ;
			document.getElementById('area').focus();
			return false;
		}
   
    if(!areaVal(document.getElementById('area').value))
		{
			alert('कृपया क्षेत्रफल सही लिखें ।') ;
			document.getElementById('area').focus();
			return false;
		}
   
   
    if(document.getElementById('col_4').value.trim()=="0")
		{
			alert('कृपया  क्रमांक 4 का चयन करें।') ;
			document.getElementById('col_4').focus();
			return false;
		}
		
	 	
		
		
	if(document.getElementById('col_10').value.trim()=="")
		{
			alert('कृपया  क्रमांक 10 लिखें ।') ;
			document.getElementById('col_10').focus();
			return false;
		}	
   
    if(!kilometer(document.getElementById('col_10').value))
		{
			alert('कृपया  क्रमांक 10 सही  लिखें ।') ;
			document.getElementById('col_10').focus();
			return false;
		}	
   
   if(document.getElementById('col_12').value.trim()=="")
		{
			alert('कृपया  क्रमांक 12 सही लिखें ।') ;
			document.getElementById('col_12').focus();
			return false;
		}	
   
   
     if(!kilometer(document.getElementById('col_12').value.trim()))
		{
			alert('कृपया  क्रमांक 12 सही  लिखें ।') ;
			document.getElementById('col_12').focus();
			return false;
		}	
   
   
   
   	if(document.getElementById('col_15').value.trim()=="")
		{
			alert('कृपया  क्रमांक 15 सही लिखें ।') ;
			document.getElementById('col_15').focus();
			return false;
		}	
   
     
	  if(document.getElementById('txt_pwd').value.trim()=="")
	   {
			 alert('कृपया अपना पासवर्ड लिखे ।') ;
			 document.getElementById('txt_pwd').value="";
			 document.getElementById('txt_pwd').focus();
			 return false;
	   }	
	   
 
  if(document.getElementById('txt_rpwd').value.trim()=="")
	  {
			 alert('कृपया अपना पासवर्ड दुबारा लिखे ।') ;
			 document.getElementById('txt_rpwd').value="";
			 document.getElementById('txt_rpwd').focus();
			 return false;
	  }				   	      
	   	

 if(document.getElementById('txt_pwd').value.trim()!=document.getElementById('txt_rpwd').value.trim())
	  {
			 alert('कृपया Password and Re-Password सही करे ') ;
			  document.getElementById('txt_pwd').value="";
			  document.getElementById('txt_rpwd').value="";
			 document.getElementById('pwd').focus();
			 return false;
	  }
	 
	 
	 
	 
	 
 			   	      
	if(document.getElementById('captcha-form').value=="")
  {
   alert("कृपया वेरीफिकेशन कोड डालें।");
   return false;
  }   
 
 
 var conf = confirm("सही हैं ??")
			
if(conf)  	
   {	
 
		var get = document.getElementById("dataTable").rows.length;
		var name= new Array();
		var  type= new Array();
		var  fname= new Array();
		var  addr= new Array();
		var  mno= new Array();
		var  eid= new Array();
		
		for(i=0,k=2;i<get-1;i++,k++)
		{
		 
		 name[i]=document.getElementById('txt_name'+k).value;
		 type[i]=document.getElementById('cbo_rel'+k).value;
		 fname[i]=document.getElementById('ftext'+k).value;
		 addr[i]=document.getElementById('atext'+k).value;
		if(document.getElementById('mtext'+k).value=="")
		  mno[i]="-";
		else
		  mno[i]=document.getElementById('mtext'+k).value;
		 
		if(document.getElementById('etext'+k).value=="")
			eid[i]="-";
		else 
		 eid[i]=document.getElementById('etext'+k).value;
		
		}
	
		
		var get_ap = document.getElementById("dataTableAp").rows.length;
		var name_ap = new Array();
		var type_ap = new Array();
		var fname_ap = new Array();
		var addr_ap = new Array();
		var mno_ap = new Array();
		var eid_ap = new Array();

	
		for(i=0,k=2;i<get_ap-1;i++,k++)
		{
		 
			 name_ap[i]=document.getElementById('txt_name_ap'+k).value;
			 type_ap[i]=document.getElementById('cbo_rel_ap'+k).value;
			 fname_ap[i]=document.getElementById('ftext_ap'+k).value;
			 addr_ap[i]=document.getElementById('atext_ap'+k).value;
			if(document.getElementById('mtext_ap'+k).value=="")
			  mno_ap[i]="-";
			else
			  mno_ap[i]=document.getElementById('mtext_ap'+k).value;
			 
			if(document.getElementById('etext_ap'+k).value=="")
				eid_ap[i]="-";
			else 
			 eid_ap[i]=document.getElementById('etext_ap'+k).value;
		
		}
		
		
		var tehsil=document.getElementById('cbo_tehsil').value.trim();
		var vill=document.getElementById('cbo_village').value.trim();
		var khasra=document.getElementById('khasra').value.trim();
		var area=document.getElementById('area').value.trim();
		var opt_3a=$('input:radio[name=opt_3a]:checked').val();	
		var opt_3b=$('input:radio[name=opt_3b]:checked').val();	
		var opt_3c=$('input:radio[name=opt_3c]:checked').val();	
		var opt_3d=$('input:radio[name=opt_3d]:checked').val();	
		var opt_3e=$('input:radio[name=opt_3e]:checked').val();	
		var opt_3f=$('input:radio[name=opt_3f]:checked').val();	
		var opt_3g=$('input:radio[name=opt_3g]:checked').val();	
		var opt_3h=$('input:radio[name=opt_3h]:checked').val();	
		var opt_3i=$('input:radio[name=opt_3i]:checked').val();	
		var opt_3j=$('input:radio[name=opt_3j]:checked').val();	
		var opt_3k=$('input:radio[name=opt_3k]:checked').val();	
		var opt_3l=$('input:radio[name=opt_3l]:checked').val();	
		var opt_3m=$('input:radio[name=opt_3m]:checked').val();
		var opt_3n=$('input:radio[name=opt_3n]:checked').val();
		var opt_3o=$('input:radio[name=opt_3o]:checked').val();
		var opt_3p=$('input:radio[name=opt_3p]:checked').val();
		
		if(document.getElementById('col_4').value.trim()!="O")
		var col_4=document.getElementById('col_4').value.trim();
		else 
		 {
		var   col_4 =document.getElementById('col_41').value.trim();
		 }
		var  opt_5=$('input:radio[name=opt_5]:checked').val();
		var  opt_6=$('input:radio[name=opt_6]:checked').val();
		var opt_7=$('input:radio[name=opt_7]:checked').val();
		var opt_8=$('input:radio[name=opt_8]:checked').val();
		var  opt_9=$('input:radio[name=opt_9]:checked').val();
		var  col_10=document.getElementById('col_10').value.trim();
		var  opt_11a=$('input:radio[name=opt_11a]:checked').val();
		var  opt_11b=$('input:radio[name=opt_11b]:checked').val();
		var  col_12=document.getElementById('col_12').value.trim();
		var  opt_13=$('input:radio[name=opt_13]:checked').val();
		var col_14=document.getElementById('col_14').value.trim();
		var col_15=document.getElementById('col_15').value.trim();
		var col_16=document.getElementById('col_16').value.trim();
		var  col_17=document.getElementById('col_17').value.trim();
		var captcha=document.getElementById('captcha-form').value.trim();
		var pwd=document.getElementById('txt_pwd').value.trim();
		var cdate=$('input:radio[name=cdate]:checked').val();	
		
		
		
		
		
		
		$.ajax({
			type: "POST",
			url: "ajax_data.php",   
			async: true,
		//	data:"name[]="+name+"&t="+fname+"&mname="+mname+"&dob="+dob+"&mob="+mob+"&addrs="+addrs+"&dist="+dist+"&tehsil="+tehsil+"&vill="+vill+"&pin="+pin+"&email="+email+"&password="+password+"&captcha="+captcha+"&distname="+distname+"&tahsilname="+tahsilname,
		data:"name[]="+name+"&type[]="+type+"&captcha="+captcha+"&fname[]="+fname+"&addr[]="+addr+"&mno[]="+mno+"&eid[]="+eid+"&name_ap[]="+name_ap+"&type_ap[]="+type_ap+"&fname_ap[]="+fname_ap+"&addr_ap[]="+addr_ap+"&mno_ap[]="+mno_ap+"&eid_ap[]="+eid_ap+"&tehsil="+tehsil+"&vill="+vill+"&khasra="+khasra+"&area="+area+"&opt_3a="+opt_3a+"&opt_3b="+opt_3b+"&opt_3c="+opt_3c+"&opt_3d="+opt_3d+"&opt_3e="+opt_3e+"&opt_3f="+opt_3f+"&opt_3g="+opt_3g+"&opt_3h="+opt_3h+"&opt_3i="+opt_3i+"&opt_3j="+opt_3j+"&opt_3k="+opt_3k+"&opt_3l="+opt_3l+"&opt_3m="+opt_3m+"&opt_3n="+opt_3n+"&opt_3o="+opt_3o+"&opt_3p="+opt_3p+"&col_4="+col_4+"&opt_5="+opt_5+"&opt_6="+opt_6+"&opt_7="+opt_7+"&opt_8="+opt_8+"&opt_9="+opt_9+"&col_10="+col_10+"&opt_11a="+opt_11a+"&opt_11b="+opt_11b+"&col_12="+col_12+"&opt_13="+opt_13+"&col_14="+col_14+"&col_15="+col_15+"&col_16="+col_16+"&col_17="+col_17+"&pwd="+pwd+"&cdate="+cdate,
		success: function(result){  
				
				//alert(result.indexOf('/Error/'));
				if(result.trim()!="0")
				 {
					 document.getElementById('main').innerHTML="<h2 align='center'>Thanks for submitting !!! <br> Your Registration No. "+result.trim()+" <br> Please Note Down This Registration No. for Future Use  <br /> <form action='print_format-1.php' method='post'  target='_blank'> <input type='hidden' value='"+result.trim()+"' id='aid' name='aid' /> <input type='submit' Value='Print' class='button'></form></h2><br> <center> <a href='index.php'>Click here to go home page !!!! </a> </center>";
					 //document.getElementById('p').style.display="";
					 //document.getElementById('aid').value=result.trim();
					 //document.forms['fprint'].submit();
					  //$('#fprint').submit();
				   
				 }	
				 else
				 {
					alert("कृपया सही वेरीफिकेशन कोड डालें।");
					document.getElementById('captcha').src='captcha.php?'+Math.random();
				 } 
			}
			});  
		
   }
}





function chg_dist(val)
{
	if(val > 0)
	{
		document.getElementById('tehsil').disabled = "";
	}else
	{
		document.getElementById('tehsil').disabled = "disabled";
	}
}


    function addRow(tableID) 
			 {             
				var table = document.getElementById(tableID);    
				var rowCount = table.rows.length;           
				var row = table.insertRow(rowCount);   
						
				var cell2 = row.insertCell(0);
				var element2 = document.createElement("input"); 
				element2.type = "text";
				element2.id ="txt_name"+ (rowCount+1) ;
				element2.name ="txt_name"+ (rowCount+1) ;	
				//element2.onpaste = 'onpaste="return false" ondrop="return false" ondrag="return false" oncopy="return false"';
				element2.onpaste = 'return false';
				element2.maxLength=100;
				cell2.appendChild(element2);  
				
				
				var cell7 = row.insertCell(1);
				var element7 = document.createElement("select"); 
				//element6.maxLength=1;
				element7.id ="cbo_rel"+ (rowCount+1) ;
				element7.name ="cbo_rel"+ (rowCount+1) ;
				element7.options[0]=new Option("चयन करें", "0")
				element7.options[1]=new Option("पिता", "पिता")
				element7.options[2]=new Option("माता", "माता")
				element7.options[3]=new Option("पति", "पति")
				//  element6.oncopy="return false";
				cell7.appendChild(element7);	  		
				
				var cell4 = row.insertCell(2);
				var element4 = document.createElement("input"); 
  			    element4.type = "text";
				element4.id ="ftext"+ (rowCount+1) ;
				element4.name ="ftext"+ (rowCount+1) ;				
				element4.maxLength=100;
				cell4.appendChild(element4);  		 
				  
				
				
				var cell6 = row.insertCell(3);
				var element6 = document.createElement("textarea"); 
				element6.maxLength=200;
				element6.id ="atext"+ (rowCount+1) ;
				element6.name ="atext"+ (rowCount+1) ;				
				cell6.appendChild(element6);	 
				

				var cell8 = row.insertCell(4);
				var element8 = document.createElement("input"); 
				element8.type = "text";
				element8.id ="mtext"+ (rowCount+1) ;
				element8.name ="mtext"+ (rowCount+1) ;				
				element8.maxLength=10;				
				cell8.appendChild(element8);	 


				var cell9 = row.insertCell(5);
				var element9 = document.createElement("input"); 
				element9.type = "text";
				element9.id ="etext"+ (rowCount+1) ;
				element9.name ="emtext"+ (rowCount+1) ;				
				element9.maxLength=50;				
				cell9.appendChild(element9);	 
			}        
																						
	function deleteRow(tableID)
	{
		try {    
			var table = document.getElementById("dataTable");   
			var rowCount = table.rows.length;  
		
		if(rowCount>2) 
		{
					table.deleteRow(table.rows.length-1); 
		}
		}catch(e)
		{
			alert(e);
		} 
	}
	
	

    function addRow_ap(tableID) 
			 {             
				var table = document.getElementById(tableID);    
				var rowCount = table.rows.length;           
				var row = table.insertRow(rowCount);   
						
				var cell2 = row.insertCell(0);
				var element2 = document.createElement("input"); 
				element2.type = "text";
				element2.id ="txt_name_ap"+ (rowCount+1) ;
				element2.name ="txt_name_ap"+ (rowCount+1) ;	
				//element2.onpaste = 'onpaste="return false" ondrop="return false" ondrag="return false" oncopy="return false"';
				element2.onpaste = 'return false';
				element2.maxLength=100;
				cell2.appendChild(element2);  
				
				
				var cell7 = row.insertCell(1);
				var element7 = document.createElement("select"); 
				//element6.maxLength=1;
				element7.id ="cbo_rel_ap"+ (rowCount+1) ;
				element7.name ="cbo_rel_ap"+ (rowCount+1) ;
				element7.options[0]=new Option("चयन करें", "0")
				element7.options[1]=new Option("पिता", "पिता")
				element7.options[2]=new Option("माता", "माता")				
				element7.options[3]=new Option("पति", "पति")
				//  element6.oncopy="return false";
				cell7.appendChild(element7);	  		
				
				var cell4 = row.insertCell(2);
				var element4 = document.createElement("input"); 
  			    element4.type = "text";
				element4.id ="ftext_ap"+ (rowCount+1) ;
				element4.name ="ftext_ap"+ (rowCount+1) ;				
				element4.maxLength=100;
				cell4.appendChild(element4);  		 
				  
				
				
				var cell6 = row.insertCell(3);
				var element6 = document.createElement("textarea"); 
				element6.maxLength=200;
				element6.id ="atext_ap"+ (rowCount+1) ;
				element6.name ="atext_ap"+ (rowCount+1) ;				
				cell6.appendChild(element6);	 
				

				var cell8 = row.insertCell(4);
				var element8 = document.createElement("input"); 
				element8.type = "text";
				element8.id ="mtext_ap"+ (rowCount+1) ;
				element8.name ="mtext_ap"+ (rowCount+1) ;				
				element8.maxLength=10;				
				cell8.appendChild(element8);	 


				var cell9 = row.insertCell(5);
				var element9 = document.createElement("input"); 
				element9.type = "text";
				element9.id ="etext_ap"+ (rowCount+1) ;
				element9.name ="emtext_ap"+ (rowCount+1) ;				
				element9.maxLength=50;				
				cell9.appendChild(element9);	 
			}        
																						
	function deleteRow_ap(tableID)
	{
		try {    
			var table = document.getElementById("dataTableAp");   
			var rowCount = table.rows.length;  
		
		if(rowCount>2) 
		{
					table.deleteRow(table.rows.length-1); 
		}
		}catch(e)
		{
			alert(e);
		} 
	}
		
	
	
  function set_village(vname)
   {
	 
	   	$.ajax({
		type: "POST",
		url: "set_village.php",   
		async: true,
		data:"vname="+vname,
		success: function(result)
		{  
			
		 document.getElementById('div_village').innerHTML="<select id='cbo_village' name='cbo_village'>"+result+"</select>";
		
		}
		}); 
	   
	   
   }
	
	 String.prototype.trim = function() {
	 return this.replace(/^\s+|\s+$/g,"");
	}
	
	
	
////////////////////////////////////////////////////////////////////////////////
	function admin_report(val,df,dt,sel,temp)
	{
		$.ajax({
		type: "POST",
		url: "report_ajax.php",   
		async: true,
		data:"page="+val+"&datefrom="+df+"&dateto="+dt+"&sel_opt="+sel+"&zone="+temp,
		success: function(result)
		{  
			
		 document.getElementById('div_report').innerHTML=result;
		
		}
		}); 
	}
////////////////////////////////////////////////////////////////////////////////

function welcome_report()
	{
		$.ajax({
		type: "POST",
		url: "report_welcome.php",   
		async: true,
		data:"",
		success: function(result)
		{  
			
		 document.getElementById('div_report').innerHTML=result;
		
		}
		}); 
	}
////////////////////////////////////////////////////////////////////////////////////

function show_detail(val,val1)
{
  document.getElementById('opt_rpt').value = val;
  document.getElementById('zone').value = val1;
  document.forms['rwin'].submit();
}