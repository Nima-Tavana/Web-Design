
$(document).ready(function () {
    $('.nav-button').click(function () {
        $('.nav-button').toggleClass('change')
    })
})

$(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 200) {
        $('.nav-menu').addClass('custom-navbar')
    } else {
        $('.nav-menu').removeClass('custom-navbar')
    }
})


$(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 700) {
        $('.award-text').addClass('fromRight')
        $('.award-img').addClass('fromLeft')
    } else {
        $('.award-text').removeClass('fromRight')
        $('.award-img').removeClass('fromLeft')
    }
})


$(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 700) {
        $('.mcard3').addClass('fromRight')
        $('.mcard1').addClass('fromLeft')
        $('.mcard2').addClass('fromBootom')
    } else {
        $('.mcard3').removeClass('fromRight')
        $('.mcard1').removeClass('fromLeft')
        $('.mcard2').removeClass('fromBootom')
    }
})



$('.gallery-list-item').click(function () {
    let value = $(this).attr('data-filter');
    $(this).addClass('active-item').siblings().removeClass('active-item')

    if (value === 'all') {
        $('.filter').show(300)
    } else {
        $('.filter').not('.' + value).hide(300);
        $('.filter').filter('.' + value).show(300);
    }
})

$(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 700) {
        $('.mcard6').addClass('fromRight2')
        $('.mcard4').addClass('fromLeft2')
        $('.mcard5').addClass('fromBootom2')
    } else {
        $('.mcard6').removeClass('fromRight2')
        $('.mcard4').removeClass('fromLeft2')
        $('.mcard5').removeClass('fromBootom2')
    }
})
