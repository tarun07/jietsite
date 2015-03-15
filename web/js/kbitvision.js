
	
////////////////////////////////////////////////////////////////////////////////

	function set_pra(val, val1)
	{
		document.getElementById('cid').value = val;
		document.getElementById('etc').value = val1;
		document.forms["frm_rpt"].submit();
	}

	function rsrtc_report(val,sfn,sfv)
	{
		//alert(val);
		//alert(sfn);
		//alert(sfv);
		$.ajax({
		type: "POST",
		url: "rsrtc_ajax.php",   
		async: true,
		data:"page="+val+"&sfn="+sfn+"&sfv="+sfv,
		success: function(result)
		{  
			//alert(result);
		 document.getElementById('div_report').innerHTML=result;
		
		}
		}); 
	}
		
	function rsrtc_submit()
	{
		if(document.getElementById("txt_search").value.trim() =="")
		{
				alert('Enter Search Value');
				document.getElementById("txt_search").focus();
				return false;
		}
		var sfn = document.getElementById("sel_opt").value;
		var sfv = document.getElementById("txt_search").value;
		//alert(sfn);
		//alert(sfv);
		rsrtc_report(1,""+sfn+"",""+sfv+"");
	}


function fci_report(val,sfn,sfv)
	{
		//alert(val);
		//alert(sfn);
		//alert(sfv);
		$.ajax({
		type: "POST",
		url: "fci_ajax.php",   
		async: true,
		data:"page="+val+"&sfn="+sfn+"&sfv="+sfv,
		success: function(result)
		{  
			//alert(result);
		 document.getElementById('div_report').innerHTML=result;
		
		}
		}); 
	}
		
	function fci_submit()
	{
		if(document.getElementById("txt_search").value.trim() =="")
		{
				alert('Enter Search Value');
				document.getElementById("txt_search").focus();
				return false;
		}
		var sfn = document.getElementById("sel_opt").value;
		var sfv = document.getElementById("txt_search").value;
		//alert(sfn);
		//alert(sfv);
		fci_report(1,""+sfn+"",""+sfv+"");
	}


function epfo_report(val,sfn,sfv)
	{
		//alert(val);
		//alert(sfn);
		//alert(sfv);
		$.ajax({
		type: "POST",
		url: "epfo_ajax.php",   
		async: true,
		data:"page="+val+"&sfn="+sfn+"&sfv="+sfv,
		success: function(result)
		{  
			//alert(result);
		 document.getElementById('div_report').innerHTML=result;
		
		}
		}); 
	}
		
	function epfo_submit()
	{
		if(document.getElementById("txt_search").value.trim() =="")
		{
				alert('Enter Search Value');
				document.getElementById("txt_search").focus();
				return false;
		}
		var sfn = document.getElementById("sel_opt").value;
		var sfv = document.getElementById("txt_search").value;
		//alert(sfn);
		//alert(sfv);
		epfo_report(1,""+sfn+"",""+sfv+"");
	}


function bsnl_report(val,sfn,sfv)
	{
		//alert(val);
		//alert(sfn);
		//alert(sfv);
		$.ajax({
		type: "POST",
		url: "bsnl_ajax.php",   
		async: true,
		data:"page="+val+"&sfn="+sfn+"&sfv="+sfv,
		success: function(result)
		{  
			//alert(result);
		 document.getElementById('div_report').innerHTML=result;
		
		}
		}); 
	}
		
	function bsnl_submit()
	{
		if(document.getElementById("txt_search").value.trim() =="")
		{
				alert('Enter Search Value');
				document.getElementById("txt_search").focus();
				return false;
		}
		var sfn = document.getElementById("sel_opt").value;
		var sfv = document.getElementById("txt_search").value;
		//alert(sfn);
		//alert(sfv);
		bsnl_report(1,""+sfn+"",""+sfv+"");
	}


