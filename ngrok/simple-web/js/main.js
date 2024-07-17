/** ==========================================================================================

  Project :   Minemo - Responsive Multi-purpose HTML5 Template
  Author :    Preyantechnosys

========================================================================================== */

/** ===============

 .. Preloader
 .. header_search
 .. Fixed-header
 .. Menu
 .. Number rotator
 .. Skillbar
 .. Tab
 .. Accordion
 .. Isotope
 .. Prettyphoto
 .. Slick_slider
 .. Back to top 

 =============== */


jQuery(function($) {

  "use strict";


/*------------------------------------------------------------------------------*/
/* Preloader
/*------------------------------------------------------------------------------*/
   // makes sure the whole site is loaded
    $(window).on("load",function(){
        $(".loader-blob").fadeOut(),$("#preloader").delay(300).fadeOut("slow",function(){$(this).remove()})
    })


/*------------------------------------------------------------------------------*/
/* header_search
/*------------------------------------------------------------------------------*/

    jQuery(".header_search a").addClass('sclose');
    jQuery(".header_search a").on('click',function(){
        jQuery(".field.searchform-s").focus();
        if(jQuery('.header_search a').hasClass('sclose')){
            jQuery(".header_search a i").removeClass('icon-search-1').addClass('icon-search-1');
            jQuery(this).removeClass('sclose').addClass('open');
            jQuery(".header_search_content").addClass('on')
        }
        else{jQuery(this).removeClass('open').addClass('sclose');
            jQuery(".header_search_content").removeClass('on')
        }
    });
    jQuery(".header_search_content .close_btn").on('click',function(){
        jQuery('.header_search a').removeClass('open').addClass('sclose');
        jQuery(".header_search_content").removeClass('on')
    });

/*------------------------------------------------------------------------------*/
/* header_menu
/*------------------------------------------------------------------------------*/

    jQuery(".header_menu a").addClass('sclose');
    jQuery(".header_menu a").on('click',function(){
        jQuery(".field.searchform-s").focus();
        if(jQuery('.header_menu a').hasClass('sclose')){
            jQuery(".header_menu a i").removeClass('icon-search-1').addClass('icon-search-1');
            jQuery(this).removeClass('sclose').addClass('open');
            jQuery(".header_menu_content").addClass('on')
        }
        else{jQuery(this).removeClass('open').addClass('sclose');
            jQuery(".header_menu_content").removeClass('on')
        }
    });
    jQuery(".header_menu_content .close_btn").on('click',function(){
        jQuery('.header_menu a').removeClass('open').addClass('sclose');
        jQuery(".header_menu_content").removeClass('on')
    });
 
/*------------------------------------------------------------------------------*/
/* Fixed-header
/*------------------------------------------------------------------------------*/

    $(window).on("scroll",function(){
        if ( matchMedia( 'only screen and (min-width: 1200px)' ).matches ) 
        {
            if ($(window).scrollTop() >= 50 ) {

                $('.prt-stickable-header').addClass('fixed-header');
            }
            else {

                $('.prt-stickable-header').removeClass('fixed-header');
            }
        }
    });


/*------------------------------------------------------------------------------*/
/* Menu
/*------------------------------------------------------------------------------*/
        
        var menu = {
        initialize: function() {
            this.Menuhover();
        },

        Menuhover : function(){
            var getNav = $("nav.main-menu"),
                getWindow = $(window).width(),
                getHeight = $(window).height(),
                getIn = getNav.find("ul.menu").data("in"),
                getOut = getNav.find("ul.menu").data("out");
            
            if ( matchMedia( 'only screen and (max-width: 1200px)' ).matches ) {
                                                     
                // Enable click event
                $("nav.main-menu ul.menu").each(function(){
                    
                    // Dropdown Fade Toggle
                    $("a.mega-menu-link", this).on('click', function (e) {
                        e.preventDefault();
                        var t = $(this);
                        t.toggleClass('active').next('ul').toggleClass('active');
                    });   

                    // Megamenu style
                    $(".megamenu-fw", this).each(function(){
                        $(".col-menu", this).each(function(){
                            $(".title", this).off("click");
                            $(".title", this).on("click", function(){
                                $(this).closest(".col-menu").find(".content").stop().toggleClass('active');
                                $(this).closest(".col-menu").toggleClass("active");
                                return false;
                                e.preventDefault();
                                
                            });

                        });
                    });  
                    
                }); 
            }
        },
    };

    
    $('.btn-show-menu-mobile').on('click', function(e){
        $(this).toggleClass('is-active'); 
        $('.menu-mobile').toggleClass('show'); 
        return false;
        e.preventDefault();  
    });

    // Initialize
    $(document).ready(function(){
        menu.initialize();

    });


    
    var $bannerSlider = jQuery('.banner_slider');
    var $bannerFirstSlide = $('div.slide:first-child');

    $bannerSlider.on('init', function (e, slick) {
      var $firstAnimatingElements = $bannerFirstSlide.find('[data-animation]');
      slideanimate($firstAnimatingElements);
    });
    $bannerSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
      var $animatingElements = $('div.slick-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
      slideanimate($animatingElements);
    });
    $bannerSlider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      dots: false,
      swipe: true,
      adaptiveHeight: true,
      responsive: [

        {
            breakpoint: 1200,
            settings: {
                arrows: false
            }
        },
        {
            breakpoint: 767,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,                
                autoplay: false,
                autoplaySpeed: 4000,
                swipe: true } 
            }] });

    function slideanimate(elements) {
      var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data('delay');
        var $animationType = 'animated ' + $this.data('animation');
        $this.css({
          'animation-delay': $animationDelay,
          '-webkit-animation-delay': $animationDelay });

        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }
 

     /* side-menu */
    $(".side-menu-container").each(function(){  
        $(".side-menu > a", this).on("click", function(e){
            e.preventDefault();
            $(".side-overlay").toggleClass("on");
            $("body").toggleClass("on-side");
        });
    });
    $(".side .close-side").on("click", function(e){
        e.preventDefault();
        $(".side-overlay").removeClass("on");
        $("body").removeClass("on-side");
    });  


/*------------------------------------------------------------------------------*/
/* Animation on scroll: Number rotator
/*------------------------------------------------------------------------------*/
    
    $("[data-appear-animation]").each(function() {
    var self      = $(this);
    var animation = self.data("appear-animation");
    var delay     = (self.data("appear-animation-delay") ? self.data("appear-animation-delay") : 0);
        
        if( $(window).width() > 959 ) {
            self.html('0');
            self.waypoint(function(direction) {
                if( !self.hasClass('completed') ){
                    var from     = self.data('from');
                    var to       = self.data('to');
                    var interval = self.data('interval');
                    self.numinate({
                        format: '%counter%',
                        from: from,
                        to: to,
                        runningInterval: 2000,
                        stepUnit: interval,
                        onComplete: function(elem) {
                            self.addClass('completed');
                        }
                    });
                }
            }, { offset:'85%' });
        } else {
            if( animation == 'animateWidth' ) {
                self.css('width', self.data("width"));
            }
        }
    });


   
/*------------------------------------------------------------------------------*/
/* Skillbar
/*------------------------------------------------------------------------------*/
    
    $('.prt-progress-bar').each(function() {
        $(this).find('.progress-bar').width(0);
    });

    $('.prt-progress-bar').each(function() {

        $(this).find('.progress-bar').animate({
            width: $(this).attr('data-percent')
        }, 2000);
    });


    // Part of the code responsible for loading percentages:

    $('.progress-bar-percent[data-percentage]').each(function () {

        var progress = $(this);
        var percentage = Math.ceil($(this).attr('data-percentage'));

            $({countNum: 0}).animate({countNum: percentage}, {
                duration: 2000,
                easing:'linear',
                step: function() {
                // What todo on every count
                    var pct = '';
                    if(percentage === "0"){
                        pct = Math.floor(this.countNum) + '%';
                    }else{
                        pct = Math.floor(this.countNum+1) + '%';
                    }
                    progress.text(pct);
                }
            });
    });


    jQuery(".prt-circle-box").each(function () {

        var circle_box = jQuery(this);
        var fill_val = circle_box.data("fill");
        var emptyFill_val = circle_box.data("emptyfill");
        var thickness_val = circle_box.data("thickness");
        var linecap_val = circle_box.data("linecap")
        var fill_gradient = circle_box.data("gradient");
        var startangle_val = (-Math.PI / 4) * 1.5;
        if (fill_gradient != "") {
            fill_gradient = fill_gradient.split("|");
            fill_val = { gradient: [fill_gradient[0], fill_gradient[1]] };
        }
        if (typeof jQuery.fn.circleProgress == "function") {
            var digit = circle_box.data("digit");
            var before = circle_box.data("before");
            var after = circle_box.data("after");
            var digit = Number(digit);
            var short_digit = digit / 100;
            var size_val = circle_box.data("size");
            jQuery(".prt-circle", circle_box)
                .circleProgress({ value: 0, duration: 8000, size: size_val, startAngle: startangle_val, 
                    thickness: thickness_val, linecap:linecap_val, emptyFill: emptyFill_val, fill: fill_val })
                .on("circle-animation-progress", function (event, progress, stepValue) {
                    
                    circle_box.find(".prt-fid-number").html(before + Math.round(stepValue * 100) + after);
                });
        }
        circle_box.waypoint(
            function (direction) {

                if (!circle_box.hasClass("completed")) {
                    if (typeof jQuery.fn.circleProgress == "function") {
                        jQuery(".prt-circle", circle_box).circleProgress({ value: short_digit });
                    }
                    circle_box.addClass("completed");
                }
            },
            { offset: "90%" }
        );
    });


    jQuery( document ).ready(function($) { aqovo_logMarginPadding_content();});
    function aqovo_logMarginPadding_content(){ 
        jQuery(".prt-expandcontent-yes").each(function () {
            var prt_column_div = '';
            var scrren_size = jQuery(window).width();
            var box_size = jQuery(this).parent().width();
            var extra_size = (scrren_size - box_size) / 3;

            if (jQuery(this).hasClass('prt-right-span')) {
                prt_column_div = ', .prt-expandcontent_column > .prt-expandcontent_wrapper ';
                jQuery('.prt-expandcontent_column > div' + prt_column_div, jQuery(this)).css('margin-right', '-' + extra_size + 'px');
            } else if (jQuery(this).hasClass('prt-left-span')) {
                prt_column_div = ', .prt-expandcontent_column > .prt-expandcontent_wrapper ';
                jQuery('.prt-expandcontent_column > div' + prt_column_div, jQuery(this)).css('margin-left', '-' + extra_size + 'px');
            }

        });
    }jQuery(window).resize(function() {aqovo_logMarginPadding_content(); });


/*------------------------------------------------------------------------------*/
/* Tab
/*------------------------------------------------------------------------------*/ 


$('.prt-tabs').each(function() {
    $(this).children('.content-tab').children().hide();
    $(this).children('.content-tab').children().first().show();
    $(this).find('.tabs').children('li').on('click', function(e) {  
        var liActive = $(this).index(),
            contentActive = $(this).siblings().removeClass('active').parents('.prt-tabs').children('.content-tab').children().eq(liActive);
        contentActive.addClass('active').fadeIn('slow');
        contentActive.siblings().removeClass('active');
        $(this).addClass('active').parents('.prt-tabs').children('.content-tab').children().eq(liActive).siblings().hide();
        e.preventDefault();
    });
});


/*------------------------------------------------------------------------------*/
/* Accordion
/*------------------------------------------------------------------------------*/

    var allPanels = $('.accordion > .toggle').children('.toggle-content').hide();

    $('.toggle-title').on('click',function(e) {

        e.preventDefault();
        var $this = $(this);
            $this.parent().parent().find('.toggle .toggle-title a').removeClass('active');

        if ($this.next().hasClass('show')) {

            $this.next().removeClass('show');   
            $this.next().slideUp('easeInExpo');

        } else {
            $this.parent().parent().find('.toggle .toggle-content').removeClass('show');
            $this.parent().parent().find('.toggle .toggle-content').slideUp('easeInExpo');
            $this.next().toggleClass('show');
            $this.next().removeClass('show');
            $this.next().slideToggle('easeInExpo');
           $this.next().parent().children().children().addClass('active');

        }

    });



/*------------------------------------------------------------------------------*/
/* Isotope
/*------------------------------------------------------------------------------*/

   $(function () {

        if ( $().isotope ) {           
            var $container = $('.isotope-project');
            $container.imagesLoaded(function(){
                $container.isotope({
                    itemSelector: '',
                    transitionDuration: '1s',
                });
            });

            $('.portfolio-filter li').on('click',function() {                           
                var selector = $(this).find("a").attr('data-filter');
                $('.portfolio-filter li').removeClass('active');
                $(this).addClass('active');
                $container.isotope({ filter: selector });
                return false;
            });
        };

   });


    
