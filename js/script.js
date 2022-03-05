$(function(){
    // slick slider Start
    $('.banner_slider').slick({
        autoplay: true,
        prevArrow:'<i class="fa-solid fa-chevron-left banner_slider_icon"></i>',
        nextArrow:'<i class="fa-solid fa-chevron-right banner_slider_icon"></i>',
        dots:true,
        dotsClass:'banner_slider_dots'
    });
    // slick slider Start
    // Back to top Start
    $(window).on('scroll',function(){
        var scrollTop= $(this).scrollTop();
       if(scrollTop > 500){
           $('#back_to_top').fadeIn(500);
       }else{
           $('#back_to_top').fadeOut(500);
       }
    })
    $('#back_to_top').on('click',function(){
        $('html,body').animate(
            {
            scrollTop :0,
            }
        ,500);
    });
    // Back to top End
    // preloader Start
    $(window).on('load',function(){
        $('#preloader').fadeOut(3000);
    });
    // preloader End
    // Smooth Scroll Start
    $('a').on('click',function(e){
        e.preventDefault();

        var hash = this.hash;

        if(this.hash !== ''   ){
            $(' html,body').animate({
                scrollTop: $(hash).offset().top
            },800)
        }
    });
    // Smooth Scroll End
});
