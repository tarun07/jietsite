/**
 * UON - JavaScript - Global
 *
 * handlers.js
 * author: Squiz Australia
 *
 * + 12/08/13 - domsammut | Opt out of fitVid.js option added. UoN namespace declared.
 * + 27/09/13 - deanrobinson | Add check to allow Future Students and International mega menus to appear for publish.newcastle.edu.au
 * + 17/06/14 - deanrobinson | Reformatted code
 * + 30/01/15 - deanrobinson | Fixed bug with #content height setting overlappding content on short pages with accordions, replaced "height" with "min-height"
 */

/*
 * Table of Contents
 *
 * 1. User Interface
 * 2. Workarounds
 * 3. Responsive
 */

/**
 * Declare the UoN namespace
 */
var UoN = UoN || [];

/* -- Enable Underscore string functions -- */
_.mixin(_.string.exports());

$(function() {

	/*
	--------------------
	1. User Interface
	--------------------
	*/

	/* Mega-menu HoverIntent */
	if (/ipad|xoom|sch-i800|playbook|tablet|kindle/i.test(navigator.userAgent)) {
		// This is a tablet, don't use hoverIntent.
	} else {
		$('#nav-list.nav-main > li.normal.no-js-hover').removeClass('no-js-hover'); // no-js-hover class is used so that mega-menu also works if javascript is disabled.
		$('#nav-list.nav-main > li.normal').hoverIntent(function(){
			$(this).addClass('hover');
		},function(){
			$(this).removeClass('hover');
		});
	}

	/* -- Placeholder search text -- */
	if (typeof placeholder == 'function') { 
		$('input').placeholder();
	}

	/* -- Toggle active styles on accordions -- */
	$('.collapse').on('show', function() {
		var accordionGroup = $(this).parents('.accordion-group');
		accordionGroup.addClass('active');
	});
	$('.collapse').on('hide', function() {
		var accordionGroup = $(this).parents('.accordion-group');
		accordionGroup.removeClass('active');
	});

	/* -- News and Events -- */

	/* Hide pagination if there is only a single News or Event item */
	if ($('#news-items article').length === 1) {
		$('#news-items').next('div.pagination').hide();
	}
	if ($('#event-items article').length === 1) {
		$('#event-items').next('div.pagination').hide();
	}
	if ($('#achiever-items article').length === 1) {
		$('#achiever-items').next('div.pagination').hide();
	}

	/** News, Events and Highlights widgets
		* display a modal with details.
		*/

	/* Lightbox (using fancybox) */
	// check if mobile first
	if ($(window).width() > 480 && (!navigator.userAgent.match(/Android/i) || !navigator.userAgent.match(/webOS/i) || !navigator.userAgent.match(/iPhone/i) || !navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/))) {

		// run fancybox
		$('#carousel-news h3 a, #carousel-events h3 a, #carousel-highlights .modal-link, #carousel-publications .modal-link, #content-main a.modal-link, .sidebar a.modal-link').each(function() {
			$(this).fancybox({
				href: $(this).attr('href') + '/_nocache?SQ_PAINT_LAYOUT_NAME=lightbox&SQ_DESIGN_NAME=lightbox',
				autoDimensions: false,
				width: '560',
				height: '400',
				cyclic: true,
				titleShow: false,
				'onComplete': function(fancyLink) {
					// load share tools on displayed element
					// addthis.toolbox($('.addthis_toolbox').get());
					// Overwrite category link so that it actually has
					// the category URL query
					if ($('#lightbox-category-link').length) {
						var category = $($(fancyLink).parents('.feature').find('h2 > a')[0]).attr('href');
						$('#lightbox-category-link').attr('href', category);
					}
				}
			});
		});

		// run fancybox for links with a Query String
		$('#content-main a.modal-link-qs').each(function() {
			$(this).fancybox({
				href: $(this).attr('href').split('?')[0] + '/_nocache?SQ_PAINT_LAYOUT_NAME=lightbox&SQ_DESIGN_NAME=lightbox&' + $(this).attr('href').split('?')[1],
				autoDimensions: false,
				width: '1000',
				height: '1000',
				cyclic: true,
				titleShow: false,
				'onComplete': function(fancyLink) {
					// load share tools on displayed element
					// addthis.toolbox($('.addthis_toolbox').get());
					// Overwrite category link so that it actually has
					// the category URL query
					if ($('#lightbox-category-link').length) {
						var category = $($(fancyLink).parents('.feature').find('h2 > a')[0]).attr('href');
						$('#lightbox-category-link').attr('href', category);
					}
				}
			});
		});

		$('#content-main a.large-modal-link').each(function() {
			$(this).addClass('modal-link');
			$(this).fancybox({
				href: $(this).attr('href') + '/_nocache?SQ_PAINT_LAYOUT_NAME=lightbox&SQ_DESIGN_NAME=lightbox',
				autoDimensions: false,
				width: 740,
				height: '90%',
				cyclic: true,
				titleShow: false,
				'onComplete': function(fancyLink) {}
			});
		});

		/* Adjust content div height if it's a short page (ie. login), so the footer is always at the bottom of the window - tablet and up */
		function adjustContentHeight() {
			if($(window).height() > $('html').height()) {
				var new_height = $(window).height() - $('.header').height() - $('.footer').height() - 30; // 30 is to make up for margins above/below the content div
				if(new_height > $('.content').height()) {
					$('.content').css('min-height',new_height);
				} else {
					$('.content').removeAttr('style');
				}
			} else {
				$('.content').removeAttr('style');
			}
		}

		var waitForFinalEvent = (function () {
			var timers = {};
			return function (callback, ms, uniqueId) {
				if (!uniqueId) {
					uniqueId = "Don't call this twice without a uniqueId";
				}
				if (timers[uniqueId]) {
					clearTimeout (timers[uniqueId]);
				}
				timers[uniqueId] = setTimeout(callback, ms);
			};
		})();

		$(window).on('resize',function(){
			waitForFinalEvent(function(){
				$('.content').height('');
				adjustContentHeight();
			}, 100, "contentHeightAdjustment");
		}).on('load',function(){
			adjustContentHeight();
		});

	}

	if ($(window).width() > 1030 && (!navigator.userAgent.match(/Android/i) || !navigator.userAgent.match(/webOS/i) || !navigator.userAgent.match(/iPhone/i) || !navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/))) {

		/* djr145 22/10/13 - adds support for subscribe and enquire forms to open in lightboxes */
		/* Forms are hosted externally, and used throughout the degrees and future students sections of the site */
		$('.sidebar a[href*="forms/subscribe"], .features a[href*="forms/subscribe"], .footer a[href*="forms/enquire"], .sidebar a[href*="forms/year-10"], .sidebar a[href*="forms/non-school"], .sidebar a[href*="non-school-leaver-campus-tour-form"]').each(function() {
			$(this).addClass('modal-link');
			$(this).fancybox({
				href: $(this).attr('href'),
				autoDimensions: false,
				width: 700,
				height: '80%',
				cyclic: true,
				titleShow: false,
				type: 'iframe',
				'onComplete': function(fancyLink) {}
			});
		});

		/** Policy library test **/
		$('a[href*="policy/00"],a[href*="policy-library/document"],a[href*="policy-library/jmp-document"],a[href*="policy-library/restricted-document"],a[href*="policy-library/rescinded-document"]').each(function() {
			$(this).addClass('modal-link');
			$(this).fancybox({
				href: $(this).attr('href'),
				autoDimensions: false,
				width: 740,
				height: '90%',
				cyclic: true,
				titleShow: false,
				type: 'iframe',
				'onComplete': function(fancyLink) {}
			});
		});
		/** end policy library test **/

	}

	/* -- News -- */

	/* Related news list */
	/* This is displayed at the bottom of every news item page */
	var relatedNewsBlock = $('#related_news');
	if (relatedNewsBlock.length) {

		// Get related news vars
		var currentID = relatedNewsBlock.data('news-id');
		var relTagRaw = relatedNewsBlock.data('rel-tag');
		var relAdHocTag = relatedNewsBlock.data('rel-ad-hoc-tag');
		var searchAddress = relatedNewsBlock.data('search-url');
		// build proper search query
		var relTags = relTagRaw.split(';');
		for (i = 0; i < relTags.length; ++i) {
			var relTagIndex = i + 1;
			searchAddress += '&queries_news_type_query[' + relTagIndex + ']=' + relTags[i];
		}
		searchAddress += '&queries_ad_hoc_news_type_query=' + relAdHocTag;
		searchAddress += '&search_page_1456_submit_button=Submit';
		$.ajax({
			url: searchAddress,
			success: function(html) {
				// load results
				$('#related_news').html(html);
				// remove current asset from results list
				$('.id' + currentID).remove();
			}
		});

	}

	/* -- Images Galleries -- */
	if ($('.carousel').length) {

		/* Some galleries are initialised as slideshows */
		$('.gallery-carousel').each(function() {
			var galleryInterval = false;
			if ($(this).hasClass('slideshow')) {
				galleryInterval = 5000;
			}
			$(this).carousel({
				interval: galleryInterval
			});
		});

		$('.gallery-modal').modal({
			show: false
		});

		/* Fix for pages with more than one gallery set*/
		$('ul[id*="gallery-"]').each(function() {
			var counter = 0;
			$(this).find('.thumbnail').each(function() {
				$(this).attr({'rel': counter++});
			});
		});

		$('.gallery-modal').mouseenter(function() {
			$('.gallery-carousel').carousel('pause');
		}).mouseleave(function() {
			$('.gallery-carousel').carousel('cycle');
		});

		$('.gallery li').on('click', 'a.thumbnail', function(event) {
			var currentImg = parseInt($(this).attr('rel'), 10);
			$('.gallery-carousel').carousel(currentImg);
		});

	}

	/* Carousel - full page width/height */
	$.fn.supersized.options = {
		startwidth: 1024,
		startheight: 768,
		vertical_center: 0,
		slideshow: 1,
		navigation: 1,
		transition: 0, // 0-None, 1-Fade, 2-slide top, 3-slide right, 4-slide bottom, 5-slide left
		pause_hover: 0,
		slide_counter: 1,
		slide_captions: 1,
		slide_interval: 10000
	};
	$('#supersize').supersized();

	// Prevent refresh of page when clicking on carousel
	$('#supersize a.noclick').click(function(e) {
		e.preventDefault();
	});
	// Pause the carousel
	$('#pauseplay').click(function() {
		$(this).toggleClass('paused');
	});

	/* -- Sidebar Carousel -- */
	/** Do not rely on automatic Bootstrap carousel initialisation:
		* if "slide" is not set then it is buggy and the controls will skip
		* forward/back two slides instead of one on the first click.
		*/
	$('.feature .carousel').carousel({
		interval: false
	});

	// Hide controls if not required.
	$('.feature .carousel').each(function(carouselItem, carouselElement) {
		var slides = $(carouselElement).find('.item');
		var controls = $(carouselElement).find('.carousel-control');
		if (slides.length < 2) {
			controls.hide();
		}
	});

	/** Have to manually set up click handlers - cannot simply set the "slide"
		* data attributes on the controls before initialising the carousel.
		*/
	$('.feature .carousel-control').click(function(ev) {
		ev.preventDefault();
		var control = $(ev.currentTarget);
		var targetCarousel = $(control.attr('href'));
		var direction;
		if (control.hasClass('left')) {
			direction = 'prev';
		} else if (control.hasClass('right')) {
			direction = 'next';
		}
		if (!direction) {
			return;
		}
		targetCarousel.carousel(direction);
	});

	/** Set fixed height for Bootstrap-powered news and events carousel widgets
		* based on tallest element. Neccessary for news and events because they
		* need to be equal height on the Home page.
		*/
	var sidebarCarouselHeight = 240;
	var sidebarCarouselSlides = $('.item', '#carousel-news, #carousel-events');
	sidebarCarouselSlides.each(function(itemIndex, itemElement) {
		var currentHeight = $(itemElement).height();
		if (currentHeight > sidebarCarouselHeight) {
			sidebarCarouselHeight = currentHeight;
		}
	});
	sidebarCarouselSlides.height(sidebarCarouselHeight);

	/* -- Initialise Twitter feeds -- */
	var twitterFeeds = $('.tweet-list-wrapper');
	if (twitterFeeds.length) {
		twitterFeeds.each(function(twitterFeedIndex, twitterFeedWrapper) {
			var twitterUser = $(this).data('twitter-user');
			$(this).tweet({
				avatar_size: 32,
				count: 3,
				username: twitterUser,
				template: '{text}'
			});
		});
	}

	/* -- Staff profiles -- */

	// for staff profile banner text
	if ($('div.section-banner').length && $('div.banner-text').length) {
		$('div.section-banner').append($('div.banner-text').contents());
	}

	// for staff profile highlight tab
	if ($('div#highlight').length) {
		$('div.tab-content').prepend($('div#highlight'));
		$('div#highlight').removeClass('hidden');
		$('ul.nav-tabs').prepend('<li><a href="#highlight" data-toggle="tab">Highlight</a></li>');
		$('ul.nav-tabs').find('a[href="#highlight"]').click();
	}

	// If there are ul.nav-tabs, then enable switching to tab based on the hash in the url, and update the location on tab click
	if($('ul.nav-tabs').length) {
		if(document.location.hash) {
			$('ul.nav-tabs').find('a[href="'+document.location.hash+'"]').click();
		}
		$('ul.nav-tabs').find('a').on('click',function(){
			document.location.hash = $(this).attr('href');
		});
	}

	// staff profiles - hide publications
	if (document.location.pathname.substring(0, 9) === "/profile/") {
		$('tr.hiddenPub').hide();
		$('a.showmore').on("click", function(event) {
			event.preventDefault();
			if ($(this).hasClass('showing')) {
				$(this).removeClass('showing');
				$(this).parentsUntil('tfoot').parent().prev().children('.hiddenPub').hide();
				var x = $(this).attr('prevText');
				$(this).text(x);
			} else {
				$(this).addClass('showing');
				$(this).parentsUntil('tfoot').parent().prev().children('.hiddenPub').show();
				$(this).attr('prevText',$(this).text());
				$(this).text('Hide');
			}
		});
	}

	/* Login button based on cookie - djr145 - 17/04/14 */
	/* put this back on trigger is set up in prod */
	if(getCookieValue('uon_user_loggedin') == 'true'){
		var show_logout_button = true;
	}
	function getCookieValue(key) {
		var cookies = document.cookie.split('; ');
		for (var i = 0, parts; (parts = cookies[i] && cookies[i].split('=')); i++) {
			if (decode(parts.shift()) === key) {
				return decode(parts.join('='));
			}
		}
		return null;
	}
	function decode(s) {
		return decodeURIComponent(s.replace(/\+/g, ' '));
	}
	/* */
	/* end login */

	/* -- Logout button -- */
	if (typeof show_logout_button !== 'undefined' && show_logout_button) {
		$('.header .tools ul').append('<li class="logout"><a title="Log out" href="./?SQ_ACTION=logout">Log out</span></a></li>');
	}
	// if (typeof show_logout_button !== 'undefined' && show_logout_button) {
	// 	if (!$('.header .social ul').length) {
	// 		$('.header .social').append($('<ul />'));
	// 	}
	// 	$('.header .social ul').append('<li><a title="Logout" href="./?SQ_ACTION=logout"><img src="./?a=87110" width="36" height="36" alt="Logout"></a></li>');
	// }



	// Highlight current location on degree pages menu
	$('.section-nav-header li a').filter(function() {
		var links = $(this).closest('a');
		var lastBreadcrumb = $('.breadcrumb li:last-child');
		if (links.text() === lastBreadcrumb.text()) {
			$(this).addClass('current');
		}
	});

	/* -- A-Z listings -- */
	/* djr145 - 041213 - putting this filter code back because Squiz removed it for unknown reasons, breaking the keyword filter and probably other things */

	// Clear filters.
	$('.azazel-category .btn-clear').on('click', function(e) {

		e.preventDefault();

		// Reset filters.
		$('input[name^="refine"]:checked').each(function() {
			$(this).prop('checked', false);
		});
		$('.azazel-category input[type="text"]').val('');

		// Hide messages.
		$('.azazel-directory .alert').hide();
		if($('.alert.azazel-empty-alert').parent().hasClass('azazel-empty-alert-hidden')) {
			$('.alert.azazel-empty-alert').unwrap();
		}

		// Apply reset filters to directory.
		$('.azazel').azazel('filter');

	});

	// Filters should never actually submit form.
	$('.azazel form').submit(function(ev) {
		ev.preventDefault();
	});

	// Degrees filter page
	// Apply initial filters on page load.
	if ($('#az-degrees').length) {
		var degreeURL = window.location.href;
		var degreeQuery = _.parseURLQuery(degreeURL);
		var degreeFilters = degreeQuery['degree-filter'];
		var degreeKeywords = degreeQuery['degree-keywords'];
		// Toggle filter checkboxes and radio buttons.
		if (typeof degreeFilters !== 'undefined') {
			if (!_.isArray(degreeFilters)) {
				degreeFilters = [degreeFilters];
			}
			_.each(degreeFilters, function(filter) {
				var filterElement = $('#' + filter);
				var filterType = filterElement.attr('type');
				if (filterType === 'checkbox' || filterType === 'radio') {
					filterElement.prop('checked', true);
				}
				if(filter === 'refine-ATAR' || filter === 'refine-early-offer-rounds') {
					$('.' + filter).show();
				}
			});
		}
		// Pre-populate text input keywords.
		if (typeof degreeKeywords !== 'undefined') {
			if (_.isArray(degreeKeywords)) {
				degreeKeywords = degreeKeywords.join(' ');
			}
			$('#degree-keywords').val(degreeKeywords);
		}
		// Style changes.
		$('.content-main').addClass('filters');
		if ($('.filters').length !== 0) {
			$('.section-banner').removeClass('section-banner').addClass('section-header bckgrnd-black');
		}

		// Custom filter behaviour for degree levels.
		$('#refine-level-postgraduate-coursework').on('click', function() {
			var id = $(this).attr('id');
			$('.' + id).toggle();
			var aTag = $('#degree-listing');
			$('html,body').animate({scrollTop: aTag.offset().top},'slow');
		});

		// Custom filter behaviour for high atar and early round.
		$('#refine-ATAR,#refine-early-offer-rounds').on('click', function() {
			var id = $(this).attr('id');
			if($('#refine-ATAR:checked,#refine-early-offer-rounds:checked').length > 0) {
				$('.' + id).show();
			} else {
				$('.' + id).hide();
			}
			var aTag = $('#degree-listing');
			$('html,body').animate({scrollTop: aTag.offset().top},'slow');
		});


		// Apply filters.
		if (typeof degreeFilters !== 'undefined' || typeof degreeKeywords !== 'undefined') {
			$('.azazel').azazel('filter');
		}
	}

	// highlight path in quickmenu as necessary
	var pathname = window.location.pathname;

	if (pathname.indexOf('library') !== -1) {
		$('.tools ul li:eq(0)').addClass('current');
	} else if (pathname.indexOf('current-students') !== -1) {
		$('.tools ul li:eq(1)').addClass('current');
	} else if (pathname.indexOf('current-staff') !== -1) {
		$('.tools ul li:eq(2)').addClass('current');
	}

	/*
	--------------------
	2. Workarounds
	--------------------
	*/

	/**
		* Disables user scaling on iOS until the user tries to scale
		* with pinch/zoom.
		* http://stackoverflow.com/questions/2557801/how-do-i-reset-the-scale-zoom-of-a-web-app-on-an-orientation-change-on-the-iphone
		*/
	if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
		var viewportmeta = document.querySelector('meta[name="viewport"]');
		if (viewportmeta) {
			viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
			document.addEventListener('gesturestart', function() {
				viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=10';
			}, false);
		}
	}

	/* Top nav active state fixes */
	$('#nav-list li > a > span').removeClass('current');
	/* Top nav active state fixes */
	$('#nav-list li > a > span').each(function() {
		pageName = $(this).text().toLowerCase().replace(/ /g, '-');
		// var currentURL  = window.location.href;
		var urlArray = window.location.href.split('/');
		for (var i = 0; i < urlArray.length; i++) {
			if (urlArray[i] === pageName) {
				$(this).parent().parent('li').addClass('current');
			}
		}
	});

	/* Supersize carousel single*/
	if ($('.image_carousel #supersize a').length === 1) {
		$('#captionNavigation a#pauseplay').click();
		$('#captionNavigation').remove();
	}

	/* Footer length workaround for no publications or social media widgets */
	var footerWidgetCount = $('.section-footer > .container > .row > div').length;
	var footerLogosWidgetCount = $('.section-footer > .container > .row > div.logos').length;
	var contactBoxSpan = '6';
	switch (footerWidgetCount) {
		case 1:
			contactBoxSpan = '12';
			break;
		case 2:
			if(footerLogosWidgetCount > 0) {
				contactBoxSpan = '6';
			} else {
				contactBoxSpan = '9';
			}
			break;
		default:
			break;
	}
	$('.section-footer .contact').removeClass().addClass('contact span' + contactBoxSpan);

	/* Fit Vids */
	if (UoN.fitVid !== false) {
		$('#content-main').fitVids();
	}

	/* Auto select form field value for select boxes with a single option (or single option plus 'empty') */
	$('#content-main table select').each(function(){

		if($(this).children('option').length == 1) {
			var o = $(this).children('option');
			$(this).val($(o[0]).val());
		} else if($(this).children('option').length == 2) {
			var o = $(this).children('option');
			if($(o[0]).val() == '--' || $(o[0]).val() == '' || $(o[0]).val() == 'EMPTY') {
				$(this).val($(o[1]).val());
			} else {
				$(this).val($(o[0]).val());
			}
		}

	});

	/*
	---------------------
	3. Responsive
	---------------------
	*/

	// Responsive design
	var mobileFlag = 0;
	var tabletFlag = 0;
	var desktopFlag = 0;
	var DEFAULT_WINDOW_WIDTH = 1200;

	/*-- Wrap tables to allow scroll bars on mobile --*/
	$('table').wrap('<div class="table-scroller" />');

	/*-- Check viewport on load --*/
	checkViewport();

	/*-- Set timer on--*/
	var waitForFinalEvent = (function() {
		var timers = {};
		return function(callback, ms, uniqueId) {
			if (!uniqueId) {
				uniqueId = 'uniqueId';
			}
			if (timers[uniqueId]) {
				clearTimeout(timers[uniqueId]);
			}
			timers[uniqueId] = setTimeout(callback, ms);
		};
	})();

	/* resize function - only runs if user agent is not iphone */
	if (navigator.userAgent.match(/iphone/i) === null) {
		$(window).resize(function() {
			waitForFinalEvent(function() {
				checkViewport();
			}, 100, 'This is a uniqueId');
		});
	}

	if (/ipad|xoom|sch-i800|playbook|tablet|kindle/i.test(navigator.userAgent)) {
		$('body').addClass('tablet');
		$('.nav-main > li > a').each(function() {
			var href = $(this).attr('href');
			$(this).attr('data-href', href).attr('href', '#');

			$(this).click(function() {
				if ($(this).closest('li').hasClass('hover')) {
					window.location = $(this).attr('data-href');
				} else {
					$('.nav-main > li').removeClass('hover');
					$(this).closest('li').addClass('hover');
				}
			});
		});
	}

	function checkViewport() {
		if (!$('html').hasClass('oldie')) {
			// Put sanity checks for window width in case there are frames
			var viewportWidth = (window.top) ? $(window.top).width() : $(window).width();
			// Extra sanity check in case width = 0
			if (!viewportWidth) {
				viewportWidth = DEFAULT_WINDOW_WIDTH;
			}
			if (mobileFlag === 0) {
				if (viewportWidth < 767) {
					manipulateToMobile();
				}
			} else if (viewportWidth < 767) {
				resetElements();
			}
			if ((viewportWidth > 767) && (viewportWidth < 1025)) {
				manipulateToTablet();
			}
			if ((viewportWidth > 767) && (viewportWidth < 1025)) {
				resetTabletElements();
			} else if (viewportWidth > 1024) {
				manipulateToDesktop();
			}
		}
	}

	function manipulateToMobile() {

		// nav list
		// remove current inlines styles from .nav-expanded first
		$('#nav-list li .nav-expanded').removeAttr('style');
		$('#nav-list li .nav-expanded ul').each(function(indexFirst, objFirst) {
			$(objFirst).find('a.cta-button').each(function(indexSecond, objSecond) {
				if ($(objSecond).children('.cta-title').length > 0) {
					$(objSecond).wrap('<li class="cta-wrapper" />');
					$(objFirst).append($(objSecond).parent('.cta-wrapper').remove());
				} else {
					$(objSecond).remove();
				}
				// if ($(objSecond).children('img').length > 0) {
				// 	$(objSecond).wrap('<li class="cta-wrapper" />');
				// 	$(objFirst).append($(objSecond).parent('.cta-wrapper').remove());
				// } else {
				// 	$(objSecond).remove();
				// }
			});
			$(objFirst).find('.cta-wrapper').eq(0).addClass('first');
		});

		resetElements();

		// Carousel color change
		$('div#slidecaption').bind('DOMSubtreeModified', function() {
			$('div#captionContainer').removeClass();
			setTimeout(function() {
				activeBackgroundColor = $('.activeslide img').attr('data-background-color');
				$('div#captionContainer').addClass(activeBackgroundColor);
			}, 10);
		});

		// Add Class to parent elements
		$('#nav-list li').each(function() {
			var isParent = $(this).children('ul, .nav-expanded');
			if (isParent.length) {
				$(this).addClass('parent');
			}
		});

		// Inside pages
		// Inside Side Navigation
		$('.nav-inside').insertAfter('.content-main');

		// Move h1 above the carousel controls on home page and landing pages
		if ($('.home').length > 0 || $('.landing').length > 0) {
			$('.content-main>h1').insertBefore($('#captionContainer'));
		}

		// Footer Accordion
		var footer = $('.global-footer');
		footer.find('h2').off('click').click(function(e) {
			e.preventDefault();
			$(this).toggleClass('expanded');
			$(this).nextUntil(footer.find('h2')).slideToggle('slow');
		});

		$('.footer-info ul li:nth-child(2) a').text('Copyright');

		// Add class of responsive to tables
		if ($('table td:nth-child(3)').length > 0) {
			$('table').addClass('responsive');
		}

		// fade menu
		$('#menu-btn a').click(function() {
			$('.container, .banner').not($('.header .header-bar .container')).toggleClass('fade');
		});

		$('.mobile-section-nav').click(function(e) {
			e.preventDefault();
			$('.section-nav-header ul').toggleClass('show');
		});

		// Mobile Navigation
		var menu = {
			menuBtn: $('#menu-btn'),
			menu: $('nav .content-m'),
			navWrapper: $('.nav-main-wrapper').css('overflow', 'hidden', 'left', '100%'),
			level1: $('#nav-list > li'),
			level2: $('.nav-expanded > ul > li'),
			level3: $('.nav-expanded > ul > li > ul'),
			setTitleLevel2: 0,
			setTitleLevel3: 0,
			MenuButton: function() {
				var self = this;
				self.swipeNav();
				this.menuBtn.click(function() {
					if ($(this).hasClass('closed')) {
						$(this).addClass('open').removeClass('closed');
						$(self.menu).css('left', '0');
						$(self.navWrapper).css('overflow', 'visible');
						menu.resetStyles();

						// makes sure the menu opens up in the correct area
						var urlArray = window.location.href.replace(/#/g, '').split('/');
						for (i = 0; i < urlArray.length; i++) {
							var pageName = urlArray[i].replace(/-/g, ' ');
							$('#nav-list li a').each(function() {
								var linkText = $(this).children('span').text().toLowerCase();
								if (linkText === pageName) {
									$(this).parent('li').children('span.expand').click();
									return false;
								}
							});
						}
					} else if ($(this).hasClass('open')) {
						$(this).addClass('closed').removeClass('open');
						$(self.menu).css('left', '100%');
						$(self.navWrapper).css('overflow', 'hidden');
						menu.resetStyles();
					}
				});
			},
			swipeNav: function() {
				var self = this;
				menu.level1.off().find('span.expand').click(function() {
					$(self.menu).animate({'left': '-100%', 'visibility': 'hidden'}, 200);
					var level = $(this).parent('li').find(self.level2).parent('ul');
					var hasTitle = $(this).parent('li').find('.nav-expanded').find('ul li:nth-child(3)').hasClass('title2');

					if (hasTitle) {
						level.show().css('visibility', 'visible').addClass('list-current');
						$(this).closest('ul').css('visibility', 'hidden').removeClass('list-current');
					} else {
						level.prepend('<span class="mobile-pointer-up"></span><span class="mobile-pointer-down"></span><li class="title2">' + $(this).parent('li').html() + '</li>').show().css('visibility', 'visible').addClass('list-current');
						$('.title2').find('ul').remove();
						$(this).closest('ul').css('visibility', 'hidden').removeClass('list-current');
					}

					$('.title2').off().click(function(e) {
						e.stopPropagation();
						menu.resetStyles();
						var title = $(this).text();
						$(this).parent('ul').hide().removeClass('list-current');
						$(self.menu).animate({'left': '0', 'visibility': 'visible'}, 200);
						$('.nav-main').css('visibility', 'visible');
					});
				});

				menu.level2.off().find('span.expand').click(function() {
					$(self.menu).animate({'left': '-200%'}, 200);
					var hasTitle = $(this).parent('li').find('ul li:nth-child(3)').hasClass('title3');
					$(this).closest('ul').css('visibility', 'hidden').removeClass('list-current');

					if (hasTitle) {
						$(this).parent('li').find('ul').show().css('visibility', 'visible').addClass('list-current');
					} else if (!hasTitle) {
						$(this).parent('li').find('ul').prepend('<span class="mobile-pointer-up"></span><span class="mobile-pointer-down"></span><li class="title3">' + $(this).parent('li').html() + '</li>').show().css('visibility', 'visible').addClass('list-current');
						$('.title3').find('ul').remove();
					}

					$('.title3').children('span.expand').off().click(function(e) {
						menu.resetStyles();
						var thisParent = $(this).parent('li');
						var title = $(this).parent('li').children('a').children('span').text();
						$('.nav-main').css('visibility', 'visible');
						$(self.menu).children('ul').find('ul').children('li').children('a').children('span').each(function() {
							if ($(this).text() === title) {
								$(this).closest('ul').parent('li').parent('ul').parent('div.nav-expanded').parent('li').children('span.expand').click();
							}
						});

						return false;
					});

					return false;
				});

				// make sure third level links open to the correct page
				menu.level2.find('a').click(function() {
					window.location.href = $(this).attr('href');
				});

				menu.level3.find('a').click(function() {
					window.location.href = $(this).attr('href');
				});
			},
			resetStyles: function() {
				menu.level1.find($(menu.level2)).parent('ul').hide();
				menu.level2.parent('ul').hide();
				menu.level3.hide();
				$('#nav-list').removeAttr('style');
			}
		};
		menu.MenuButton();

		// home page carousel
		$('.home #featured-pages').removeClass('featured-pages-desktop').removeClass('featured-pages-tablet').addClass('featured-pages-mobile');
		if ($('.home .featured-pages-mobile').length) {
			$('.home .featured-pages-mobile').carouFredSel({
				circular: true,
				infinite: true,
				auto: false,
				items: {
					visible: 1
				},
				scroll: {
					items: 1
				},
				responsive: true,
				prev: {
					button: '#fpage-prev'
				},
				next: {
					button: '#fpage-next'
				}
			});
		}

		// set flag
		mobileFlag = 1;

	} // End manipulateToMobile

	function manipulateToTablet() {

		// Navigation toggle
		$('.header .header-bar .nav-main-wrapper .content-m ul li > a').toggle(function(ev) {
			// ev.stopPropagation();
			$('.nav-expanded').css({'display': 'none', 'left': '-9999'});
			$(this).next('.nav-expanded').css({'display': 'block', 'left': '0'});
			window.location.href = $(this).attr('href');
		}, function() {
			$('.nav-expanded').css({'display': 'none', 'left': '-9999'});
		});

		$('div.nav-expanded ul li ul li a').click(function() {
			window.location.href = $(this).attr('href');
		});

		// Landing page
		$('.landing .span6.contact').removeClass('span6').addClass('span4');

		// James Morgan & Eugene fix - 13/12/2013 - box 3 looks better :S
		$('.landing .box3.feature').removeClass('box3').addClass('box4');
		$('.landing .box3.social').removeClass('box3').addClass('box4');

		// Home page
		if ($('.home')) {
			var relatedNews = $('.js-tablet-home-news');
			if ($('.section-search').parent().hasClass('tablet-column-wrapper')) {
				return false;
			} else {
				$(relatedNews).insertAfter('.section-search');
				$('.section-search').wrap('<div class="tablet-column-wrapper" />');
			}
			$('.js-tablet-feature1').insertAfter('.section-search');
		}

		if (!tabletFlag) {
			// Inside pages - code will only run once
			if ($('.content .nav-inside').length > 0 && $('.tablet-sidebar').length === 0) {
				$('.content .nav-inside').wrap('<div class="tablet-sidebar" />');
			}
			$('.inside .footer .section-footer .contact').removeClass('span6').addClass('span12');
		}

		$('.sidebar').insertAfter($('.content .nav-inside'));

		if (!tabletFlag && $('body').hasClass('landing')) {
			$('.content .container').append('<div id="tablet-col" />');
			$('#feature-priority').removeClass('span3');
			$('#feature-priority').appendTo('#tablet-col');

			/* James Morgan & Eugene future-students landing fix 13/12/2013 */
			var rowContentArea = $('#feature-priority .row-content-area');
			var rows = $('#feature-priority .row');
			if(rows.length){
				rows.wrapAll('<div class="menu-rows"></div>');
			}

			var count = 1;
			$('#feature-priority .row-content-area,#feature-priority .menu-rows').each(function(){
				if(count % 3 == 0){
					$(this).addClass('last');
				}
				count++;
			});

			/*
				for (var i = 0; i < divs.length; i += 3) {
					divs.slice(i, i + 3).wrapAll('<div class="feature-priority-row" />');
				}

				// check for less than 3 boxes in the last widget row
				if ($('.feature-priority-row > div').length < 3) {
					$('.feature-priority-row').prepend('<div />');
				}
			*/

		}

		// Degree filter page
		if ($('.filters').length !== 0) {
			$('.sidebar').css({'margin':'10px 0px 0 0'});
			$('.sidebar').appendTo('.tablet-sidebar-wrapper');
			$('.tablet-sidebar-wrapper .row > .span4').removeClass('span4');
		}

		// home page carousel
		$('#featured-pages').removeClass('featured-pages-desktop').removeClass('featured-pages-mobile').addClass('featured-pages-tablet');
		if ($('.featured-pages-tablet').length) {
			$('.featured-pages-tablet').carouFredSel({
				circular: true,
				infinite: true,
				auto: false,
				items: {
					visible: 3
				},
				scroll: {
					items: 1
				},
				prev: {
					button: '#fpage-prev'
				},
				next: {
					button: '#fpage-next'
				}
			});
		}

		//set flag
		tabletFlag = 1;

	} // End manipulateToTablet

	function manipulateToDesktop() {

		resetElements();

		/* Work out the tallest column and create equal heights */
		function equalHeight(group) {
			tallest = 0;
			group.each(function() {
				thisHeight = $(this).height();
				if (thisHeight > tallest) {
					tallest = thisHeight;
				}
			});
			group.height(tallest);
		}

		// this is the mega-menu, removed now that we using a static menu
		// equalHeight($('.nav-expanded ul ul'));
		equalHeight($('equal-height'));

		// home page carousel
		$('#featured-pages').removeClass('featured-pages-tablet').removeClass('featured-pages-mobile').addClass('featured-pages-desktop');
		if ($('.featured-pages-desktop').length) {
			$('.featured-pages-desktop').carouFredSel({
				circular: true,
				infinite: true,
				auto: false,
				items: {
					visible: 4
				},
				scroll: {
					items: 1
				},
				prev: {
					button: '#fpage-prev'
				},
				next: {
					button: '#fpage-next'
				}
			});
		}

		// Degrees filter page
		if ($('.filters').length !== 0) {
			$('.sidebar').css({'margin':'0px 0px 0px 10px'});
			$('.sidebar .row div').addClass('span4');
		}

		// set flag
		desktopFlag = 1;

	} // End manipulateToDesktop

	function resetElements() {

		$('.content .span4').removeClass('span4').addClass('span3');
		$('.box4').removeClass('box4').addClass('box3');
		$('.home #content-main.span8').removeClass('span8').addClass('span3');
		$('.content .span8').removeClass('span8').addClass('span6');
		$('.content .box8').removeClass('box8').addClass('box6');
		$('.inside .footer .section-footer .contact').removeClass('span12').addClass('span6');

		if ($('.content .nav-inside')) {
			$('.sidebar').insertAfter($('.content-main'));
		}

		// Home page reset
		if ($('.home')) {
			var relatedNews = $('.js-tablet-home-news');
			var relatedEvents = $('.js-tablet-home-events');
			$(relatedNews).insertAfter(relatedEvents);
			$('div.tablet-column-wrapper').removeClass('tablet-column-wrapper');
		}

		// Landing page reset
		$('.landing .span4.contact').removeClass('span4').addClass('span6');
		$('.landing .box4.feature').removeClass('box4').addClass('box3');
		$('.landing .box4.social').removeClass('box4').addClass('box3');

	}

	function resetTabletElements() {

		$('.home #content-main').removeClass('span3').addClass('span8');

		$('.landing .contact.span9').removeClass('span9').addClass('span8');

		$('.content .span3').removeClass('span3').addClass('span4');
		$('.content .span6').removeClass('span6').addClass('span8');
		$('.content .box3').removeClass('box3').addClass('box4');
		$('.content .box6').removeClass('box6').addClass('box8');
		$('.inside .contact.span6').removeClass('span6').addClass('span12');
		if ($('.tablet-sidebar').children().length === 0) {
			$('.tablet-sidebar').append($('.nav-inside'));
		}
	}

});

if(window.location.pathname.match(/^\/profile\//)) {
	UoN.fitVid = false;
}