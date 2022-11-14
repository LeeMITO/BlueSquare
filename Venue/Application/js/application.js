$(function() {
     // ==== 스크롤 페이드인 이벤트
     AOS.init({
        duration: 700,
        once: true
    });
    // 스크롤 페이드인 이벤트 끝 ====


    // ===== 햄버거 메뉴 펼치고 닫기
    $('.overlay .close-btn').hide();
    
    $('.right-menu ul .right').click(function() {
        $('.overlay').animate({'width': '100%'}, 300);
        $('.overlay .close-btn').show();

    });

    $('.overlay .close-btn').click(function() {
        $('.overlay').animate({'width': 0}, 300);
        $(this).hide();
        $('.overlay-menu > ul > li > a').removeClass('on');
        $('.overlay-menu > ul > li > ul > li').removeClass('on'); 
    });
    // 햄버거 메뉴 펼치고 닫기 끝 =====


    // ==== 햄버거 메뉴 콘텐츠 스타일 적용
    $('.overlay-menu > ul > li').click(function(e) {
        e.preventDefault();

        $('.overlay-menu > ul > li > a').removeClass('on');
        $(this).children('a').addClass('on');
        
        $('.overlay-menu > ul > li > ul > li').removeClass('on'); 
        $(this).children().children().addClass('on');
    });
    // 햄버거 메뉴 콘텐츠 스타일 적용 끝 ====


    // ==== 슬라이드
    let swiper = new Swiper('.swiper', {
        slidesPerView: spaceNumber(),
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
        
    });
    
    function spaceNumber() {
        let space = 0;
        
        let windowWidth = $(window).width();

        if(windowWidth >= 600 && windowWidth < 1024) {
            space = 3;
        } else if(windowWidth >= 1024 && windowWidth < 1400) {
            space = 4;
        } else if(windowWidth >= 1400) {
            space = 5;
        } else if(windowWidth < 600) {
            space = 2;
        }
        return space;
    }
    // 슬라이드 끝 ====


    // ==== 푸터 링크
    $('#site').on('change', function() {
        if($(this).val() !== '') {
            window.open($(this).val(), '_blank');
        }
    })
    // 푸터 링크 끝 ====
})

