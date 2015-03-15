<?php 
/*
 * A Design by W3layouts
Author: W3layouts
Author URL: http://w3layouts.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
 *
 */
include "app/config.php";
include "app/detect.php";

if ($page_name=='') {
	include $browser_t.'/index.php';
	}
elseif ($page_name=='index.php') {
	include $browser_t.'/index.php';
	}
elseif ($page_name=='about.php') {
	include $browser_t.'/about.php';
	}
elseif ($page_name=='students.php') {
	include $browser_t.'/students.php';
	}
elseif ($page_name=='futstudents.php') {
	include $browser_t.'/futstudents.php';
	}
elseif ($page_name=='pgstudents.php') {
	include $browser_t.'/pgstudents.php';
	}

elseif ($page_name=='gallery.html') {
	include $browser_t.'/gallery.html';
	}
elseif ($page_name=='services.html') {
	include $browser_t.'/services.html';
	}
elseif ($page_name=='blog.html') {
	include $browser_t.'/blog.html';
	}
elseif ($page_name=='academics.php') {
	include $browser_t.'/academics.php';
	}
elseif ($page_name=='testimonial.php') {
	include $browser_t.'/testimonial.php';
	}
elseif ($page_name=='newsevents.php') {
	include $browser_t.'/newsevents.php';
	}
elseif ($page_name=='facilities.php') {
	include $browser_t.'/facilities.php';
	}
elseif ($page_name=='studenservice.php') {
	include $browser_t.'/studenservice.php';
	}

elseif ($page_name=='feedback.php') {
	include $browser_t.'/feedback.php';
	}
	elseif ($page_name=='feedbackDAO.php') {
	include $browser_t.'/feedbackDAO.php';
	}
		elseif ($page_name=='captcha.php') {
	include $browser_t.'/captcha.php';
elseif ($page_name=='transport.php') {
	include $browser_t.'/facility/transport.php';
	}
elseif ($page_name=='safensecure.php') {
	include $browser_t.'/facility/safensecure.php';
	}
elseif ($page_name=='bankloan.php') {
	include $browser_t.'/facility/bankloan.php';
	}
elseif ($page_name=='wifiatm.php') {
	include $browser_t.'/facility/wifiatm.php';
	}
elseif ($page_name=='academicpart.php') {
	include $browser_t.'/academicpart.php';
	}
elseif ($page_name=='examination.php') {
	include $browser_t.'/examination.php';
	}
	elseif ($page_name=='institutions.php') {
	include $browser_t.'/institutions.php';
	}
	elseif ($page_name=='research.php') {
	include $browser_t.'/research.php';
	}
elseif ($page_name=='contact.php') {
	include $browser_t.'/contact.php';
	}
	elseif ($page_name=='linkage.php') {
	include $browser_t.'/linkage.php';
	}
		elseif ($page_name=='mtech.php') {
	include $browser_t.'/admission/mtech.php';
	}
		elseif ($page_name=='mba.php') {
	include $browser_t.'/admission/mba.php';
	}
elseif ($page_name=='404.html') {
	include $browser_t.'/404.html';
	}
	elseif ($page_name=='jiet-division.php') {
	include $browser_t.'/JIET/jiet-division.php';
	}
	elseif ($page_name=='setg-division.php') {
	include $browser_t.'/JIET/setg-division.php';
	}
	elseif ($page_name=='jiet-ece.php') {
	include $browser_t.'/JIET/jiet-ece.php';
	}
		elseif ($page_name=='jiet-cse.php') {
	include $browser_t.'/JIET/jiet-cse.php';
	}
			elseif ($page_name=='jiet-it.php') {
	include $browser_t.'/JIET/jiet-it.php';
	}
				elseif ($page_name=='jiet-me.php') {
	include $browser_t.'/JIET/jiet-me.php';
	}
					elseif ($page_name=='jiet-civil.php') {
	include $browser_t.'/JIET/jiet-civil.php';
	}
						elseif ($page_name=='jiet-appsc.php') {
	include $browser_t.'/JIET/jiet-appsc.php';
	}
	
			elseif ($page_name=='jiet-ee.php') {
	include $browser_t.'/JIET/jiet-ee.php';
	}
elseif ($page_name=='admission.php') {
	include $browser_t.'/admission.php';
	}
elseif ($page_name=='institutionsom.php') {
	include $browser_t.'/institutionsom.php';
	}
elseif ($page_name=='contactquery.php') {
	include $browser_t.'/contactquery.php';
	}
elseif ($page_name=='contactfind.php') {
	include $browser_t.'/contactfind.php';
	}
elseif ($page_name=='institutionsetg.php') {
	include $browser_t.'/institutionsetg.php';
	}
elseif ($page_name=='contact.php') {
	include $browser_t.'/contact.php';
	}
elseif ($page_name=='campuslife.php') {
	include $browser_t.'/campuslife.php';
	}
elseif ($page_name=='csr.php') {
	include $browser_t.'/campuslife/csr.php';
	}
elseif ($page_name=='csr1.php') {
	include $browser_t.'/campuslife/csr1.php';
	}
elseif ($page_name=='achievements.php') {
	include $browser_t.'/campuslife/achievements.php';
	}
elseif ($page_name=='openhouse.php') {
	include $browser_t.'/campuslife/openhouse.php';
	}
elseif ($page_name=='contact-post.html') {
	include $browser_t.'/contact.html';
	include 'app/contact.php';
	}
else
	{
		include $browser_t.'/404.html';
	}

?>
