/*Typewriter Effect*/

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };



/*Nav Highlighting*/
/*
var $link = $('a');

$link.on('click', function(event) {
	$link.removeClass('active');
	$(this).addClass('active');
});

$('.default').trigger('click');
*/
/*Nav Highlighting While Scrolling*/

var sections = $('section'), 
nav = $('nav'), 
nav_height = nav.outerHeight();

$(window).on('scroll', function() {
	var cur_pos = $(this).scrollTop();

	sections.each(function() {
		var top = $(this).offset().top - nav_height,
			bottom = top + $(this).outerHeight();

		if (cur_pos >= top && cur_pos <= bottom) {
			nav.find('a').removeClass('active-link');

			nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active-link')
		}
	});
});

/*****
var sections = $('section'), 
nav = $('nav'), 
nav_height = nav.outerHeight();

$(window).on('scroll', function() {
	var cur_pos = $(this).scrollTop();

	sections.each(function() {
		var top = $(this).offset().top - nav_height,
			bottom = top + $(this).outerHeight();

		if (cur_pos >= top && cur_pos <= bottom) {
			nav.find('a').removeClass('active-link');
			sections.removeClass('active-link');

			$(this).addClass('active-link');
			nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active-link')
		}
	});
});
*****/

/*Background Colour Toggle*/

$(function() {
	$(window).on("scroll", function() {
		if($(window).scrollTop() > 100) {
			$("header").addClass("active-scroll");
		} else {
			//remove the background so it becomes transparent again
			$("header").removeClass("active-scroll");
		}
	});
});

/*Menu Bars Toggle*/

function openNav(x) {
    if (x.classList.toggle("change")) {
    	$(".sidenav").show();
    } else {
    	$(".sidenav").hide();
    } 
}


/*Start of Tawk.to Script*/

var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5bf6760079ed6453ccaa9390/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