function skdgcc_report(val,sfn,sfv)
	{
		//alert(val);
		//alert(sfn);
		//alert(sfv);
		$.ajax({
		type: "POST",
		url: "skdgcc_ajax.php",   
		async: true,
		data:"page="+val+"&sfn="+sfn+"&sfv="+sfv,
		success: function(result)
		{  
			//alert(result);
		 document.getElementById('div_report').innerHTML=result;
		
		}
		}); 
	}
		
	function skdgcc_submit()
	{
		if(document.getElementById("txt_search").value.trim() =="")
		{
				alert('Enter Search Value');
				document.getElementById("txt_search").focus();
				return false;
		}
		var sfn = document.getElementById("sel_opt").value;
		var sfv = document.getElementById("txt_search").value;
		//alert(sfn);
		//alert(sfv);
		skdgcc_report(1,""+sfn+"",""+sfv+"");
	}










function it_report(val,sfn,sfv)
	{
		//alert(val);
		//alert(sfn);
		//alert(sfv);
		$.ajax({
		type: "POST",
		url: "it_ajax.php",   
		async: true,
		data:"page="+val+"&sfn="+sfn+"&sfv="+sfv,
		success: function(result)
		{  
			//alert(result);
		 document.getElementById('div_report').innerHTML=result;
		
		}
		}); 
	}
		
	function it_submit()
	{
		if(document.getElementById("txt_search").value.trim() =="")
		{
				alert('Enter Search Value');
				document.getElementById("txt_search").focus();
				return false;
		}
		var sfn = document.getElementById("sel_opt").value;
		var sfv = document.getElementById("txt_search").value;
		//alert(sfn);
		//alert(sfv);
		it_report(1,""+sfn+"",""+sfv+"");
	}




	function admin_report(val,sfn,sfv)
	{
		//alert(val);
		//alert(sfn);
		//alert(sfv);
		$.ajax({
		type: "POST",
		url: "report_ajax.php",   
		async: true,
		data:"page="+val+"&sfn="+sfn+"&sfv="+sfv,
		success: function(result)
		{  
			//alert(result);
		 document.getElementById('div_report').innerHTML=result;
		
		}
		}); 
	}
	
	
	function valid_submit()
	{
		if(document.getElementById("txt_search").value.trim() =="")
		{
				alert('Enter Search Value');
				document.getElementById("txt_search").focus();
				return false;
		}
		var sfn = document.getElementById("sel_opt").value;
		var sfv = document.getElementById("txt_search").value;
		//alert(sfn);
		//alert(sfv);
		 admin_report(1,""+sfn+"",""+sfv+"");
	}
	
	
	function sansthan_report(val,sfn,sfv)
	{
		//alert(val);
		//alert(sfn);
		//alert(sfv);
		$.ajax({
		type: "POST",
		url: "sansthan_ajax.php",   
		async: true,
		data:"page="+val+"&sfn="+sfn+"&sfv="+sfv,
		success: function(result)
		{  
			//alert(result);
		 document.getElementById('div_report').innerHTML=result;
		
		}
		}); 
	}
	
	function sansthan_submit()
	{
		if(document.getElementById("txt_search").value.trim() =="")
		{
				alert('Enter Search Value');
				document.getElementById("txt_search").focus();
				return false;
		}
		var sfn = document.getElementById("sel_opt").value;
		var sfv = document.getElementById("txt_search").value;
		//alert(sfn);
		//alert(sfv);
		 sansthan_report(1,""+sfn+"",""+sfv+"");
	}
	
	function ias_report(val,sfn,sfv)
	{
		//alert(val);
		//alert(sfn);
		//alert(sfv);
		$.ajax({
		type: "POST",
		url: "ias_ajax.php",   
		async: true,
		data:"page="+val+"&sfn="+sfn+"&sfv="+sfv,
		success: function(result)
		{  
			//alert(result);
		 document.getElementById('div_report').innerHTML=result;
		
		}
		}); 
	}
	
	function ias_submit()
	{
		if(document.getElementById("txt_search").value.trim() =="")
		{
				alert('Enter Search Value');
				document.getElementById("txt_search").focus();
				return false;
		}
		var sfn = document.getElementById("sel_opt").value;
		var sfv = document.getElementById("txt_search").value;
		//alert(sfn);
		//alert(sfv);
		 ias_report(1,""+sfn+"",""+sfv+"");
	}
	
	function doctor_report(val,sfn,sfv)
	{
		//alert(val);
		//alert(sfn);
		//alert(sfv);
		$.ajax({
		type: "POST",
		url: "doctor_ajax.php",   
		async: true,
		data:"page="+val+"&sfn="+sfn+"&sfv="+sfv,
		success: function(result)
		{  
			//alert(result);
		 document.getElementById('div_report').innerHTML=result;
		
		}
		}); 
	}
	
	function doctor_submit()
	{
		if(document.getElementById("txt_search").value.trim() =="")
		{
				alert('Enter Search Value');
				document.getElementById("txt_search").focus();
				return false;
		}
		var sfn = document.getElementById("sel_opt").value;
		var sfv = document.getElementById("txt_search").value;
		//alert(sfn);
		//alert(sfv);
		 doctor_report(1,""+sfn+"",""+sfv+"");
	}
	
	function advocate_report(val,sfn,sfv)
	{
		//alert(val);
		//alert(sfn);
		//alert(sfv);
		$.ajax({
		type: "POST",
		url: "advocate_ajax.php",   
		async: true,
		data:"page="+val+"&sfn="+sfn+"&sfv="+sfv,
		success: function(result)
		{  
			//alert(result);
		 document.getElementById('div_report').innerHTML=result;
		
		}
		}); 
	}
	
	function advocate_submit()
	{
		if(document.getElementById("txt_search").value.trim() =="")
		{
				alert('Enter Search Value');
				document.getElementById("txt_search").focus();
				return false;
		}
		var sfn = document.getElementById("sel_opt").value;
		var sfv = document.getElementById("txt_search").value;
		//alert(sfn);
		//alert(sfv);
		 advocate_report(1,""+sfn+"",""+sfv+"");
	}
	
	function professor_report(val,sfn,sfv)
	{
		//alert(val);
		//alert(sfn);
		//alert(sfv);
		$.ajax({
		type: "POST",
		url: "professor_ajax.php",   
		async: true,
		data:"page="+val+"&sfn="+sfn+"&sfv="+sfv,
		success: function(result)
		{  
			//alert(result);
		 document.getElementById('div_report').innerHTML=result;
		
		}
		}); 
	}
	
	function professor_submit()
	{
		if(document.getElementById("txt_search").value.trim() =="")
		{
				alert('Enter Search Value');
				document.getElementById("txt_search").focus();
				return false;
		}
		var sfn = document.getElementById("sel_opt").value;
		var sfv = document.getElementById("txt_search").value;
		//alert(sfn);
		//alert(sfv);
		 professor_report(1,""+sfn+"",""+sfv+"");
	}
	
	function abiyanta_report(val,sfn,sfv)
	{
		//alert(val);
		//alert(sfn);
		//alert(sfv);
		$.ajax({
		type: "POST",
		url: "abiyanta_ajax.php",   
		async: true,
		data:"page="+val+"&sfn="+sfn+"&sfv="+sfv,
		success: function(result)
		{  
			//alert(result);
		 document.getElementById('div_report').innerHTML=result;
		
		}
		}); 
	}
	
	function abiyanta_submit()
	{
		if(document.getElementById("txt_search").value.trim() =="")
		{
				alert('Enter Search Value');
				document.getElementById("txt_search").focus();
				return false;
		}
		var sfn = document.getElementById("sel_opt").value;
		var sfv = document.getElementById("txt_search").value;
		//alert(sfn);
		//alert(sfv);
		 abiyanta_report(1,""+sfn+"",""+sfv+"");
	}
	
	function worker_report(val,sfn,sfv)
	{
		//alert(val);
		//alert(sfn);
		//alert(sfv);
		$.ajax({
		type: "POST",
		url: "worker_ajax.php",   
		async: true,
		data:"page="+val+"&sfn="+sfn+"&sfv="+sfv,
		success: function(result)
		{  
			//alert(result);
		 document.getElementById('div_report').innerHTML=result;
		
		}
		}); 
	}
	
	function worker_submit()
	{
		if(document.getElementById("txt_search").value.trim() =="")
		{
				alert('Enter Search Value');
				document.getElementById("txt_search").focus();
				return false;
		}
		var sfn = document.getElementById("sel_opt").value;
		var sfv = document.getElementById("txt_search").value;
		//alert(sfn);
		//alert(sfv);
		 worker_report(1,""+sfn+"",""+sfv+"");
	}
	
	function life_time_member_report(val,sfn,sfv)
	{
		//alert(val);
		//alert(sfn);
		//alert(sfv);
		$.ajax({
		type: "POST",
		url: "life_time_member_ajax.php",   
		async: true,
		data:"page="+val+"&sfn="+sfn+"&sfv="+sfv,
		success: function(result)
		{  
			//alert(result);
		 document.getElementById('div_report').innerHTML=result;
		
		}
		}); 
	}
	
	function life_time_member_submit()
	{
		if(document.getElementById("txt_search").value.trim() =="")
		{
				alert('Enter Search Value');
				document.getElementById("txt_search").focus();
				return false;
		}
		var sfn = document.getElementById("sel_opt").value;
		var sfv = document.getElementById("txt_search").value;
		//alert(sfn);
		//alert(sfv);
		 life_time_member_report(1,""+sfn+"",""+sfv+"");
	}
	
	function carykarini_report(val,sfn,sfv)
	{
		//alert(val);
		//alert(sfn);
		//alert(sfv);
		$.ajax({
		type: "POST",
		url: "carykarini_ajax.php",   
		async: true,
		data:"page="+val+"&sfn="+sfn+"&sfv="+sfv,
		success: function(result)
		{  
			//alert(result);
		 document.getElementById('div_report').innerHTML=result;
		
		}
		}); 
	}
	
	function carykarini_submit()
	{
		if(document.getElementById("txt_search").value.trim() =="")
		{
				alert('Enter Search Value');
				document.getElementById("txt_search").focus();
				return false;
		}
		var sfn = document.getElementById("sel_opt").value;
		var sfv = document.getElementById("txt_search").value;
		//alert(sfn);
		//alert(sfv);
		 carykarini_report(1,""+sfn+"",""+sfv+"");
	}
	
	function dharmshala_report(val,sfn,sfv)
	{
		//alert(val);
		//alert(sfn);
		//alert(sfv);
		$.ajax({
		type: "POST",
		url: "dharmshala_ajax.php",   
		async: true,
		data:"page="+val+"&sfn="+sfn+"&sfv="+sfv,
		success: function(result)
		{  
			//alert(result);
		 document.getElementById('div_report').innerHTML=result;
		
		}
		}); 
	}
	
	function dharmshala_submit()
	{
		if(document.getElementById("txt_search").value.trim() =="")
		{
				alert('Enter Search Value');
				document.getElementById("txt_search").focus();
				return false;
		}
		var sfn = document.getElementById("sel_opt").value;
		var sfv = document.getElementById("txt_search").value;
		//alert(sfn);
		//alert(sfv);
		 dharmshala_report(1,""+sfn+"",""+sfv+"");
	}
	
	function politician_report(val,sfn,sfv)
	{
		//alert(val);
		//alert(sfn);
		//alert(sfv);
		$.ajax({
		type: "POST",
		url: "politician_ajax.php",   
		async: true,
		data:"page="+val+"&sfn="+sfn+"&sfv="+sfv,
		success: function(result)
		{  
			//alert(result);
		 document.getElementById('div_report').innerHTML=result;
		
		}
		}); 
	}
		
	function politician_submit()
	{
		if(document.getElementById("txt_search").value.trim() =="")
		{
				alert('Enter Search Value');
				document.getElementById("txt_search").focus();
				return false;
		}
		var sfn = document.getElementById("sel_opt").value;
		var sfv = document.getElementById("txt_search").value;
		//alert(sfn);
		//alert(sfv);
		politician_report(1,""+sfn+"",""+sfv+"");
	}
	
	function student_report(val,sfn,sfv)
	{
		//alert(val);
		//alert(sfn);
		//alert(sfv);
		$.ajax({
		type: "POST",
		url: "student_ajax.php",   
		async: true,
		data:"page="+val+"&sfn="+sfn+"&sfv="+sfv,
		success: function(result)
		{  
			//alert(result);
		 document.getElementById('div_report').innerHTML=result;
		
		}
		}); 
	}
	
	function student_submit()
	{
		if(document.getElementById("txt_search").value.trim() =="")
		{
				alert('Enter Search Value');
				document.getElementById("txt_search").focus();
				return false;
		}
		var sfn = document.getElementById("sel_opt").value;
		var sfv = document.getElementById("txt_search").value;
		//alert(sfn);
		//alert(sfv);
		student_report(1,""+sfn+"",""+sfv+"");
	}
	
	
	
