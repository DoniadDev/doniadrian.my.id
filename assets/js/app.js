'use strict';
(function ($) {

    $(document).ready(function () {
        
        // Click Hamburger
        $(".btn-toggle-state").on("click", function (e) {
            e.preventDefault();
            $("#site-header").toggleClass("toggle-onactive");
        });

        //header
        var targetSticky = $(".site-header");
        var positionTop = 0;
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();

            if (scroll > 0) {
                targetSticky.addClass('sticky-active');
                if (scroll < positionTop) {
                    targetSticky.addClass('sticky-up');
                    targetSticky.removeClass('sticky-down');
                } else {
                    targetSticky.addClass('sticky-down');
                    targetSticky.removeClass('sticky-up');
                }
            } else {
                targetSticky.removeClass('sticky-active');
                targetSticky.removeClass('sticky-up');
                targetSticky.removeClass('sticky-down');
            }
            positionTop = scroll;
        });


        // Anchor link
        if (($('.site-header').width()) > 1199) {
            var marginTop = 100;
        } else {
            var marginTop = 80;
        }

        $(document).on('click', 'a[href^="#"]', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: ($(jQuery.attr(this, 'href')).offset().top - marginTop)
            }, 300);
        });

    });

})(jQuery)