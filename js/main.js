$(function (){
    $('.service__list').slick({
        centerMode: true,
        slidesToShow: 4,
        arrows:false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.news__list').slick({
        centerMode: true,
        slidesToShow: 4,
        arrows:false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
    $('#login').on('click', function (e){

        e.preventDefault();
        $('.login__popup').css('display', 'flex')
    })
    $('#cv').on('click', function (e){
        e.preventDefault();

        $('.cv__popup').css('display', 'flex')
    })
    $('.close__popup').on('click', function (){
        $('.login__popup').hide();
        $('.cv__popup').hide();
    });
    $('.menu__icon').on('click',function (e){
        e.preventDefault();
            $('.header-right').toggleClass('show');
    })
})