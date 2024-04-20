$(document).ready(function(){
    // Header background change on scroll
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        $('.header').toggleClass('white-bg', scrollTop > 92);
    });

    // Slick slider initialization
    $('.ct-slider').slick({
        infinite: true,
        draggable: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true
    });

    // Title text animation on scroll
    $(window).scroll(function(){
        var offset = Math.max(0, $(window).scrollTop() - 80);
        $('.title--text').css('-webkit-transform', 'translateY(' + offset + 'px)');
    });

    // Team menu item click event
    $('.section-team--menu-item a').click(function(e){
        e.preventDefault();
        var scheduleLink = $(this).attr('data-link');
        
        // Show active menu item
        $('.section-team--menu-item').removeClass('active');
        $(this).parent().addClass('active');
        
        // Show active schedule
        $('.section-team--content-schedule').removeClass('fade-in').addClass('fade-out');
        $('.' + scheduleLink).addClass('active');
        
        setTimeout(function(){
            $('.section-team--content-schedule:not(.' + scheduleLink + ')').removeClass('active');
            $('.' + scheduleLink).addClass('fade-in').removeClass('fade-out');
        }, 300);
    });
});
