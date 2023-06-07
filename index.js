$(document).ready(function(){
    $('menu').click(function(){
        $(this).toggleclass('fa-time');
        $('header').toggleclass('toggle');
    });

    $(window).on('scroll load',function(){
        $('menu').removeclass('fa-time');
        $('header').removeclass('toggle'); 

        if($(window).scrolltop() > e){
            $('.top').show();
        }else{
            $('.top').hide();
        }
    });

    // smooth scrolling
    $('a[href*="#"]').on('click',function(e){

        e.preventDefauld();

        $('html, body').animate({

            scrolltop : $($(this).attr('href')).offset().top,

        },
            500,
            'linear'
        );
    });

});