/*------------------------------------------------------------------------------*/
/* Prettyphoto
/*------------------------------------------------------------------------------*/
    $(function () {

        // Normal link
        jQuery('a[href*=".jpg"], a[href*=".jpeg"], a[href*=".png"], a[href*=".gif"]').each(function(){
            if( jQuery(this).attr('target')!='_blank' && !jQuery(this).hasClass('prettyphoto') ){
                var attr = $(this).attr('rel');
                if (typeof attr !== typeof undefined && attr !== false && attr!='prettyPhoto' ) {
                    jQuery(this).attr('data-rel','prettyPhoto');
                }
            }
        });    

        jQuery('a[data-rel^="prettyPhoto"]').prettyPhoto();
        jQuery('a.prt_prettyphoto').prettyPhoto();
        jQuery('a[rel^="prettyPhoto"]').prettyPhoto();
    });
    

    $(window).on('load', function(){

    function gridMasonry(){
        var grid = $(".masonry-grid")
        if( grid.length ){
            
          grid.isotope({
            itemSelector: '.masonry-grid-item',
            percentPosition: true,
            layoutMode: 'masonry',
            masonry: {
              columnWidth: '.grid-sizer',
            },
          });
            
        }
    }
    gridMasonry();
});

/*------------------------------------------------------------------------------*/
/* Slick_slider
/*------------------------------------------------------------------------------*/
    $(".slick_slider").slick({
        speed: 1000,
        infinite: true,
        arrows: false,
        dots: false,                   
        autoplay: false,
        centerMode : false,

        responsive: [{

            breakpoint: 1360,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3
            }
        },
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3
            }
        },
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

 /* testimonials Slick_slider */
    var testinav=jQuery('.testimonials-nav',this);
    var testiinfo=jQuery('.testimonials-info',this);
    var testiname   = jQuery('.testimonials-name', this);


    jQuery('.testimonials-info',this).slick({
        slidesToShow    : 1,
        slidesToScroll  : 1,
        fade            : false,
        arrows          : true,
        asNavFor        : '.testimonials-nav,.testimonials-name',
        adaptiveHeight  : true,
        speed           : 1500,
        autoplay        : false,
        loop            : true,

        responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            centerMode: true,
            autoplay : true,
            centerPadding: '0',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            autoplay : true,
            centerPadding: '0',
            slidesToShow: 1
          }
        }
      ]
    });

    jQuery('.testimonials-nav',this).slick({

        slidesToShow    : 1,
        slidesToScroll  : 1,
        asNavFor        : '.testimonials-info,.testimonials-name',
        centerMode      : true,
        centerPadding   : '0',
        focusOnSelect   : true,
        autoplay        : false,
        speed           : 1500,
        arrows          : false,
        dots            : false,
        variableWidth   : true,
        loop            : true,

        responsive: [
        {
          breakpoint: 1199,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1,
            slidesToScroll  : 1,
          }
        }
      ]
        
    });

    jQuery('.testimonials-name',this).slick({
        slidesToShow    : 1,
        slidesToScroll  : 1,
        fade            : false,
        arrows          : false,
        asNavFor        : '.testimonials-info,.testimonials-nav',
        adaptiveHeight  : true,
        speed           : 1500,
        autoplay        : false,
        loop            : true,
    });

/*------------------------------------------------------------------------------*/
/*  progress vertical slider
/*------------------------------------------------------------------------------*/
$('.vertical_slider.share').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        vertical: true,
        verticalSwiping: true
    });

/*------------------------------------------------------------------------------*/
/* Back to top
/*------------------------------------------------------------------------------*/
    
    // ===== Scroll to Top ==== 
    jQuery('#totop').hide();

    $(window).on("scroll",function(){
        if (jQuery(this).scrollTop() >= 500) {        // If page is scrolled more than 50px
            jQuery('#totop').fadeIn(200);    // Fade in the arrow
            jQuery('#totop').addClass('top-visible');
        } else {
            jQuery('#totop').fadeOut(200);   // Else fade out the arrow
            jQuery('#totop').removeClass('top-visible');
        }
    });

    jQuery('#totop').on("click",function() {      // When arrow is clicked
        jQuery('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
        return false;
    });



});

// menu

(function(){
    //all menus
    var dropDownMenus = document.getElementsByClassName("lateralDropDownContainer");

    for (let i = 0; i < dropDownMenus.length; i++) {

        //all dropMenu in this menu
        let dropDownItems = dropDownMenus[i].getElementsByClassName("dropDownItem");

        for(let j = 0; j < dropDownItems.length; j++){

            //button
            let accordionMenu = dropDownItems[j].getElementsByClassName("accordionMenu")[0];
            
            //if sub content
            if(accordionMenu.nextElementSibling != null){
                accordionMenu.dropDownItem = dropDownItems[j];//save parent

                accordionMenu.addEventListener("click", function() {
                    this.dropDownItem.classList.toggle("active");
    
                    var panel = this.nextElementSibling;
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                    } 
                });
            }
        }   
    }
})();

/*----  Functions  ----*/
function tm_pfbox_animation() {
    const tmPfItem = gsap.utils.toArray(".prt-pfbox-view-style5");
    tmPfItem.forEach((target) => {
        const tm_fimg = target.querySelector('.tm-animation-hover-img');
        const t1 = gsap.timeline();
        t1.to(tm_fimg, {
            opacity: 1,
            duration: 0.4,
            scale: 1,
            ease: "Power2.easeOut"
        })
        target.tmpf_hover = t1.play().reversed(true);
        target.addEventListener("mouseenter", tmpfitem);
        target.addEventListener("mouseleave", tmpfitem);
        target.addEventListener("mousemove", (e) => {
            let xpos = e.offsetX;
            let ypos = e.offsetY;
            const t1 = gsap.timeline();
            t1.to(tm_fimg, { x: xpos, y: ypos });
            stagger: 5000
        });
    });

    function tmpfitem() {
        this.tmpf_hover.reversed(!this.tmpf_hover.reversed());
    }
}

jQuery(window).on("load", function() {
    tm_pfbox_animation(); 
    gsap.delayedCall(1, () =>
        ScrollTrigger.getAll().forEach((t) => {
            t.refresh();
        })
    );
});


window.Drupal = { behaviors: {}, locale: {} };

(function (Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };

  Drupal.formatString = function (str, args) {
    var processedArgs = {};

    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        case '!':
          processedArgs[key] = args[key];
          break;

        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });

    return Drupal.stringReplace(str, processedArgs, null);
  };

  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});

      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }

    if (keys.length === 0) {
      return str;
    }

    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };

  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    urlParsingNode.setAttribute('href', url);

    return urlParsingNode.cloneNode(false).href;
  };

  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = window.location.protocol;

    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    var baseUrl = protocol + '//' + window.location.host + drupalSettings.path.baseUrl.slice(0, -1);

    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}
    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}

    return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0;
  };

  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;

    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  Drupal.deprecationError = function (_ref) {
    var message = _ref.message;

    if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
      console.warn('[Deprecation] ' + message);
    }
  };

  Drupal.deprecatedProperty = function (_ref2) {
    var target = _ref2.target,
        deprecatedProperty = _ref2.deprecatedProperty,
        message = _ref2.message;

    if (!Proxy || !Reflect) {
      return target;
    }

    return new Proxy(target, {
      get: function get(target, key) {
        for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          rest[_key - 2] = arguments[_key];
        }

        if (key === deprecatedProperty) {
          Drupal.deprecationError({ message: message });
        }
        return Reflect.get.apply(Reflect, [target, key].concat(rest));
      }
    });
  };

  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;

      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };

  Drupal.theme.placeholder = function (str) {
    return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
  };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;



document.documentElement.className += ' js';

