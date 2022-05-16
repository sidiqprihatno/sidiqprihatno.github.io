jQuery(function($) {

    $.fn.isOnScreen = function () {
        var win = $(window);
        var viewport = {
            top: win.scrollTop(),
            left: win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();
        var bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();
        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    };

    $('#contact-go').on('mouseover', function(){
        $(this).removeClass('infinite');
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 0) {
           $('#info').slideUp(100);
        } else {
           $('#info').slideDown(100);
        }

        if ($('#contact').isOnScreen() == true) {
            $('#contact-go').addClass("zoomOutDown").removeClass("infinite");
            $('#contact-go').removeClass("zoomInUp");
        }
        else{
            $('#contact-go').addClass("infinite");
            $('#contact-go').removeClass("zoomOutDown");
        }
    });
    
});