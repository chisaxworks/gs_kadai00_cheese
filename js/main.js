// Hamburger Menu
$('.hammenu').click(function () {
    $('.gnav-sp').toggleClass('active');
    $(this).toggleClass('active');
    $('.overlay').fadeToggle();
});

$('.gnav-sp a, .overlay').click(function() {
    $('.gnav-sp').removeClass('active');
    $('.hammenu').removeClass('active');
    $('.overlay').fadeOut();
});

// Slick
$('.about-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
});

// PageTop
function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 600){
        $('.pagetop').removeClass('pt-down');
        $('.pagetop').addClass('pt-up');
    }else{
        if($('.pagetop').hasClass('pt-up')){
        $('.pagetop').removeClass('pt-up');
        $('.pagetop').addClass('pt-down');
        }
    }
}

$('.pagetop').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});

// ふわっと表示
function FadeAnime(){
    $(".scroll-block").each(function() {
        var scroll = $(window).scrollTop();
        var blockPosition = $(this).offset().top;
        var windowHeight = $(window).height();
        if (scroll > blockPosition - windowHeight + 100) {
            $(this).addClass("blockIn");
        }
    });
}

var windowWidth = $(window).width();
var windowSp = 768;
if (windowWidth <= windowSp) {
//横幅768px以下（スマホ）に適用させるJavaScriptを記述
    $(window).scroll(function () {
        PageTopAnime();
        FadeAnime();
    });

    $(window).on('load', function () {
        PageTopAnime();
        FadeAnime();
    });

} else {
//横幅768px以上（PC、タブレット）に適用させるJavaScriptを記述
    $(window).scroll(function () {
        PageTopAnime();
        FadeAnime();
    });

    $(window).on('load', function () {
        PageTopAnime();
        FadeAnime();
    });
}