function insurance_report(val,sfn,sfv)
	{
		//alert(val);
		//alert(sfn);
		//alert(sfv);
		$.ajax({
		type: "POST",
		url: "insurance_ajax.php",   
		async: true,
		data:"page="+val+"&sfn="+sfn+"&sfv="+sfv,
		success: function(result)
		{  
			//alert(result);
		 document.getElementById('div_report').innerHTML=result;
		
		}
		}); 
	}
	
	function insurance_submit()
	{
		if(document.getElementById("txt_search").value.trim() =="")
		{
				alert('Enter Search Value');
				document.getElementById("txt_search").focus();
				return false;
		}
		var sfn = document.getElementById("sel_opt").value;
		var sfv = document.getElementById("txt_search").value;
		//alert(sfn);
		//alert(sfv);
		insurance_report(1,""+sfn+"",""+sfv+"");
	}

	
	function teacher_report(val,sfn,sfv)
	{
		//alert(val);
		//alert(sfn);
		//alert(sfv);
		$.ajax({
		type: "POST",
		url: "teacher_ajax.php",   
		async: true,
		data:"page="+val+"&sfn="+sfn+"&sfv="+sfv,
		success: function(result)
		{  
			//alert(result);
		 document.getElementById('div_report').innerHTML=result;
		
		}
		}); 
	}
	
	function teacher_submit()
	{
		if(document.getElementById("txt_search").value.trim() =="")
		{
				alert('Enter Search Value');
				document.getElementById("txt_search").focus();
				return false;
		}
		var sfn = document.getElementById("sel_opt").value;
		var sfv = document.getElementById("txt_search").value;
		//alert(sfn);
		//alert(sfv);
		teacher_report(1,""+sfn+"",""+sfv+"");
	}
	
	
	
	
	
	
	function police_report(val,sfn,sfv)
	{
		//alert(val);
		//alert(sfn);
		//alert(sfv);
		$.ajax({
		type: "POST",
		url: "police_ajax.php",   
		async: true,
		data:"page="+val+"&sfn="+sfn+"&sfv="+sfv,
		success: function(result)
		{  
			//alert(result);
		 document.getElementById('div_report').innerHTML=result;
		
		}
		}); 
	}
	
	function police_submit()
	{
		if(document.getElementById("txt_search").value.trim() =="")
		{
				alert('Enter Search Value');
				document.getElementById("txt_search").focus();
				return false;
		}
		var sfn = document.getElementById("sel_opt").value;
		var sfv = document.getElementById("txt_search").value;
		//alert(sfn);
		//alert(sfv);
		police_report(1,""+sfn+"",""+sfv+"");
	}
	
	
	function jaipur_sachiwaly_report(val,sfn,sfv)
	{
		//alert(val);
		//alert(sfn);
		//alert(sfv);
		$.ajax({
		type: "POST",
		url: "jaipur_sachiwaly_ajax.php",   
		async: true,
		data:"page="+val+"&sfn="+sfn+"&sfv="+sfv,
		success: function(result)
		{  
			//alert(result);
		 document.getElementById('div_report').innerHTML=result;
		
		}
		}); 
	}
	
	function jaipur_sachiwaly_submit()
	{
		if(document.getElementById("txt_search").value.trim() =="")
		{
				alert('Enter Search Value');
				document.getElementById("txt_search").focus();
				return false;
		}
		var sfn = document.getElementById("sel_opt").value;
		var sfv = document.getElementById("txt_search").value;
		//alert(sfn);
		//alert(sfv);
		jaipur_sachiwaly_report(1,""+sfn+"",""+sfv+"");
	}
	
	
	function jaipur_all_report(val,sfn,sfv)
	{
		//alert(val);
		//alert(sfn);
		//alert(sfv);
		$.ajax({
		type: "POST",
		url: "jaipur_all_ajax.php",   
		async: true,
		data:"page="+val+"&sfn="+sfn+"&sfv="+sfv,
		success: function(result)
		{  
			//alert(result);
		 document.getElementById('div_report').innerHTML=result;
		
		}
		}); 
	}
	
	function jaipur_all_submit()
	{
		if(document.getElementById("txt_search").value.trim() =="")
		{
				alert('Enter Search Value');
				document.getElementById("txt_search").focus();
				return false;
		}
		var sfn = document.getElementById("sel_opt").value;
		var sfv = document.getElementById("txt_search").value;
		//alert(sfn);
		//alert(sfv);
		jaipur_all_report(1,""+sfn+"",""+sfv+"");
	}
	
	function junjunu_all_report(val,sfn,sfv)
	{
		//alert(val);
		//alert(sfn);
		//alert(sfv);
		$.ajax({
		type: "POST",
		url: "junjunu_all_ajax.php",   
		async: true,
		data:"page="+val+"&sfn="+sfn+"&sfv="+sfv,
		success: function(result)
		{  
			//alert(result);
		 document.getElementById('div_report').innerHTML=result;
		
		}
		}); 
	}
	
	function junjunu_all_submit()
	{
		if(document.getElementById("txt_search").value.trim() =="")
		{
				alert('Enter Search Value');
				document.getElementById("txt_search").focus();
				return false;
		}
		var sfn = document.getElementById("sel_opt").value;
		var sfv = document.getElementById("txt_search").value;
		//alert(sfn);
		//alert(sfv);
		junjunu_all_report(1,""+sfn+"",""+sfv+"");
	}
	
	function vip_report(val,sfn,sfv)
	{
		//alert(val);
		//alert(sfn);
		//alert(sfv);
		$.ajax({
		type: "POST",
		url: "vip_ajax.php",   
		async: true,
		data:"page="+val+"&sfn="+sfn+"&sfv="+sfv,
		success: function(result)
		{  
			//alert(result);
		 document.getElementById('div_report').innerHTML=result;
		
		}
		}); 
	}
	
	function vip_submit()
	{
		if(document.getElementById("txt_search").value.trim() =="")
		{
				alert('Enter Search Value');
				document.getElementById("txt_search").focus();
				return false;
		}
		var sfn = document.getElementById("sel_opt").value;
		var sfv = document.getElementById("txt_search").value;
		//alert(sfn);
		//alert(sfv);
		vip_report(1,""+sfn+"",""+sfv+"");
	}
	
	function sant_report(val,sfn,sfv)
	{
		//alert(val);
		//alert(sfn);
		//alert(sfv);
		$.ajax({
		type: "POST",
		url: "sant_ajax.php",   
		async: true,
		data:"page="+val+"&sfn="+sfn+"&sfv="+sfv,
		success: function(result)
		{  
			//alert(result);
		 document.getElementById('div_report').innerHTML=result;
		
		}
		}); 
	}
	
	function sant_submit()
	{
		if(document.getElementById("txt_search").value.trim() =="")
		{
				alert('Enter Search Value');
				document.getElementById("txt_search").focus();
				return false;
		}
		var sfn = document.getElementById("sel_opt").value;
		var sfv = document.getElementById("txt_search").value;
		//alert(sfn);
		//alert(sfv);
		sant_report(1,""+sfn+"",""+sfv+"");
	}
	
	function caste_report(val,sfn,sfv)
	{
		//alert(val);
		//alert(sfn);
		//alert(sfv);
		$.ajax({
		type: "POST",
		url: "caste_ajax.php",   
		async: true,
		data:"page="+val+"&sfn="+sfn+"&sfv="+sfv,
		success: function(result)
		{  
			//alert(result);
		 document.getElementById('div_report').innerHTML=result;
		
		}
		}); 
	}
	
	function caste_submit()
	{
		if(document.getElementById("txt_search").value.trim() =="")
		{
				alert('Enter Search Value');
				document.getElementById("txt_search").focus();
				return false;
		}
		var sfn = document.getElementById("sel_opt").value;
		var sfv = document.getElementById("txt_search").value;
		//alert(sfn);
		//alert(sfv);
		caste_report(1,""+sfn+"",""+sfv+"");
	}
////////////////////////////////////////////////////////////////////////////////

