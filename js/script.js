$(function(){
    $('.ac-parent').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass("open");
        $('.ac-parent').not(this).removeClass("open").next().slideUp();
    })
})
$(function(){
    $(window).scroll(function(){
        $('.fadein').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 170) {
                $(this).addClass('scrollin');
            }
        });
    });
    $(window).scroll(function(){
        $('.opacity').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 100) {
                $(this).addClass('scrollup');
            }
        });
    });
    $(window).scroll(function(){
        $('.transform').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 100) {
                $(this).addClass('rotate');
            }
        });
    });
});
document.querySelectorAll('a[href^="#"]').forEach(link =>{
    link.addEventListener('click', e => {
        e.preventDefault()

        const target = document.querySelector(link.hash),
            offsetTop = window.pageYOffset + target.getBoundingClientRect().top

        window.scrollTo({
            top:offsetTop,
            behavior: 'smooth'

        })
    })
})