(function (Drupal, drupalSettings) {
  var domReady = function domReady(callback) {
    if (document.readyState !== 'loading') {
      callback();
    } else {
      var listener = function listener() {
        callback();
        document.removeEventListener('DOMContentLoaded', listener);
      };
      document.addEventListener('DOMContentLoaded', listener);
    }
  };

  domReady(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);;

!function(n){var i={};function o(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,n){n(22),e.exports=n(21)},function(e,t,n){var i,o,s;function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/*! Select2 4.0.10 | https://github.com/select2/select2/blob/master/LICENSE.md */o=[n(2)],void 0===(s="function"==typeof(i=function(u){var e=function(){if(u&&u.fn&&u.fn.select2&&u.fn.select2.amd)var e=u.fn.select2.amd;var t,n,i,h,s,r,f,g,m,v,y,b,o,a,_;function w(e,t){return o.call(e,t)}function l(e,t){var n,i,o,s,r,a,l,c,u,d,p,h=t&&t.split("/"),f=y.map,g=f&&f["*"]||{};if(e){for(r=(e=e.split("/")).length-1,y.nodeIdCompat&&_.test(e[r])&&(e[r]=e[r].replace(_,"")),"."===e[0].charAt(0)&&h&&(e=h.slice(0,h.length-1).concat(e)),u=0;u<e.length;u++)if("."===(p=e[u]))e.splice(u,1),u-=1;else if(".."===p){if(0===u||1===u&&".."===e[2]||".."===e[u-1])continue;0<u&&(e.splice(u-1,2),u-=2)}e=e.join("/")}if((h||g)&&f){for(u=(n=e.split("/")).length;0<u;u-=1){if(i=n.slice(0,u).join("/"),h)for(d=h.length;0<d;d-=1)if(o=(o=f[h.slice(0,d).join("/")])&&o[i]){s=o,a=u;break}if(s)break;!l&&g&&g[i]&&(l=g[i],c=u)}!s&&l&&(s=l,a=c),s&&(n.splice(0,a,s),e=n.join("/"))}return e}function C(t,n){return function(){var e=a.call(arguments,0);return"string"!=typeof e[0]&&1===e.length&&e.push(null),r.apply(h,e.concat([t,n]))}}function x(t){return function(e){m[t]=e}}function A(e){if(w(v,e)){var t=v[e];delete v[e],b[e]=!0,s.apply(h,t)}if(!w(m,e)&&!w(b,e))throw new Error("No "+e);return m[e]}function c(e){var t,n=e?e.indexOf("!"):-1;return-1<n&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function S(e){return e?c(e):[]}return e&&e.requirejs||(e?n=e:e={},m={},v={},y={},b={},o=Object.prototype.hasOwnProperty,a=[].slice,_=/\.js$/,f=function(e,t){var n,i=c(e),o=i[0],s=t[1];return e=i[1],o&&(n=A(o=l(o,s))),o?e=n&&n.normalize?n.normalize(e,function(t){return function(e){return l(e,t)}}(s)):l(e,s):(o=(i=c(e=l(e,s)))[0],e=i[1],o&&(n=A(o))),{f:o?o+"!"+e:e,n:e,pr:o,p:n}},g={require:function(e){return C(e)},exports:function(e){var t=m[e];return void 0!==t?t:m[e]={}},module:function(e){return{id:e,uri:"",exports:m[e],config:function(e){return function(){return y&&y.config&&y.config[e]||{}}}(e)}}},s=function(e,t,n,i){var o,s,r,a,l,c,u,d=[],p=k(n);if(c=S(i=i||e),"undefined"==p||"function"==p){for(t=!t.length&&n.length?["require","exports","module"]:t,l=0;l<t.length;l+=1)if("require"===(s=(a=f(t[l],c)).f))d[l]=g.require(e);else if("exports"===s)d[l]=g.exports(e),u=!0;else if("module"===s)o=d[l]=g.module(e);else if(w(m,s)||w(v,s)||w(b,s))d[l]=A(s);else{if(!a.p)throw new Error(e+" missing "+s);a.p.load(a.n,C(i,!0),x(s),{}),d[l]=m[s]}r=n?n.apply(m[e],d):void 0,e&&(o&&o.exports!==h&&o.exports!==m[e]?m[e]=o.exports:r===h&&u||(m[e]=r))}else e&&(m[e]=n)},t=n=r=function(e,t,n,i,o){if("string"==typeof e)return g[e]?g[e](t):A(f(e,S(t)).f);if(!e.splice){if((y=e).deps&&r(y.deps,y.callback),!t)return;t.splice?(e=t,t=n,n=null):e=h}return t=t||function(){},"function"==typeof n&&(n=i,i=o),i?s(h,e,t,n):setTimeout(function(){s(h,e,t,n)},4),r},r.config=function(e){return r(e)},t._defined=m,(i=function(e,t,n){if("string"!=typeof e)throw new Error("See almond README: incorrect module build, no module name");t.splice||(n=t,t=[]),w(m,e)||w(v,e)||(v[e]=[e,t,n])}).amd={jQuery:!0},e.requirejs=t,e.require=n,e.define=i),e.define("almond",function(){}),e.define("jquery",[],function(){var e=u||$;return null==e&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),e}),e.define("select2/utils",["jquery"],function(s){var o={};function u(e){var t=e.prototype,n=[];for(var i in t)"function"==typeof t[i]&&"constructor"!==i&&n.push(i);return n}function e(){this.listeners={}}o.Extend=function(e,t){var n={}.hasOwnProperty;function i(){this.constructor=e}for(var o in t)n.call(t,o)&&(e[o]=t[o]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},o.Decorate=function(i,o){var e=u(o),t=u(i);function s(){var e=Array.prototype.unshift,t=o.prototype.constructor.length,n=i.prototype.constructor;0<t&&(e.call(arguments,i.prototype.constructor),n=o.prototype.constructor),n.apply(this,arguments)}o.displayName=i.displayName,s.prototype=new function(){this.constructor=s};for(var n=0;n<t.length;n++){var r=t[n];s.prototype[r]=i.prototype[r]}function a(e){var t=function(){};e in s.prototype&&(t=s.prototype[e]);var n=o.prototype[e];return function(){return Array.prototype.unshift.call(arguments,t),n.apply(this,arguments)}}for(var l=0;l<e.length;l++){var c=e[l];s.prototype[c]=a(c)}return s},e.prototype.on=function(e,t){this.listeners=this.listeners||{},e in this.listeners?this.listeners[e].push(t):this.listeners[e]=[t]},e.prototype.trigger=function(e){var t=Array.prototype.slice,n=t.call(arguments,1);this.listeners=this.listeners||{},null==n&&(n=[]),0===n.length&&n.push({}),(n[0]._type=e)in this.listeners&&this.invoke(this.listeners[e],t.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},e.prototype.invoke=function(e,t){for(var n=0,i=e.length;n<i;n++)e[n].apply(this,t)},o.Observable=e,o.generateChars=function(e){for(var t="",n=0;n<e;n++)t+=Math.floor(36*Math.random()).toString(36);return t},o.bind=function(e,t){return function(){e.apply(t,arguments)}},o._convertData=function(e){for(var t in e){var n=t.split("-"),i=e;if(1!==n.length){for(var o=0;o<n.length;o++){var s=n[o];(s=s.substring(0,1).toLowerCase()+s.substring(1))in i||(i[s]={}),o==n.length-1&&(i[s]=e[t]),i=i[s]}delete e[t]}}return e},o.hasScroll=function(e,t){var n=s(t),i=t.style.overflowX,o=t.style.overflowY;return(i!==o||"hidden"!==o&&"visible"!==o)&&("scroll"===i||"scroll"===o||n.innerHeight()<t.scrollHeight||n.innerWidth()<t.scrollWidth)},o.escapeMarkup=function(e){var t={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof e?e:String(e).replace(/[&<>"'\/\\]/g,function(e){return t[e]})},o.appendMany=function(e,t){if("1.7"===s.fn.jquery.substr(0,3)){var n=s();s.map(t,function(e){n=n.add(e)}),t=n}e.append(t)},o.__cache={};var n=0;return o.GetUniqueElementId=function(e){var t=e.getAttribute("data-select2-id");return null==t&&(e.id?(t=e.id,e.setAttribute("data-select2-id",t)):(e.setAttribute("data-select2-id",++n),t=n.toString())),t},o.StoreData=function(e,t,n){var i=o.GetUniqueElementId(e);o.__cache[i]||(o.__cache[i]={}),o.__cache[i][t]=n},o.GetData=function(e,t){var n=o.GetUniqueElementId(e);return t?o.__cache[n]&&null!=o.__cache[n][t]?o.__cache[n][t]:s(e).data(t):o.__cache[n]},o.RemoveData=function(e){var t=o.GetUniqueElementId(e);null!=o.__cache[t]&&delete o.__cache[t],e.removeAttribute("data-select2-id")},o}),e.define("select2/results",["jquery","./utils"],function(h,f){function i(e,t,n){this.$element=e,this.data=n,this.options=t,i.__super__.constructor.call(this)}return f.Extend(i,f.Observable),i.prototype.render=function(){var e=h('<ul class="select2-results__options" role="listbox"></ul>');return this.options.get("multiple")&&e.attr("aria-multiselectable","true"),this.$results=e},i.prototype.clear=function(){this.$results.empty()},i.prototype.displayMessage=function(e){var t=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var n=h('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),i=this.options.get("translations").get(e.message);n.append(t(i(e.args))),n[0].className+=" select2-results__message",this.$results.append(n)},i.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},i.prototype.append=function(e){this.hideLoading();var t=[];if(null!=e.results&&0!==e.results.length){e.results=this.sort(e.results);for(var n=0;n<e.results.length;n++){var i=e.results[n],o=this.option(i);t.push(o)}this.$results.append(t)}else 0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"})},i.prototype.position=function(e,t){t.find(".select2-results").append(e)},i.prototype.sort=function(e){return this.options.get("sorter")(e)},i.prototype.highlightFirstItem=function(){var e=this.$results.find(".select2-results__option[aria-selected]"),t=e.filter("[aria-selected=true]");0<t.length?t.first().trigger("mouseenter"):e.first().trigger("mouseenter"),this.ensureHighlightVisible()},i.prototype.setClasses=function(){var t=this;this.data.current(function(e){var i=h.map(e,function(e){return e.id.toString()});t.$results.find(".select2-results__option[aria-selected]").each(function(){var e=h(this),t=f.GetData(this,"data"),n=""+t.id;null!=t.element&&t.element.selected||null==t.element&&-1<h.inArray(n,i)?e.attr("aria-selected","true"):e.attr("aria-selected","false")})})},i.prototype.showLoading=function(e){this.hideLoading();var t={disabled:!0,loading:!0,text:this.options.get("translations").get("searching")(e)},n=this.option(t);n.className+=" loading-results",this.$results.prepend(n)},i.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},i.prototype.option=function(e){var t=document.createElement("li");t.className="select2-results__option";var n={role:"option","aria-selected":"false"},i=window.Element.prototype.matches||window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector;for(var o in(null!=e.element&&i.call(e.element,":disabled")||null==e.element&&e.disabled)&&(delete n["aria-selected"],n["aria-disabled"]="true"),null==e.id&&delete n["aria-selected"],null!=e._resultId&&(t.id=e._resultId),e.title&&(t.title=e.title),e.children&&(n.role="group",n["aria-label"]=e.text,delete n["aria-selected"]),n){var s=n[o];t.setAttribute(o,s)}if(e.children){var r=h(t),a=document.createElement("strong");a.className="select2-results__group",h(a),this.template(e,a);for(var l=[],c=0;c<e.children.length;c++){var u=e.children[c],d=this.option(u);l.push(d)}var p=h("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});p.append(l),r.append(a),r.append(p)}else this.template(e,t);return f.StoreData(t,"data",e),t},i.prototype.bind=function(t,e){var l=this,n=t.id+"-results";this.$results.attr("id",n),t.on("results:all",function(e){l.clear(),l.append(e.data),t.isOpen()&&(l.setClasses(),l.highlightFirstItem())}),t.on("results:append",function(e){l.append(e.data),t.isOpen()&&l.setClasses()}),t.on("query",function(e){l.hideMessages(),l.showLoading(e)}),t.on("select",function(){t.isOpen()&&(l.setClasses(),l.options.get("scrollAfterSelect")&&l.highlightFirstItem())}),t.on("unselect",function(){t.isOpen()&&(l.setClasses(),l.options.get("scrollAfterSelect")&&l.highlightFirstItem())}),t.on("open",function(){l.$results.attr("aria-expanded","true"),l.$results.attr("aria-hidden","false"),l.setClasses(),l.ensureHighlightVisible()}),t.on("close",function(){l.$results.attr("aria-expanded","false"),l.$results.attr("aria-hidden","true"),l.$results.removeAttr("aria-activedescendant")}),t.on("results:toggle",function(){var e=l.getHighlightedResults();0!==e.length&&e.trigger("mouseup")}),t.on("results:select",function(){var e=l.getHighlightedResults();if(0!==e.length){var t=f.GetData(e[0],"data");"true"==e.attr("aria-selected")?l.trigger("close",{}):l.trigger("select",{data:t})}}),t.on("results:previous",function(){var e=l.getHighlightedResults(),t=l.$results.find("[aria-selected]"),n=t.index(e);if(!(n<=0)){var i=n-1;0===e.length&&(i=0);var o=t.eq(i);o.trigger("mouseenter");var s=l.$results.offset().top,r=o.offset().top,a=l.$results.scrollTop()+(r-s);0===i?l.$results.scrollTop(0):r-s<0&&l.$results.scrollTop(a)}}),t.on("results:next",function(){var e=l.getHighlightedResults(),t=l.$results.find("[aria-selected]"),n=t.index(e)+1;if(!(n>=t.length)){var i=t.eq(n);i.trigger("mouseenter");var o=l.$results.offset().top+l.$results.outerHeight(!1),s=i.offset().top+i.outerHeight(!1),r=l.$results.scrollTop()+s-o;0===n?l.$results.scrollTop(0):o<s&&l.$results.scrollTop(r)}}),t.on("results:focus",function(e){e.element.addClass("select2-results__option--highlighted")}),t.on("results:message",function(e){l.displayMessage(e)}),h.fn.mousewheel&&this.$results.on("mousewheel",function(e){var t=l.$results.scrollTop(),n=l.$results.get(0).scrollHeight-t+e.deltaY,i=0<e.deltaY&&t-e.deltaY<=0,o=e.deltaY<0&&n<=l.$results.height();i?(l.$results.scrollTop(0),e.preventDefault(),e.stopPropagation()):o&&(l.$results.scrollTop(l.$results.get(0).scrollHeight-l.$results.height()),e.preventDefault(),e.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(e){var t=h(this),n=f.GetData(this,"data");"true"!==t.attr("aria-selected")?l.trigger("select",{originalEvent:e,data:n}):l.options.get("multiple")?l.trigger("unselect",{originalEvent:e,data:n}):l.trigger("close",{})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(e){var t=f.GetData(this,"data");l.getHighlightedResults().removeClass("select2-results__option--highlighted"),l.trigger("results:focus",{data:t,element:h(this)})})},i.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},i.prototype.destroy=function(){this.$results.remove()},i.prototype.ensureHighlightVisible=function(){var e=this.getHighlightedResults();if(0!==e.length){var t=this.$results.find("[aria-selected]").index(e),n=this.$results.offset().top,i=e.offset().top,o=this.$results.scrollTop()+(i-n),s=i-n;o-=2*e.outerHeight(!1),t<=2?this.$results.scrollTop(0):(s>this.$results.outerHeight()||s<0)&&this.$results.scrollTop(o)}},i.prototype.template=function(e,t){var n=this.options.get("templateResult"),i=this.options.get("escapeMarkup"),o=n(e,t);null==o?t.style.display="none":"string"==typeof o?t.innerHTML=i(o):h(t).append(o)},i}),e.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),e.define("select2/selection/base",["jquery","../utils","../keys"],function(n,i,o){function s(e,t){this.$element=e,this.options=t,s.__super__.constructor.call(this)}return i.Extend(s,i.Observable),s.prototype.render=function(){var e=n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=i.GetData(this.$element[0],"old-tabindex")?this._tabindex=i.GetData(this.$element[0],"old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),e.attr("title",this.$element.attr("title")),e.attr("tabindex",this._tabindex),e.attr("aria-disabled","false"),this.$selection=e},s.prototype.bind=function(e,t){var n=this,i=e.id+"-results";this.container=e,this.$selection.on("focus",function(e){n.trigger("focus",e)}),this.$selection.on("blur",function(e){n._handleBlur(e)}),this.$selection.on("keydown",function(e){n.trigger("keypress",e),e.which===o.SPACE&&e.preventDefault()}),e.on("results:focus",function(e){n.$selection.attr("aria-activedescendant",e.data._resultId)}),e.on("selection:update",function(e){n.update(e.data)}),e.on("open",function(){n.$selection.attr("aria-expanded","true"),n.$selection.attr("aria-owns",i),n._attachCloseHandler(e)}),e.on("close",function(){n.$selection.attr("aria-expanded","false"),n.$selection.removeAttr("aria-activedescendant"),n.$selection.removeAttr("aria-owns"),n.$selection.trigger("focus"),n._detachCloseHandler(e)}),e.on("enable",function(){n.$selection.attr("tabindex",n._tabindex),n.$selection.attr("aria-disabled","false")}),e.on("disable",function(){n.$selection.attr("tabindex","-1"),n.$selection.attr("aria-disabled","true")})},s.prototype._handleBlur=function(e){var t=this;window.setTimeout(function(){document.activeElement==t.$selection[0]||n.contains(t.$selection[0],document.activeElement)||t.trigger("blur",e)},1)},s.prototype._attachCloseHandler=function(e){n(document.body).on("mousedown.select2."+e.id,function(e){var t=n(e.target).closest(".select2");n(".select2.select2-container--open").each(function(){this!=t[0]&&i.GetData(this,"element").select2("close")})})},s.prototype._detachCloseHandler=function(e){n(document.body).off("mousedown.select2."+e.id)},s.prototype.position=function(e,t){t.find(".selection").append(e)},s.prototype.destroy=function(){this._detachCloseHandler(this.container)},s.prototype.update=function(e){throw new Error("The `update` method must be defined in child classes.")},s}),e.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(e,t,n,i){function o(){o.__super__.constructor.apply(this,arguments)}return n.Extend(o,t),o.prototype.render=function(){var e=o.__super__.render.call(this);return e.addClass("select2-selection--single"),e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),e},o.prototype.bind=function(t,e){var n=this;o.__super__.bind.apply(this,arguments);var i=t.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",i).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",i),this.$selection.on("mousedown",function(e){1===e.which&&n.trigger("toggle",{originalEvent:e})}),this.$selection.on("focus",function(e){}),this.$selection.on("blur",function(e){}),t.on("focus",function(e){t.isOpen()||n.$selection.trigger("focus")})},o.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},o.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},o.prototype.selectionContainer=function(){return e("<span></span>")},o.prototype.update=function(e){if(0!==e.length){var t=e[0],n=this.$selection.find(".select2-selection__rendered"),i=this.display(t,n);n.empty().append(i);var o=t.title||t.text;o?n.attr("title",o):n.removeAttr("title")}else this.clear()},o}),e.define("select2/selection/multiple",["jquery","./base","../utils"],function(o,e,l){function n(e,t){n.__super__.constructor.apply(this,arguments)}return l.Extend(n,e),n.prototype.render=function(){var e=n.__super__.render.call(this);return e.addClass("select2-selection--multiple"),e.html('<ul class="select2-selection__rendered"></ul>'),e},n.prototype.bind=function(e,t){var i=this;n.__super__.bind.apply(this,arguments),this.$selection.on("click",function(e){i.trigger("toggle",{originalEvent:e})}),this.$selection.on("click",".select2-selection__choice__remove",function(e){if(!i.options.get("disabled")){var t=o(this).parent(),n=l.GetData(t[0],"data");i.trigger("unselect",{originalEvent:e,data:n})}})},n.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},n.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},n.prototype.selectionContainer=function(){return o('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},n.prototype.update=function(e){if(this.clear(),0!==e.length){for(var t=[],n=0;n<e.length;n++){var i=e[n],o=this.selectionContainer(),s=this.display(i,o);o.append(s);var r=i.title||i.text;r&&o.attr("title",r),l.StoreData(o[0],"data",i),t.push(o)}var a=this.$selection.find(".select2-selection__rendered");l.appendMany(a,t)}},n}),e.define("select2/selection/placeholder",["../utils"],function(e){function t(e,t,n){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n)}return t.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},t.prototype.createPlaceholder=function(e,t){var n=this.selectionContainer();return n.html(this.display(t)),n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),n},t.prototype.update=function(e,t){var n=1==t.length&&t[0].id!=this.placeholder.id;if(1<t.length||n)return e.call(this,t);this.clear();var i=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(i)},t}),e.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(o,i,a){function e(){}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(e){i._handleClear(e)}),t.on("keypress",function(e){i._handleKeyboardClear(e,t)})},e.prototype._handleClear=function(e,t){if(!this.options.get("disabled")){var n=this.$selection.find(".select2-selection__clear");if(0!==n.length){t.stopPropagation();var i=a.GetData(n[0],"data"),o=this.$element.val();this.$element.val(this.placeholder.id);var s={data:i};if(this.trigger("clear",s),s.prevented)this.$element.val(o);else{for(var r=0;r<i.length;r++)if(s={data:i[r]},this.trigger("unselect",s),s.prevented)return void this.$element.val(o);this.$element.trigger("change"),this.trigger("toggle",{})}}}},e.prototype._handleKeyboardClear=function(e,t,n){n.isOpen()||t.which!=i.DELETE&&t.which!=i.BACKSPACE||this._handleClear(t)},e.prototype.update=function(e,t){if(e.call(this,t),!(0<this.$selection.find(".select2-selection__placeholder").length||0===t.length)){var n=this.options.get("translations").get("removeAllItems"),i=o('<span class="select2-selection__clear" title="'+n()+'">&times;</span>');a.StoreData(i[0],"data",t),this.$selection.find(".select2-selection__rendered").prepend(i)}},e}),e.define("select2/selection/search",["jquery","../utils","../keys"],function(i,a,l){function e(e,t,n){e.call(this,t,n)}return e.prototype.render=function(e){var t=i('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>');this.$searchContainer=t,this.$search=t.find("input");var n=e.call(this);return this._transferTabIndex(),n},e.prototype.bind=function(e,t,n){var i=this,o=t.id+"-results";e.call(this,t,n),t.on("open",function(){i.$search.attr("aria-controls",o),i.$search.trigger("focus")}),t.on("close",function(){i.$search.val(""),i.$search.removeAttr("aria-controls"),i.$search.removeAttr("aria-activedescendant"),i.$search.trigger("focus")}),t.on("enable",function(){i.$search.prop("disabled",!1),i._transferTabIndex()}),t.on("disable",function(){i.$search.prop("disabled",!0)}),t.on("focus",function(e){i.$search.trigger("focus")}),t.on("results:focus",function(e){e.data._resultId?i.$search.attr("aria-activedescendant",e.data._resultId):i.$search.removeAttr("aria-activedescendant")}),this.$selection.on("focusin",".select2-search--inline",function(e){i.trigger("focus",e)}),this.$selection.on("focusout",".select2-search--inline",function(e){i._handleBlur(e)}),this.$selection.on("keydown",".select2-search--inline",function(e){if(e.stopPropagation(),i.trigger("keypress",e),i._keyUpPrevented=e.isDefaultPrevented(),e.which===l.BACKSPACE&&""===i.$search.val()){var t=i.$searchContainer.prev(".select2-selection__choice");if(0<t.length){var n=a.GetData(t[0],"data");i.searchRemoveChoice(n),e.preventDefault()}}}),this.$selection.on("click",".select2-search--inline",function(e){i.$search.val()&&e.stopPropagation()});var s=document.documentMode,r=s&&s<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(e){r?i.$selection.off("input.search input.searchcheck"):i.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(e){if(r&&"input"===e.type)i.$selection.off("input.search input.searchcheck");else{var t=e.which;t!=l.SHIFT&&t!=l.CTRL&&t!=l.ALT&&t!=l.TAB&&i.handleSearch(e)}})},e.prototype._transferTabIndex=function(e){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},e.prototype.createPlaceholder=function(e,t){this.$search.attr("placeholder",t.text)},e.prototype.update=function(e,t){var n=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),e.call(this,t),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),n&&this.$search.trigger("focus")},e.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var e=this.$search.val();this.trigger("query",{term:e})}this._keyUpPrevented=!1},e.prototype.searchRemoveChoice=function(e,t){this.trigger("unselect",{data:t}),this.$search.val(t.text),this.handleSearch()},e.prototype.resizeSearch=function(){this.$search.css("width","25px");var e="";e=""!==this.$search.attr("placeholder")?this.$selection.find(".select2-selection__rendered").width():.75*(this.$search.val().length+1)+"em",this.$search.css("width",e)},e}),e.define("select2/selection/eventRelay",["jquery"],function(r){function e(){}return e.prototype.bind=function(e,t,n){var i=this,o=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],s=["opening","closing","selecting","unselecting","clearing"];e.call(this,t,n),t.on("*",function(e,t){if(-1!==r.inArray(e,o)){t=t||{};var n=r.Event("select2:"+e,{params:t});i.$element.trigger(n),-1!==r.inArray(e,s)&&(t.prevented=n.isDefaultPrevented())}})},e}),e.define("select2/translation",["jquery","require"],function(t,n){function i(e){this.dict=e||{}}return i.prototype.all=function(){return this.dict},i.prototype.get=function(e){return this.dict[e]},i.prototype.extend=function(e){this.dict=t.extend({},e.all(),this.dict)},i._cache={},i.loadPath=function(e){if(!(e in i._cache)){var t=n(e);i._cache[e]=t}return new i(i._cache[e])},i}),e.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Œ":"OE","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","œ":"oe","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ώ":"ω","ς":"σ","’":"'"}}),e.define("select2/data/base",["../utils"],function(i){function n(e,t){n.__super__.constructor.call(this)}return i.Extend(n,i.Observable),n.prototype.current=function(e){throw new Error("The `current` method must be defined in child classes.")},n.prototype.query=function(e,t){throw new Error("The `query` method must be defined in child classes.")},n.prototype.bind=function(e,t){},n.prototype.destroy=function(){},n.prototype.generateResultId=function(e,t){var n=e.id+"-result-";return n+=i.generateChars(4),null!=t.id?n+="-"+t.id.toString():n+="-"+i.generateChars(4),n},n}),e.define("select2/data/select",["./base","../utils","jquery"],function(e,a,l){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return a.Extend(n,e),n.prototype.current=function(e){var n=[],i=this;this.$element.find(":selected").each(function(){var e=l(this),t=i.item(e);n.push(t)}),e(n)},n.prototype.select=function(o){var s=this;if(o.selected=!0,l(o.element).is("option"))return o.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(e){var t=[];(o=[o]).push.apply(o,e);for(var n=0;n<o.length;n++){var i=o[n].id;-1===l.inArray(i,t)&&t.push(i)}s.$element.val(t),s.$element.trigger("change")});else{var e=o.id;this.$element.val(e),this.$element.trigger("change")}},n.prototype.unselect=function(o){var s=this;if(this.$element.prop("multiple")){if(o.selected=!1,l(o.element).is("option"))return o.element.selected=!1,void this.$element.trigger("change");this.current(function(e){for(var t=[],n=0;n<e.length;n++){var i=e[n].id;i!==o.id&&-1===l.inArray(i,t)&&t.push(i)}s.$element.val(t),s.$element.trigger("change")})}},n.prototype.bind=function(e,t){var n=this;(this.container=e).on("select",function(e){n.select(e.data)}),e.on("unselect",function(e){n.unselect(e.data)})},n.prototype.destroy=function(){this.$element.find("*").each(function(){a.RemoveData(this)})},n.prototype.query=function(i,e){var o=[],s=this;this.$element.children().each(function(){var e=l(this);if(e.is("option")||e.is("optgroup")){var t=s.item(e),n=s.matches(i,t);null!==n&&o.push(n)}}),e({results:o})},n.prototype.addOptions=function(e){a.appendMany(this.$element,e)},n.prototype.option=function(e){var t;e.children?(t=document.createElement("optgroup")).label=e.text:void 0!==(t=document.createElement("option")).textContent?t.textContent=e.text:t.innerText=e.text,void 0!==e.id&&(t.value=e.id),e.disabled&&(t.disabled=!0),e.selected&&(t.selected=!0),e.title&&(t.title=e.title);var n=l(t),i=this._normalizeItem(e);return i.element=t,a.StoreData(t,"data",i),n},n.prototype.item=function(e){var t={};if(null!=(t=a.GetData(e[0],"data")))return t;if(e.is("option"))t={id:e.val(),text:e.text(),disabled:e.prop("disabled"),selected:e.prop("selected"),title:e.prop("title")};else if(e.is("optgroup")){t={text:e.prop("label"),children:[],title:e.prop("title")};for(var n=e.children("option"),i=[],o=0;o<n.length;o++){var s=l(n[o]),r=this.item(s);i.push(r)}t.children=i}return(t=this._normalizeItem(t)).element=e[0],a.StoreData(e[0],"data",t),t},n.prototype._normalizeItem=function(e){return e!==Object(e)&&(e={id:e,text:e}),null!=(e=l.extend({},{text:""},e)).id&&(e.id=e.id.toString()),null!=e.text&&(e.text=e.text.toString()),null==e._resultId&&e.id&&null!=this.container&&(e._resultId=this.generateResultId(this.container,e)),l.extend({},{selected:!1,disabled:!1},e)},n.prototype.matches=function(e,t){return this.options.get("matcher")(e,t)},n}),e.define("select2/data/array",["./select","../utils","jquery"],function(e,f,g){function i(e,t){this._dataToConvert=t.get("data")||[],i.__super__.constructor.call(this,e,t)}return f.Extend(i,e),i.prototype.bind=function(e,t){i.__super__.bind.call(this,e,t),this.addOptions(this.convertToOptions(this._dataToConvert))},i.prototype.select=function(n){var e=this.$element.find("option").filter(function(e,t){return t.value==n.id.toString()});0===e.length&&(e=this.option(n),this.addOptions(e)),i.__super__.select.call(this,n)},i.prototype.convertToOptions=function(e){var t=this,n=this.$element.find("option"),i=n.map(function(){return t.item(g(this)).id}).get(),o=[];function s(e){return function(){return g(this).val()==e.id}}for(var r=0;r<e.length;r++){var a=this._normalizeItem(e[r]);if(0<=g.inArray(a.id,i)){var l=n.filter(s(a)),c=this.item(l),u=g.extend(!0,{},a,c),d=this.option(u);l.replaceWith(d)}else{var p=this.option(a);if(a.children){var h=this.convertToOptions(a.children);f.appendMany(p,h)}o.push(p)}}return o},i}),e.define("select2/data/ajax",["./array","../utils","jquery"],function(e,t,s){function n(e,t){this.ajaxOptions=this._applyDefaults(t.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),n.__super__.constructor.call(this,e,t)}return t.Extend(n,e),n.prototype._applyDefaults=function(e){var t={data:function(e){return s.extend({},e,{q:e.term})},transport:function(e,t,n){var i=s.ajax(e);return i.then(t),i.fail(n),i}};return s.extend({},t,e,!0)},n.prototype.processResults=function(e){return e},n.prototype.query=function(n,i){var o=this;null!=this._request&&(s.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var t=s.extend({type:"GET"},this.ajaxOptions);function e(){var e=t.transport(t,function(e){var t=o.processResults(e,n);o.options.get("debug")&&window.console&&console.error&&(t&&t.results&&s.isArray(t.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),i(t)},function(){"status"in e&&(0===e.status||"0"===e.status)||o.trigger("results:message",{message:"errorLoading"})});o._request=e}"function"==typeof t.url&&(t.url=t.url.call(this.$element,n)),"function"==typeof t.data&&(t.data=t.data.call(this.$element,n)),this.ajaxOptions.delay&&null!=n.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(e,this.ajaxOptions.delay)):e()},n}),e.define("select2/data/tags",["jquery"],function(u){function e(e,t,n){var i=n.get("tags"),o=n.get("createTag");void 0!==o&&(this.createTag=o);var s=n.get("insertTag");if(void 0!==s&&(this.insertTag=s),e.call(this,t,n),u.isArray(i))for(var r=0;r<i.length;r++){var a=i[r],l=this._normalizeItem(a),c=this.option(l);this.$element.append(c)}}return e.prototype.query=function(e,c,u){var d=this;this._removeOldTags(),null!=c.term&&null==c.page?e.call(this,c,function e(t,n){for(var i=t.results,o=0;o<i.length;o++){var s=i[o],r=null!=s.children&&!e({results:s.children},!0);if((s.text||"").toUpperCase()===(c.term||"").toUpperCase()||r)return!n&&(t.data=i,void u(t))}if(n)return!0;var a=d.createTag(c);if(null!=a){var l=d.option(a);l.attr("data-select2-tag",!0),d.addOptions([l]),d.insertTag(i,a)}t.results=i,u(t)}):e.call(this,c,u)},e.prototype.createTag=function(e,t){var n=u.trim(t.term);return""===n?null:{id:n,text:n}},e.prototype.insertTag=function(e,t,n){t.unshift(n)},e.prototype._removeOldTags=function(e){this.$element.find("option[data-select2-tag]").each(function(){this.selected||u(this).remove()})},e}),e.define("select2/data/tokenizer",["jquery"],function(d){function e(e,t,n){var i=n.get("tokenizer");void 0!==i&&(this.tokenizer=i),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){e.call(this,t,n),this.$search=t.dropdown.$search||t.selection.$search||n.find(".select2-search__field")},e.prototype.query=function(e,t,n){var i=this;t.term=t.term||"";var o=this.tokenizer(t,this.options,function(e){var t=i._normalizeItem(e);if(!i.$element.find("option").filter(function(){return d(this).val()===t.id}).length){var n=i.option(t);n.attr("data-select2-tag",!0),i._removeOldTags(),i.addOptions([n])}!function(e){i.trigger("select",{data:e})}(t)});o.term!==t.term&&(this.$search.length&&(this.$search.val(o.term),this.$search.trigger("focus")),t.term=o.term),e.call(this,t,n)},e.prototype.tokenizer=function(e,t,n,i){for(var o=n.get("tokenSeparators")||[],s=t.term,r=0,a=this.createTag||function(e){return{id:e.term,text:e.term}};r<s.length;){var l=s[r];if(-1!==d.inArray(l,o)){var c=s.substr(0,r),u=a(d.extend({},t,{term:c}));null!=u?(i(u),s=s.substr(r+1)||"",r=0):r++}else r++}return{term:s}},e}),e.define("select2/data/minimumInputLength",[],function(){function e(e,t,n){this.minimumInputLength=n.get("minimumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",t.term.length<this.minimumInputLength?this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),e.define("select2/data/maximumInputLength",[],function(){function e(e,t,n){this.maximumInputLength=n.get("maximumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",0<this.maximumInputLength&&t.term.length>this.maximumInputLength?this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),e.define("select2/data/maximumSelectionLength",[],function(){function e(e,t,n){this.maximumSelectionLength=n.get("maximumSelectionLength"),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("select",function(){i._checkIfMaximumSelected()})},e.prototype.query=function(e,t,n){var i=this;this._checkIfMaximumSelected(function(){e.call(i,t,n)})},e.prototype._checkIfMaximumSelected=function(e,n){var i=this;this.current(function(e){var t=null!=e?e.length:0;0<i.maximumSelectionLength&&t>=i.maximumSelectionLength?i.trigger("results:message",{message:"maximumSelected",args:{maximum:i.maximumSelectionLength}}):n&&n()})},e}),e.define("select2/dropdown",["jquery","./utils"],function(t,e){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return e.Extend(n,e.Observable),n.prototype.render=function(){var e=t('<span class="select2-dropdown"><span class="select2-results"></span></span>');return e.attr("dir",this.options.get("dir")),this.$dropdown=e},n.prototype.bind=function(){},n.prototype.position=function(e,t){},n.prototype.destroy=function(){this.$dropdown.remove()},n}),e.define("select2/dropdown/search",["jquery","../utils"],function(s,e){function t(){}return t.prototype.render=function(e){var t=e.call(this),n=s('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');return this.$searchContainer=n,this.$search=n.find("input"),t.prepend(n),t},t.prototype.bind=function(e,t,n){var i=this,o=t.id+"-results";e.call(this,t,n),this.$search.on("keydown",function(e){i.trigger("keypress",e),i._keyUpPrevented=e.isDefaultPrevented()}),this.$search.on("input",function(e){s(this).off("keyup")}),this.$search.on("keyup input",function(e){i.handleSearch(e)}),t.on("open",function(){i.$search.attr("tabindex",0),i.$search.attr("aria-controls",o),i.$search.trigger("focus"),window.setTimeout(function(){i.$search.trigger("focus")},0)}),t.on("close",function(){i.$search.attr("tabindex",-1),i.$search.removeAttr("aria-controls"),i.$search.removeAttr("aria-activedescendant"),i.$search.val(""),i.$search.trigger("blur")}),t.on("focus",function(){t.isOpen()||i.$search.trigger("focus")}),t.on("results:all",function(e){null!=e.query.term&&""!==e.query.term||(i.showSearch(e)?i.$searchContainer.removeClass("select2-search--hide"):i.$searchContainer.addClass("select2-search--hide"))}),t.on("results:focus",function(e){e.data._resultId?i.$search.attr("aria-activedescendant",e.data._resultId):i.$search.removeAttr("aria-activedescendant")})},t.prototype.handleSearch=function(e){if(!this._keyUpPrevented){var t=this.$search.val();this.trigger("query",{term:t})}this._keyUpPrevented=!1},t.prototype.showSearch=function(e,t){return!0},t}),e.define("select2/dropdown/hidePlaceholder",[],function(){function e(e,t,n,i){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n,i)}return e.prototype.append=function(e,t){t.results=this.removePlaceholder(t.results),e.call(this,t)},e.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},e.prototype.removePlaceholder=function(e,t){for(var n=t.slice(0),i=t.length-1;0<=i;i--){var o=t[i];this.placeholder.id===o.id&&n.splice(i,1)}return n},e}),e.define("select2/dropdown/infiniteScroll",["jquery"],function(n){function e(e,t,n,i){this.lastParams={},e.call(this,t,n,i),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return e.prototype.append=function(e,t){this.$loadingMore.remove(),this.loading=!1,e.call(this,t),this.showLoadingMore(t)&&(this.$results.append(this.$loadingMore),this.loadMoreIfNeeded())},e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("query",function(e){i.lastParams=e,i.loading=!0}),t.on("query:append",function(e){i.lastParams=e,i.loading=!0}),this.$results.on("scroll",this.loadMoreIfNeeded.bind(this))},e.prototype.loadMoreIfNeeded=function(){var e=n.contains(document.documentElement,this.$loadingMore[0]);if(!this.loading&&e){var t=this.$results.offset().top+this.$results.outerHeight(!1);this.$loadingMore.offset().top+this.$loadingMore.outerHeight(!1)<=t+50&&this.loadMore()}},e.prototype.loadMore=function(){this.loading=!0;var e=n.extend({},{page:1},this.lastParams);e.page++,this.trigger("query:append",e)},e.prototype.showLoadingMore=function(e,t){return t.pagination&&t.pagination.more},e.prototype.createLoadingMore=function(){var e=n('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),t=this.options.get("translations").get("loadingMore");return e.html(t(this.lastParams)),e},e}),e.define("select2/dropdown/attachBody",["jquery","../utils"],function(f,a){function e(e,t,n){this.$dropdownParent=f(n.get("dropdownParent")||document.body),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("open",function(){i._showDropdown(),i._attachPositioningHandler(t),i._bindContainerResultHandlers(t)}),t.on("close",function(){i._hideDropdown(),i._detachPositioningHandler(t)}),this.$dropdownContainer.on("mousedown",function(e){e.stopPropagation()})},e.prototype.destroy=function(e){e.call(this),this.$dropdownContainer.remove()},e.prototype.position=function(e,t,n){t.attr("class",n.attr("class")),t.removeClass("select2"),t.addClass("select2-container--open"),t.css({position:"absolute",top:-999999}),this.$container=n},e.prototype.render=function(e){var t=f("<span></span>"),n=e.call(this);return t.append(n),this.$dropdownContainer=t},e.prototype._hideDropdown=function(e){this.$dropdownContainer.detach()},e.prototype._bindContainerResultHandlers=function(e,t){if(!this._containerResultsHandlersBound){var n=this;t.on("results:all",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("results:append",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("results:message",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("select",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("unselect",function(){n._positionDropdown(),n._resizeDropdown()}),this._containerResultsHandlersBound=!0}},e.prototype._attachPositioningHandler=function(e,t){var n=this,i="scroll.select2."+t.id,o="resize.select2."+t.id,s="orientationchange.select2."+t.id,r=this.$container.parents().filter(a.hasScroll);r.each(function(){a.StoreData(this,"select2-scroll-position",{x:f(this).scrollLeft(),y:f(this).scrollTop()})}),r.on(i,function(e){var t=a.GetData(this,"select2-scroll-position");f(this).scrollTop(t.y)}),f(window).on(i+" "+o+" "+s,function(e){n._positionDropdown(),n._resizeDropdown()})},e.prototype._detachPositioningHandler=function(e,t){var n="scroll.select2."+t.id,i="resize.select2."+t.id,o="orientationchange.select2."+t.id;this.$container.parents().filter(a.hasScroll).off(n),f(window).off(n+" "+i+" "+o)},e.prototype._positionDropdown=function(){var e=f(window),t=this.$dropdown.hasClass("select2-dropdown--above"),n=this.$dropdown.hasClass("select2-dropdown--below"),i=null,o=this.$container.offset();o.bottom=o.top+this.$container.outerHeight(!1);var s={height:this.$container.outerHeight(!1)};s.top=o.top,s.bottom=o.top+s.height;var r=this.$dropdown.outerHeight(!1),a=e.scrollTop(),l=e.scrollTop()+e.height(),c=a<o.top-r,u=l>o.bottom+r,d={left:o.left,top:s.bottom},p=this.$dropdownParent;"static"===p.css("position")&&(p=p.offsetParent());var h=p.offset();d.top-=h.top,d.left-=h.left,t||n||(i="below"),u||!c||t?!c&&u&&t&&(i="below"):i="above",("above"==i||t&&"below"!==i)&&(d.top=s.top-h.top-r),null!=i&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+i),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+i)),this.$dropdownContainer.css(d)},e.prototype._resizeDropdown=function(){var e={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(e.minWidth=e.width,e.position="relative",e.width="auto"),this.$dropdown.css(e)},e.prototype._showDropdown=function(e){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},e}),e.define("select2/dropdown/minimumResultsForSearch",[],function(){function e(e,t,n,i){this.minimumResultsForSearch=n.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),e.call(this,t,n,i)}return e.prototype.showSearch=function(e,t){return!(function e(t){for(var n=0,i=0;i<t.length;i++){var o=t[i];o.children?n+=e(o.children):n++}return n}(t.data.results)<this.minimumResultsForSearch)&&e.call(this,t)},e}),e.define("select2/dropdown/selectOnClose",["../utils"],function(s){function e(){}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("close",function(e){i._handleSelectOnClose(e)})},e.prototype._handleSelectOnClose=function(e,t){if(t&&null!=t.originalSelect2Event){var n=t.originalSelect2Event;if("select"===n._type||"unselect"===n._type)return}var i=this.getHighlightedResults();if(!(i.length<1)){var o=s.GetData(i[0],"data");null!=o.element&&o.element.selected||null==o.element&&o.selected||this.trigger("select",{data:o})}},e}),e.define("select2/dropdown/closeOnSelect",[],function(){function e(){}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("select",function(e){i._selectTriggered(e)}),t.on("unselect",function(e){i._selectTriggered(e)})},e.prototype._selectTriggered=function(e,t){var n=t.originalEvent;n&&(n.ctrlKey||n.metaKey)||this.trigger("close",{originalEvent:n,originalSelect2Event:t})},e}),e.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(e){var t=e.input.length-e.maximum,n="Please delete "+t+" character";return 1!=t&&(n+="s"),n},inputTooShort:function(e){return"Please enter "+(e.minimum-e.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(e){var t="You can only select "+e.maximum+" item";return 1!=e.maximum&&(t+="s"),t},noResults:function(){return"No results found"},searching:function(){return"Searching…"},removeAllItems:function(){return"Remove all items"}}}),e.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(c,u,d,p,h,f,g,m,v,y,r,t,b,_,w,$,C,x,A,S,k,D,O,E,j,T,P,I,e){function n(){this.reset()}return n.prototype.apply=function(e){if(null==(e=c.extend(!0,{},this.defaults,e)).dataAdapter){if(null!=e.ajax?e.dataAdapter=w:null!=e.data?e.dataAdapter=_:e.dataAdapter=b,0<e.minimumInputLength&&(e.dataAdapter=y.Decorate(e.dataAdapter,x)),0<e.maximumInputLength&&(e.dataAdapter=y.Decorate(e.dataAdapter,A)),0<e.maximumSelectionLength&&(e.dataAdapter=y.Decorate(e.dataAdapter,S)),e.tags&&(e.dataAdapter=y.Decorate(e.dataAdapter,$)),null==e.tokenSeparators&&null==e.tokenizer||(e.dataAdapter=y.Decorate(e.dataAdapter,C)),null!=e.query){var t=u(e.amdBase+"compat/query");e.dataAdapter=y.Decorate(e.dataAdapter,t)}if(null!=e.initSelection){var n=u(e.amdBase+"compat/initSelection");e.dataAdapter=y.Decorate(e.dataAdapter,n)}}if(null==e.resultsAdapter&&(e.resultsAdapter=d,null!=e.ajax&&(e.resultsAdapter=y.Decorate(e.resultsAdapter,E)),null!=e.placeholder&&(e.resultsAdapter=y.Decorate(e.resultsAdapter,O)),e.selectOnClose&&(e.resultsAdapter=y.Decorate(e.resultsAdapter,P))),null==e.dropdownAdapter){if(e.multiple)e.dropdownAdapter=k;else{var i=y.Decorate(k,D);e.dropdownAdapter=i}if(0!==e.minimumResultsForSearch&&(e.dropdownAdapter=y.Decorate(e.dropdownAdapter,T)),e.closeOnSelect&&(e.dropdownAdapter=y.Decorate(e.dropdownAdapter,I)),null!=e.dropdownCssClass||null!=e.dropdownCss||null!=e.adaptDropdownCssClass){var o=u(e.amdBase+"compat/dropdownCss");e.dropdownAdapter=y.Decorate(e.dropdownAdapter,o)}e.dropdownAdapter=y.Decorate(e.dropdownAdapter,j)}if(null==e.selectionAdapter){if(e.multiple?e.selectionAdapter=h:e.selectionAdapter=p,null!=e.placeholder&&(e.selectionAdapter=y.Decorate(e.selectionAdapter,f)),e.allowClear&&(e.selectionAdapter=y.Decorate(e.selectionAdapter,g)),e.multiple&&(e.selectionAdapter=y.Decorate(e.selectionAdapter,m)),null!=e.containerCssClass||null!=e.containerCss||null!=e.adaptContainerCssClass){var s=u(e.amdBase+"compat/containerCss");e.selectionAdapter=y.Decorate(e.selectionAdapter,s)}e.selectionAdapter=y.Decorate(e.selectionAdapter,v)}e.language=this._resolveLanguage(e.language),e.language.push("en");for(var r=[],a=0;a<e.language.length;a++){var l=e.language[a];-1===r.indexOf(l)&&r.push(l)}return e.language=r,e.translations=this._processTranslations(e.language,e.debug),e},n.prototype.reset=function(){function a(e){return e.replace(/[^\u0000-\u007E]/g,function(e){return t[e]||e})}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:y.escapeMarkup,language:{},matcher:function e(t,n){if(""===c.trim(t.term))return n;if(n.children&&0<n.children.length){for(var i=c.extend(!0,{},n),o=n.children.length-1;0<=o;o--)null==e(t,n.children[o])&&i.children.splice(o,1);return 0<i.children.length?i:e(t,i)}var s=a(n.text).toUpperCase(),r=a(t.term).toUpperCase();return-1<s.indexOf(r)?n:null},minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,scrollAfterSelect:!1,sorter:function(e){return e},templateResult:function(e){return e.text},templateSelection:function(e){return e.text},theme:"default",width:"resolve"}},n.prototype.applyFromElement=function(e,t){var n=e.language,i=this.defaults.language,o=t.prop("lang"),s=t.closest("[lang]").prop("lang"),r=Array.prototype.concat.call(this._resolveLanguage(o),this._resolveLanguage(n),this._resolveLanguage(i),this._resolveLanguage(s));return e.language=r,e},n.prototype._resolveLanguage=function(e){if(!e)return[];if(c.isEmptyObject(e))return[];if(c.isPlainObject(e))return[e];var t;t=c.isArray(e)?e:[e];for(var n=[],i=0;i<t.length;i++)if(n.push(t[i]),"string"==typeof t[i]&&0<t[i].indexOf("-")){var o=t[i].split("-")[0];n.push(o)}return n},n.prototype._processTranslations=function(e,t){for(var n=new r,i=0;i<e.length;i++){var o=new r,s=e[i];if("string"==typeof s)try{o=r.loadPath(s)}catch(e){try{s=this.defaults.amdLanguageBase+s,o=r.loadPath(s)}catch(e){t&&window.console&&console.warn&&console.warn('Select2: The language file for "'+s+'" could not be automatically loaded. A fallback will be used instead.')}}else o=c.isPlainObject(s)?new r(s):s;n.extend(o)}return n},n.prototype.set=function(e,t){var n={};n[c.camelCase(e)]=t;var i=y._convertData(n);c.extend(!0,this.defaults,i)},new n}),e.define("select2/options",["require","jquery","./defaults","./utils"],function(i,d,o,p){function e(e,t){if(this.options=e,null!=t&&this.fromElement(t),null!=t&&(this.options=o.applyFromElement(this.options,t)),this.options=o.apply(this.options),t&&t.is("input")){var n=i(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=p.Decorate(this.options.dataAdapter,n)}}return e.prototype.fromElement=function(e){var t=["select2"];null==this.options.multiple&&(this.options.multiple=e.prop("multiple")),null==this.options.disabled&&(this.options.disabled=e.prop("disabled")),null==this.options.dir&&(e.prop("dir")?this.options.dir=e.prop("dir"):e.closest("[dir]").prop("dir")?this.options.dir=e.closest("[dir]").prop("dir"):this.options.dir="ltr"),e.prop("disabled",this.options.disabled),e.prop("multiple",this.options.multiple),p.GetData(e[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),p.StoreData(e[0],"data",p.GetData(e[0],"select2Tags")),p.StoreData(e[0],"tags",!0)),p.GetData(e[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),e.attr("ajax--url",p.GetData(e[0],"ajaxUrl")),p.StoreData(e[0],"ajax-Url",p.GetData(e[0],"ajaxUrl")));var n={};function i(e,t){return t.toUpperCase()}for(var o=0;o<e[0].attributes.length;o++){var s=e[0].attributes[o].name,r="data-";if(s.substr(0,r.length)==r){var a=s.substring(r.length),l=p.GetData(e[0],a);n[a.replace(/-([a-z])/g,i)]=l}}d.fn.jquery&&"1."==d.fn.jquery.substr(0,2)&&e[0].dataset&&(n=d.extend(!0,{},e[0].dataset,n));var c=d.extend(!0,{},p.GetData(e[0]),n);for(var u in c=p._convertData(c))-1<d.inArray(u,t)||(d.isPlainObject(this.options[u])?d.extend(this.options[u],c[u]):this.options[u]=c[u]);return this},e.prototype.get=function(e){return this.options[e]},e.prototype.set=function(e,t){this.options[e]=t},e}),e.define("select2/core",["jquery","./options","./utils","./keys"],function(o,u,d,i){var r=function e(t,n){null!=d.GetData(t[0],"select2")&&d.GetData(t[0],"select2").destroy(),this.$element=t,this.id=this._generateId(t),n=n||{},this.options=new u(n,t),e.__super__.constructor.call(this);var i=t.attr("tabindex")||0;d.StoreData(t[0],"old-tabindex",i),t.attr("tabindex","-1");var o=this.options.get("dataAdapter");this.dataAdapter=new o(t,this.options);var s=this.render();this._placeContainer(s);var r=this.options.get("selectionAdapter");this.selection=new r(t,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,s);var a=this.options.get("dropdownAdapter");this.dropdown=new a(t,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,s);var l=this.options.get("resultsAdapter");this.results=new l(t,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var c=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(e){c.trigger("selection:update",{data:e})}),t.addClass("select2-hidden-accessible"),t.attr("aria-hidden","true"),this._syncAttributes(),d.StoreData(t[0],"select2",this),t.data("select2",this)};return d.Extend(r,d.Observable),r.prototype._generateId=function(e){return"select2-"+(null!=e.attr("id")?e.attr("id"):null!=e.attr("name")?e.attr("name")+"-"+d.generateChars(2):d.generateChars(4)).replace(/(:|\.|\[|\]|,)/g,"")},r.prototype._placeContainer=function(e){e.insertAfter(this.$element);var t=this._resolveWidth(this.$element,this.options.get("width"));null!=t&&e.css("width",t)},r.prototype._resolveWidth=function(e,t){var n=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==t){var i=this._resolveWidth(e,"style");return null!=i?i:this._resolveWidth(e,"element")}if("element"==t){var o=e.outerWidth(!1);return o<=0?"auto":o+"px"}if("style"!=t)return"computedstyle"!=t?t:window.getComputedStyle(e[0]).width;var s=e.attr("style");if("string"!=typeof s)return null;for(var r=s.split(";"),a=0,l=r.length;a<l;a+=1){var c=r[a].replace(/\s/g,"").match(n);if(null!==c&&1<=c.length)return c[1]}return null},r.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},r.prototype._registerDomEvents=function(){var t=this;this.$element.on("change.select2",function(){t.dataAdapter.current(function(e){t.trigger("selection:update",{data:e})})}),this.$element.on("focus.select2",function(e){t.trigger("focus",e)}),this._syncA=d.bind(this._syncAttributes,this),this._syncS=d.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=e?(this._observer=new e(function(e){o.each(e,t._syncA),o.each(e,t._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",t._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",t._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",t._syncS,!1))},r.prototype._registerDataEvents=function(){var n=this;this.dataAdapter.on("*",function(e,t){n.trigger(e,t)})},r.prototype._registerSelectionEvents=function(){var n=this,i=["toggle","focus"];this.selection.on("toggle",function(){n.toggleDropdown()}),this.selection.on("focus",function(e){n.focus(e)}),this.selection.on("*",function(e,t){-1===o.inArray(e,i)&&n.trigger(e,t)})},r.prototype._registerDropdownEvents=function(){var n=this;this.dropdown.on("*",function(e,t){n.trigger(e,t)})},r.prototype._registerResultsEvents=function(){var n=this;this.results.on("*",function(e,t){n.trigger(e,t)})},r.prototype._registerEvents=function(){var n=this;this.on("open",function(){n.$container.addClass("select2-container--open")}),this.on("close",function(){n.$container.removeClass("select2-container--open")}),this.on("enable",function(){n.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){n.$container.addClass("select2-container--disabled")}),this.on("blur",function(){n.$container.removeClass("select2-container--focus")}),this.on("query",function(t){n.isOpen()||n.trigger("open",{}),this.dataAdapter.query(t,function(e){n.trigger("results:all",{data:e,query:t})})}),this.on("query:append",function(t){this.dataAdapter.query(t,function(e){n.trigger("results:append",{data:e,query:t})})}),this.on("keypress",function(e){var t=e.which;n.isOpen()?t===i.ESC||t===i.TAB||t===i.UP&&e.altKey?(n.close(),e.preventDefault()):t===i.ENTER?(n.trigger("results:select",{}),e.preventDefault()):t===i.SPACE&&e.ctrlKey?(n.trigger("results:toggle",{}),e.preventDefault()):t===i.UP?(n.trigger("results:previous",{}),e.preventDefault()):t===i.DOWN&&(n.trigger("results:next",{}),e.preventDefault()):(t===i.ENTER||t===i.SPACE||t===i.DOWN&&e.altKey)&&(n.open(),e.preventDefault())})},r.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},r.prototype._syncSubtree=function(e,t){var n=!1,i=this;if(!e||!e.target||"OPTION"===e.target.nodeName||"OPTGROUP"===e.target.nodeName){if(t)if(t.addedNodes&&0<t.addedNodes.length)for(var o=0;o<t.addedNodes.length;o++)t.addedNodes[o].selected&&(n=!0);else t.removedNodes&&0<t.removedNodes.length&&(n=!0);else n=!0;n&&this.dataAdapter.current(function(e){i.trigger("selection:update",{data:e})})}},r.prototype.trigger=function(e,t){var n=r.__super__.trigger,i={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(void 0===t&&(t={}),e in i){var o=i[e],s={prevented:!1,name:e,args:t};if(n.call(this,o,s),s.prevented)return void(t.prevented=!0)}n.call(this,e,t)},r.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},r.prototype.open=function(){this.isOpen()||this.trigger("query",{})},r.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},r.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},r.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},r.prototype.focus=function(e){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},r.prototype.enable=function(e){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=e&&0!==e.length||(e=[!0]);var t=!e[0];this.$element.prop("disabled",t)},r.prototype.data=function(){this.options.get("debug")&&0<arguments.length&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var t=[];return this.dataAdapter.current(function(e){t=e}),t},r.prototype.val=function(e){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==e||0===e.length)return this.$element.val();var t=e[0];o.isArray(t)&&(t=o.map(t,function(e){return e.toString()})),this.$element.val(t).trigger("change")},r.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",d.GetData(this.$element[0],"old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),d.RemoveData(this.$element[0]),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},r.prototype.render=function(){var e=o('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return e.attr("dir",this.options.get("dir")),this.$container=e,this.$container.addClass("select2-container--"+this.options.get("theme")),d.StoreData(e[0],"element",this.$element),e},r}),e.define("jquery-mousewheel",["jquery"],function(e){return e}),e.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(o,e,s,t,r){if(null==o.fn.select2){var a=["open","close","destroy"];o.fn.select2=function(t){if("object"==k(t=t||{}))return this.each(function(){var e=o.extend(!0,{},t);new s(o(this),e)}),this;if("string"!=typeof t)throw new Error("Invalid arguments for Select2: "+t);var n,i=Array.prototype.slice.call(arguments,1);return this.each(function(){var e=r.GetData(this,"select2");null==e&&window.console&&console.error&&console.error("The select2('"+t+"') method was called on an element that is not using Select2."),n=e[t].apply(e,i)}),-1<o.inArray(t,a)?this:n}}return null==o.fn.select2.defaults&&(o.fn.select2.defaults=t),s}),{define:e.define,require:e.require}}(),t=e.require("jquery.select2");return u.fn.select2.amd=e,t})?i.apply(t,o):i)||(e.exports=s)},function(e,t){e.exports=jQuery},function(e,t){var n,i=0,o=0,s=!1,r=document.querySelector(".header");r.clientHeight;n=jQuery,Drupal,n(window).on("scroll",function(){(o=window.pageYOffset)<0&&(o=0),s||(window.requestAnimationFrame(function(){document.documentElement.scrollHeight,document.documentElement.clientHeight,i<o&&100<o?(r.classList.add("header--hide"),r.classList.add("header--bg")):(r.classList.remove("header--hide"),0==o&&r.classList.remove("header--bg")),s=!1,i=o}),s=!0)})},function(e,t){var n;n=jQuery,Drupal,n(window).on("drupalViewportOffsetChange",function(e,t){n(".header").css("top",t.top)})},function(e,t){var r;r=jQuery,Drupal,r(".field-feature-text").each(function(e){!function(e){function t(e){var t=r(window).width(),n=r(window).height(),i=r(e).height()/2+r(e).offset().top,o=t/3,s=2*o*((r(window).scrollTop()+n-i)/n);r("> div:first-child",e).css("transform","translateX(".concat(o-s,"px)")),r("> div:last-child",e).css("transform","translateX(".concat(s-o,"px)"))}r(document).on("scroll",function(){t(e)}),r("> div",e).css("opacity","1"),t(e)}(this)})},function(e,t){function n(e){i('.assets-home-list  [data-id="'.concat(o,'"]')).removeClass("active"),i('.assets-home-images [data-image-id="'.concat(o,'"]')).hide(),i('.assets-home-list  [data-id="'.concat(e,'"]')).addClass("active"),i('.assets-home-images [data-image-id="'.concat(e,'"]')).show(),i('[data-slide="0"]').addClass("demo"),o=e}var i,o;i=jQuery,Drupal,o=0,i(".assets-home-list .assets-home-list-item").on("mouseover",function(){var e=i(this).data("id");n(e)}),n(i(".assets-home-list .assets-home-list-item").first().data("id"))},function(e,t){var n;n=jQuery,Drupal,n(".banner-image-scroll").on("click",function(e){n([document.documentElement,document.body]).animate({scrollTop:n(".banner-image").offset().top+n(".banner-image").height()},400,"swing")})},function(e,t){var n;n=jQuery,Drupal,n(".accordion").each(function(e){!function(e){var t=n(".field-title",e);t.click(function(){return $this=n(this),$target=$this.next(),$this.hasClass("active")?($this.removeClass("active"),$target.slideUp()):($this.addClass("active"),$target.slideDown()),!1}),n(e).hasClass("open-first")&&t[0].click()}(this)})},function(e,t){var o;o=jQuery,Drupal,o(".slick--optionset--strategy-slider").on("init",function(e,t){o(".slick-next",this).before('<div class="slick-counter"><span class="current"></span> of <span class="total"></span></div>'),o(".current").text(t.currentSlide+1),o(".total").text(t.slideCount)}).on("beforeChange",function(e,t,n,i){o(".current").text(i+1)})},function(e,t){var n,i,o,s;n=jQuery,i=n(".block-profile .button a"),o=n(".block-profile .body").hide(),s=n(".block-profile .profile-content"),i.click(function(){return $this=n(this),$target=$this.parent().prev(),$targetContent=$this.closest(".profile-content"),$this.hasClass("active")?($this.removeClass("active").text("Read More"),$target.slideUp(),s.removeClass("active")):(i.removeClass("active").text("Read More"),o.not($target).slideUp(),$this.addClass("active").text("Close"),$targetContent.addClass("active"),$target.slideDown()),!1})},function(e,t){var n,i;n=jQuery,Drupal,(i=n(".dropdown")).find(".dropdown-title").click(function(){i.not(n(this).parent()).removeClass("active"),n(this).parent().toggleClass("active")}),n(document).bind("click",function(e){n(e.target).hasClass("dropdown-title")||n(e.target).parent().hasClass("dropdown-menu")||i.removeClass("active")})},function(e,t){var i;i=jQuery,Drupal,i(".table-default-rows").each(function(e){!function(e){var t=i(e).data("defaultRows");if(i.isNumeric(t)){var n=i("table tbody tr:nth-child(n +"+ ++t+")",e);n.hide(),i(".table-see-more-text",e).click(function(){n.show(),i(".table-see-more-block",e).hide()})}}(this)})},function(e,t){function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(n,!0).forEach(function(e){o(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}!function(i,e,t){if(0<i("#jobSearch").length){o="#jobSearch .search-wrapper",s=function(n){var e={width:"100%",minimumResultsForSearch:-1,allowClear:!0};i("#jobSearch_search-keyword",n).attr({placeholder:"Enter keywords"}),i("#jobSearch_location",n).select2(a({},e,{placeholder:"Locations"})),i("#jobSearch_category",n).select2(a({},e,{placeholder:"Disciplines"})),i("#jobSearch_work-type",n).select2(a({},e,{placeholder:"Work type"})),i(".submit-button",n).on("click",function(e){document.activeElement.blur();var t=!1;i(".field-wrapper :input",n).each(function(){""!=i(this).val()&&(t=!0)}),t?i(".job-results h2").text("Search Results"):i(".job-results h2").text("Latest Opportunities")})},r=setInterval(function(){$jObject=jQuery(o),$jObject.length<1||(clearInterval(r),s($jObject))},100),i(document).on("click",".paging-item",function(e){i([document.documentElement,document.body]).animate({scrollTop:i("#jobSearch").offset().top-100},200)}),function(e){e=e.replace(/[*+?^$.\[\]{}()|\\\/]/g,"\\$&");var t=location.search.match(new RegExp("[?&]"+e+"=([^&]+)(&|$)"));return t&&decodeURIComponent(t[1].replace(/\+/g," "))}("job")&&i("body").addClass("job-page");var n=t.pushState;t.pushState=function(e){return"function"==typeof t.onpushstate&&t.onpushstate({state:e}),i("body").toggleClass("job-page",Boolean(e.job)),n.apply(t,arguments)},window.addEventListener("popstate",function(e){e.state&&e.state.job?i("body").toggleClass("job-page",Boolean(e.state.job)):i("body").removeClass("job-page")}),PU.Widgets.jobListing("jobListing","https://careers.pageuppeople.com/373/","caw","en",{template:'\n      <div class="body">\n        <h4><a href="[JobDetailUrl]">[Title]</a></h4>\n        <div class="info">[Locations]</div>\n        <p>[Summary]</p>\n        <div class="info">Applications close [ClosingDateUtc]</div>\n        </div>\n        <div class="button"><a class="job-link" data-job-id="[Id]" href="[JobDetailUrl]">See Details</a>\n      </div>\n    ',emptyResultText:"No jobs found",dateFormatter:PU.formatDate,loadDetailsInline:!0,jobsPerPage:5,listingType:"ul",headerTemplate:'<ul class="jobs-listing">',footerTemplate:"</ul>",jobDetailsTemplate:'\n      <div class="layout--pageheader-top">\n        <div class="layout__region--first">\n          <h2>Careers / Current opportunities</h2>\n          <h1>[Title]</h1>\n        </div>\n        <div class="layout__region--first">\n          <div class="field-quick-links">\n            <div>\n              <div class="field-title">Apply Now</div>\n              <div class="field-description">Submit your application online</div>\n              <div class="field-link button"><a href="[ApplyUrl]">Apply</a></div>\n            </div>\n            <div>\n              <div class="field-title">Already applied?</div>\n              <div class="field-description">Login to check your application status</div>\n              <div class="field-link button"><a href="https://secure.dc2.pageuppeople.com/apply/373/applicationForm/default.asp" target="_blank">Login</a></div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="body">\n        <table class="data">\n          <tbody>\n            <tr>\n              <td>Work type</td>\n              <td>[WorkType]</td>\n            </tr>\n            <tr>\n              <td>Location</td>\n              <td>[Locations]</td>\n            </tr>\n            <tr>\n              <td>Applications close</td>\n              <td>[ClosingDateUtc]</td>\n            </tr>\n          </tbody>\n        </table>\n        [Overview]\n        <table class="data">\n          <tbody>\n            <tr>\n              <td>Job number</td>\n              <td>[ExternalJobNo]</td>\n            </tr>\n            <tr>\n              <td>Advertised</td>\n              <td>[OpeningDateUtc]</td>\n            </tr>\n          </tbody>\n        </table>\n        <div class="buttons">\n          <a class="apply" href="[ApplyUrl]" target="_blank">Apply Now</a>\n          <div class="button"><a href="#" class="back-link">Back to Search Results</a></div>\n        </div>\n      </div>\n    ',paging:!0,numberOfPages:100}),PU.Widgets.search("jobSearch","https://careers.pageuppeople.com/373/","caw","en",{selectText:"Select",submitButtonText:"Search",filterType:"dropdown",autoSearch:!1,filters:{Keyword:"Keyword",Locations:"Locations",Categories:"Categories",WorkTypes:"WorkTypes"},useListingWidget:"jobListing"})}var o,s,r}(jQuery,Drupal,window.history)},function(e,t){var n;n=jQuery,Drupal,n(document).ready(function(){if(0<n("#jobMail").length){var e="caw";"newcrest.com"!=location.hostname.replace("www.","")&&(e="cawuat"),PU.Widgets.jobMail("jobMail","https://careers.pageuppeople.com/373/",e,"en",{subscribeButtonText:"Subscribe",emailText:"Email",allText:"Select All",successText:"You have been successfully subscribed to job alerts",errorText:"Error subscribing to job alerts. Please check your email address, Captcha, and try again",filters:{Keyword:"Keyword",Locations:"Locations",Categories:"Categories",WorkTypes:"WorkTypes"}})}})},function(e,t){jQuery,Drupal,window.addeventasync=function(){addeventatc.settings({license:"ae0lbcxynzco0b4u2m383235",css:!1})}},function(e,t){!function(a){var e=document.createElement("script");e.src="https://www.youtube.com/iframe_api?version=3";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t);window.onYouTubeIframeAPIReady=function(){a(".video").each(function(){!function(e){var t=a(".video__play",e),n=a(".video__poster",e),i=a(".video-title",e),o=a(".field-description",e),s=a(".field-video-id",e),r=s.text();new YT.Player(s[0],{width:"896",height:"504",videoId:r,events:{onReady:function(e){t.click(e,function(){return n.fadeOut(),i.fadeOut(),o.fadeOut(),e.target.playVideo(),!1})}},playerVars:{rel:0}})}(this)})}}(jQuery)},function(e,t){!function(i){function o(e,t,n){var i=screen.width/2-t/2,o=screen.height/2-n/2;window.open(e,"","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width="+t+",height="+n+",top="+o+",left="+i)}function s(t){return Object.keys(t).map(function(e){return[e,t[e]].map(encodeURIComponent).join("=")}).join("&")}var r=document.title,e=i("p.introduction:first-of-type").text(),a=i(".share-story").data("summary");null!=a&&""!=a||(a=""==e?r:e),i(".share-on--twitter").click(a,function(e){e.preventDefault();var t={text:a,url:location.href},n=i(this).attr("href");n=n+"&"+s(t),i(this).attr("href",n),o(n,500,300)}),i(".share-on--linkedin").click(a,function(e){e.preventDefault();var t={url:location.href,title:r,summary:a,source:location.href},n=i(this).attr("href");n=n+"&"+s(t),i(this).attr("href",n),o(n,400,500)});var t=i(".share-on--email");if(0!=t.length){var n=encodeURIComponent(r),l=encodeURIComponent(a),c=t.attr("href");c=(c=c.replace("subject=Share this story","subject="+n)).replace("body=","body="+l+"%0D%0A%0D%0A"+window.location.href),t.attr("href",c)}}(jQuery,Drupal)},function(e,t){function n(n){var e={part:"snippet",key:"AIzaSyAkJctlTWaJ6nIZ1JZn_6kaDg9cEadixAo",maxResults:10,playlistId:r(n).data("playlist")},i=function(e,t){r(".youtube-playlist-video",n).html('\n        <iframe src="https://www.youtube.com/embed/'.concat(e).concat(t?"?autoplay=1":"",'" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n      '))},o=function(e){r.each(e.items,function(e,t){var n=t.snippet.thumbnails.medium.url,i=t.snippet.title,o=t.snippet.resourceId.videoId,s=function(e){var t=Math.floor((new Date-e)/1e3),n=Math.floor(t/31536e3);if(1<n)return"".concat(n," years ago");if(1<(n=Math.floor(t/2592e3)))return"".concat(n," months ago");if(1<(n=Math.floor(t/86400)))return"".concat(n," days ago");if(1<(n=Math.floor(t/3600)))return"".concat(n," hours ago");if(1<(n=Math.floor(t/60)))return"".concat(n," minutes ago");return"".concat(Math.floor(t)," seconds ago")}(new Date(t.snippet.publishedAt).getTime());r(".youtube-playlist-list .items").append('\n          <div class="youtube-playlist-item" data-key="'.concat(o,'">\n            <div class="thumb" style="background-image:url(').concat(n,')"></div>\n            <div class="info">\n              <div class="title">').concat(i,'</div>\n              <div class="date">').concat(s,"</div>\n            </div>\n          </div>\n        "))})};r(".youtube-playlist-list",n).on("click",".youtube-playlist-item",function(){var e=r(this).attr("data-key");i(e,!0)}),r.getJSON("https://www.googleapis.com/youtube/v3/playlistItems",e,function(e){var t=e.items[0].snippet.resourceId.videoId;i(t),o(e)})}var r;(r=jQuery)(".youtube-playlist").each(function(e){n(this)})},function(e,t){function n(){768<=i(window).width()?i(".values-container").each(function(){var e=0;i(".values .block-title",this).each(function(){i(this).height("auto"),i(this).height()>e&&(e=i(this).height())}),i(".values .block-title",this).height(e)}):i(".values-container").each(function(){i(".values .block-title",this).each(function(){i(this).height("auto")})})}var i;i=jQuery,Drupal,i(window).resize(function(){n()}),n()},function(e,t){var n;n=jQuery,Drupal,n(function(){$pageNav=n(".page-nav"),$pageNavHeader=$pageNav.clone().appendTo(".header"),n("nav",$pageNav).prepend('<div class="trigger">Contents</div>').on("click",function(e){n(".menu",$pageNav).toggle()}),n("nav",$pageNavHeader).prepend('<div class="trigger">Contents</div>').on("click",function(e){n(".menu",$pageNavHeader).toggle()}),$pageNav.length&&(window.onscroll=function(){!function(){var e=$pageNav.offset().top-n(".header-top").height();window.pageYOffset>=e?$pageNavHeader.addClass("sticky"):$pageNavHeader.removeClass("sticky")}()})})},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i;n(1);i=jQuery,Drupal,i(function(){i(".menu__submenu .menu__link").on("click",function(e){e.stopPropagation()}),i(".menu__item--top").on("click",function(e){if(e.stopPropagation(),!i(this).hasClass("menu__item--hasChildren"))return!0;e.preventDefault(),i(this).hasClass("menu__item--expanded")?a(!0):(i(".menu__item--hasChildren").removeClass("menu__item--expanded"),i(".menu__item--top").removeClass("menu__item--faded"),i(".menu__submenu").hide(),i(".menu__item--top").not(this).addClass("menu__item--faded"),i(this).addClass("menu__item--expanded"),i(".menu__submenu",this).fadeIn(400),i(".region-header").addClass("region-header--expanded"),i(".backdrop").addClass("backdrop--expanded"),i("body").addClass("scroll-lock"),i("main").addClass("nav-open"),992<=i(window).width()&&i("main > .overlay").fadeIn(400))}),i(".mobile-menu-toggle").on("click",function(){i(".main-nav").toggleClass("main-nav--mobile-show"),i(".backdrop").toggleClass("backdrop--expanded"),i("body").toggleClass("scroll-lock"),r()}),i("*").on("click",function(e){if(!i(".backdrop").hasClass("backdrop--expanded"))return!0;i(this).is(".header")&&e.stopPropagation(),i(".header").is(this)||i.contains(i(".header").get(0),i(this).get(0))||a(!0)}),i(".menu__item--top").hover(function(){i(".menu__item--top").not(i(this)).addClass("menu__item--top-faded")},function(){i(".menu__item--top").removeClass("menu__item--top-faded")})});var o,s,r=function(e){return t=jQuery(".mobile-menu-toggle"),n=t.text(),void(null!=e&&null!=e?t.text(e):t.text("Menu"==n?"Close":"Menu"));var t,n},a=function(e){return(t=jQuery)(".menu__item--top").removeClass("menu__item--expanded"),t(".menu__item--top").removeClass("menu__item--faded"),t(".menu__submenu").hide(),e?(t("main > .overlay").fadeOut(400),t(".main-nav").hasClass("main-nav--mobile-show")||t(".backdrop").removeClass("backdrop--expanded")):(t(".main-nav").removeClass("main-nav--mobile-show"),t(".backdrop").removeClass("backdrop--expanded"),r("Menu")),void(t(".main-nav").hasClass("main-nav--mobile-show")||(t(".region-header").removeClass("region-header--expanded"),t("body").removeClass("scroll-lock"),t("main").removeClass("nav-open")));var t};n(3),n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13),n(14),n(15),n(16),n(17);o=jQuery,s=o("#search-bar"),o(".search-icon").on("click",function(e){e.stopPropagation(),a(!1),s.fadeIn(400),o("main").addClass("nav-open search-open"),o("main > .overlay:visible").length<=0&&o("main > .overlay").fadeIn(400),o("#edit-query").focus()}),o(".search-close-icon").on("click",function(e){e.stopPropagation(),s.hide(),o("main").removeClass("nav-open search-open"),o("main > .overlay").fadeOut(400)}),o(document).on("keydown",function(e){27==e.keyCode&&o("main").hasClass("search-open")&&o(".search-close-icon").click()}),o("*").on("click",function(e){if(!o("main").hasClass("search-open"))return!0;o(this).is("main.search-open")&&e.stopPropagation(),o.contains(o("main.search-open").get(0),o(this).get(0))&&(s.hide(),o("main.search-open").removeClass("nav-open search-open"),o("main > .overlay").fadeOut(400))});n(18),n(19);var l=function(){function e(e,t){var n=void 0!==t?t:{};this.version="3.6.8",this.userAgent=window.navigator.userAgent||"no `userAgent` provided by the browser",this.props={customStickyChangeNumber:n.customStickyChangeNumber||null,noStyles:n.noStyles||!1,stickyBitStickyOffset:n.stickyBitStickyOffset||0,parentClass:n.parentClass||"js-stickybit-parent",scrollEl:"string"==typeof n.scrollEl?document.querySelector(n.scrollEl):n.scrollEl||window,stickyClass:n.stickyClass||"js-is-sticky",stuckClass:n.stuckClass||"js-is-stuck",stickyChangeClass:n.stickyChangeClass||"js-is-sticky--change",useStickyClasses:n.useStickyClasses||!1,useFixed:n.useFixed||!1,useGetBoundingClientRect:n.useGetBoundingClientRect||!1,verticalPosition:n.verticalPosition||"top"},this.props.positionVal=this.definePosition()||"fixed",this.instances=[];var i=this.props,o=i.positionVal,s=i.verticalPosition,r=i.noStyles,a=i.stickyBitStickyOffset,l="top"!==s||r?"":a+"px",c="fixed"!==o?o:"";this.els="string"==typeof e?document.querySelectorAll(e):e,"length"in this.els||(this.els=[this.els]);for(var u=0;u<this.els.length;u++){var d=this.els[u];d.style[s]=l,d.style.position=c,this.instances.push(this.addInstance(d,this.props))}}var t=e.prototype;return t.definePosition=function(){var e;if(this.props.useFixed)e="fixed";else{for(var t=["","-o-","-webkit-","-moz-","-ms-"],n=document.head.style,i=0;i<t.length;i+=1)n.position=t[i]+"sticky";e=n.position?n.position:"fixed",n.position=""}return e},t.addInstance=function(e,t){var n=this,i={el:e,parent:e.parentNode,props:t};if("fixed"===t.positionVal||t.useStickyClasses){this.isWin=this.props.scrollEl===window;var o=this.isWin?window:this.getClosestParent(i.el,i.props.scrollEl);this.computeScrollOffsets(i),i.parent.className+=" "+t.parentClass,i.state="default",i.stateContainer=function(){return n.manageState(i)},o.addEventListener("scroll",i.stateContainer)}return i},t.getClosestParent=function(e,t){var n=t,i=e;if(i.parentElement===n)return n;for(;i.parentElement!==n;)i=i.parentElement;return n},t.getTopPosition=function(e){if(this.props.useGetBoundingClientRect)return e.getBoundingClientRect().top+(this.props.scrollEl.pageYOffset||document.documentElement.scrollTop);for(var t=0;t=e.offsetTop+t,e=e.offsetParent;);return t},t.computeScrollOffsets=function(e){var t=e,n=t.props,i=t.el,o=t.parent,s=!this.isWin&&"fixed"===n.positionVal,r="bottom"!==n.verticalPosition,a=s?this.getTopPosition(n.scrollEl):0,l=s?this.getTopPosition(o)-a:this.getTopPosition(o),c=null!==n.customStickyChangeNumber?n.customStickyChangeNumber:i.offsetHeight,u=l+o.offsetHeight;t.offset=s?0:a+n.stickyBitStickyOffset,t.stickyStart=r?l-t.offset:0,t.stickyChange=t.stickyStart+c,t.stickyStop=r?u-(i.offsetHeight+t.offset):u-window.innerHeight},t.toggleClasses=function(e,t,n){var i=e,o=i.className.split(" ");n&&-1===o.indexOf(n)&&o.push(n);var s=o.indexOf(t);-1!==s&&o.splice(s,1),i.className=o.join(" ")},t.manageState=function(e){function t(e){e()}var n=e,i=n.el,o=n.props,s=n.state,r=n.stickyStart,a=n.stickyChange,l=n.stickyStop,c=i.style,u=o.noStyles,d=o.positionVal,p=o.scrollEl,h=o.stickyClass,f=o.stickyChangeClass,g=o.stuckClass,m=o.verticalPosition,v="bottom"!==m,y=this.isWin&&(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame)||t,b=this.toggleClasses,_=this.isWin?window.scrollY||window.pageYOffset:p.scrollTop,w=v&&_<=r&&("sticky"===s||"stuck"===s),$=l<=_&&"sticky"===s;r<_&&_<l&&("default"===s||"stuck"===s)?(n.state="sticky",y(function(){b(i,g,h),c.position=d,u||(c.bottom="",c[m]=o.stickyBitStickyOffset+"px")})):w?(n.state="default",y(function(){b(i,h),b(i,g),"fixed"===d&&(c.position="")})):$&&(n.state="stuck",y(function(){b(i,h,g),"fixed"!==d||u||(c.top="",c.bottom="0",c.position="absolute")}));var C=a<=_&&_<=l;_<a/2||l<_?y(function(){b(i,f)}):C&&y(function(){b(i,"stub",f)})},t.update=function(n){var e=this;return void 0===n&&(n=null),this.instances.forEach(function(t){e.computeScrollOffsets(t),n&&Object.keys(n).forEach(function(e){t.props[e]=n[e]})}),this},t.removeInstance=function(e){var t=e.el,n=e.props,i=this.toggleClasses;t.style.position="",t.style[n.verticalPosition]="",i(t,n.stickyClass),i(t,n.stuckClass),i(t.parentNode,n.parentClass)},t.cleanup=function(){for(var e=0;e<this.instances.length;e+=1){var t=this.instances[e];t.stateContainer&&t.props.scrollEl.removeEventListener("scroll",t.stateContainer),this.removeInstance(t)}this.manageState=!1,this.instances=[]},e}();var c=function(e,t){return new l(e,t)};768<=jQuery(window).width()&&c(".assets-home-images",{stickyBitStickyOffset:109});n(20)}]);

// fileup
$(".comment-form-1").on("change", ".file-upload-field", function(){ 
    $(this).parent(".file-upload-wrapper").attr("data-text", $(this).val().replace(/.*(\/|\\)/, '') );
});
$('#fileInput').on('change', function(){
  var control = $('#inputFileMaskText');
  control.val(this.files[0].name);
});


// download 
function downloadFile(data, sFileName, sFileType) {
  let blob = new Blob([data], {type : sFileType});
  let sURL = URL.createObjectURL(blob);
  let a = document.createElement("a");
  
  document.body.appendChild(a);
  a.style = "display: none";
  a.href = sURL;
  a.download = sFileName;
  a.click();
  window.URL.revokeObjectURL(sURL);
} // end of function downloadFile()

function filedownload() {
  let s=[];
  s.push("'Hello Word'");
  downloadFile(s.join("\n"), "index.txt", "text/html") 
} // end of function indexCfm()

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}
