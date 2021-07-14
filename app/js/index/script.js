$('.header__burger').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.header__nav').toggleClass('active');
});

$('.header__bottom').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.faq__question').on('click', function() {
    $(this).parent('li').toggleClass('active');
});

$('.js-callback-toggle').on('click', function(e) {
    e.preventDefault();
    $('.popup-callback').toggleClass('active');
    $('body').addClass('no-scroll');
});

$('.popup__form-close').on('click', function(e) {
    e.preventDefault();
    $(this).parent('.form').parent('.popup').removeClass('active');
    $('body').removeClass('no-scroll');
});

$(document).click(function(e) {
    if ($(e.target).closest('.popup__inner').length || $(e.target).closest('.js-callback-toggle').length) {
        return;
    }
    $('.popup').removeClass('active');
});

$("a[href^='#scroll']").click(function() {
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
});