$(function() {
    $('.tap-menu li').click(function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('section').removeClass('show');
        $('section').eq(idx).addClass('show');

        $('.tap-menu li a').removeClass('on');
        $('.tap-menu li a').eq(idx).addClass('on');
    });
});