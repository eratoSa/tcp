(function($) {
    $(function(){
       // fixedHeader();
        swiperCarousel();
       /*This area from init Function*/
        $( document ).ready( function(){
            new ScrollFlow();
        });
//      $('.calendar').jScrollPane();
        $('select').select2({
            placeholder: 'Ukraine, Kharkiv'
        });
    });
//----Menu Animation Toggle --------------------------------------------->

    function fixedHeader(){
        var $header = $("#header");
        $header.addClass('default');
        $(window).scroll(function(){
            if ( $(this).scrollTop() >= 20 && $header.hasClass("default") ){
                $header.removeClass("default").addClass("fixed");
            } else if($(this).scrollTop() <= 20 && $header.hasClass("fixed")) {
                $header.removeClass("fixed").addClass("default");
            }
        });//scroll
    }

    function swiperCarousel(){
        var swiperParent;
        swiperParent = new Swiper('.swiper-parent', {
            pagination: false,
            paginationClickable: true,
            loop: true,
            spaceBetween: 20,
            autoplay: $(window).width() > 748 ? false : true,
            speed: $(window).width() > 748 ? 500 : 5000,
            slidesPerView: $(window).width() > 748 ? 4 : 1,
            nextButton: '.arrow-right-b',
            prevButton: '.arrow-left-b',
            onTransitionEnd: function(swiperParent){
                swiperParent.params.speed = $(window).width() > 748 ? 500 : 5000;
            },
            onTouchStart: function(swiperParent){
                swiperParent.params.speed = 400;
            },
            onTransitionStart: function (swiperParent) {
                swiperParent.params.speed = 400;
            }
        });
        $(window).resize(function(){
            if($(window).width() < 748)  {
                swiperParent.params.slidesPerView = 1; //For example
                swiperParent.params.autoplay = true; //For example
                swiperParent.startAutoplay();
            } else {
                swiperParent.params.slidesPerView = 4; //For example
                swiperParent.params.autoplay = false; //For example
                swiperParent.stopAutoplay();
            }
        });


        $('.swiper-parent .swiper-slide').on('mouseover', function(){
            $('.swiper-slide').addClass('hovered');
            $(this).removeClass('hovered');
        }).on('mouseleave', function(){
            $('.swiper-slide').removeClass('hovered');
        });


    }

    /*This area from declaration plugins*/
})(jQuery);
