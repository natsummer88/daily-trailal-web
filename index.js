$(function(){

    $(".header-nav li").on("click", function(){
        $(this).children(".submenu").slideToggle();
    })

    $(window).scroll(function(){
        if ($(window).scrollTop() >80) {
            $('.btn-backToTop').fadeIn(300);
        } else{
            $('.btn-backToTop').fadeOut();
        }
    });

    $('.btn-backToTop').on('click', function(){
        $('body,html').animate({scrollTop: 0}, 500);
        return false;
    })

    // $(".header-nav li").hover(
    //     function() {
    //         $(".submenu:not(:animated)", this).slideDown("slow");
    //     },
    //     function(){
    //         $(".submenu", this).slideUp("fast");
    //     }
    // );

    $(".course-item img").click(function(){
        $('#modal-bg').html($(this).prop("outerHTML"));
        $('#modal-bg').fadeIn(200);
        return false;
    })

    $('#modal-bg').click(function(){
        $('#modal-bg').fadeOut(200);
        return false;
    })
});
