'use strict';

function whAOS(args) {

	if (typeof jQuery == 'undefined') {
		return false;
	} else if(args === undefined || args === null) {
		args = {};
	}

	var target = args.target;
    var direction = args.direction || "bottom";
    var offset = args.offset || "top";

	(function($){
		if($(target)[0]) {
			_initBody("wh-aos");
            var el_target = $(target);
            
            el_target.each(function() {
                var $this = $(this);
                var dir_position = _objectPosition($this, direction);
                var offset_target = _objectOffset($this, offset);

                $this.addClass("wh-aos-init");

                $(window).scroll(function() {
                    var elwindow = $(this);
                    _scrollDown(elwindow, offset_target, $this);
                }).scroll();

                $this.addClass("wh-aos--dir"+dir_position);
            });
		} else {
            console.log(target + " is not found");
        }
	})(jQuery)
}


function _initBody(nameclass) {
	(function($){
		var el_body = $("body");
		if(!el_body.hasClass(nameclass)) {
			el_body.addClass(nameclass);
		}
	})(jQuery)
}

function _objectOffset(target, offset) {
    switch (offset) {
        case "top":
            return _objectTop(target);
        case "half":
            return _objectHalf(target);
        case "bottom":
            return _objectBottom(target);
    }
}

function _objectBottom(target) {
	return _objectTop(target) + _heightObject(target);
}


function _objectHalf(target) {
	return _objectTop(target) + (_heightObject(target) / 2);
}


function _objectTop(target) {
	return target.offset().top;
}


function _heightObject(target) {
	return target.outerHeight();
}


function _objectPosition(target, fallback) {
	var poisiton = '';
	
	if(target.is('[class*="wh-aos-fade"]')) {
		var el_postition = target.attr("class").match(/[\w-]*wh-aos-fade[\w-]*/g)[0];
		poisiton = el_postition.replace("wh-aos-fade","");
	}

	return poisiton || fallback;
}


function _scrollDown(elWindow, offset, target) {
	var window_bottom = elWindow.scrollTop() + elWindow.innerHeight();

	if (offset < window_bottom) {
		target.addClass("wh-aos--active");
	} else {
		target.removeClass("wh-aos--active");
	}
}
