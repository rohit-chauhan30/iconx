/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//<![CDATA[

if ($('.floor-carousel').length) {
    $('.floor-carousel').owlCarousel({
        loop: true,
        margin: 35,
        // nav: false,
        dots: true,
        smartSpeed: 1200,
        autoplay: 9000,
        // navText: ['<img src="images/left-arrow.png"/>', '<img src="images/right-arrow.png"/>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 1
            },
            800: {
                items: 1
            },
            960: {
                items: 1
            },
            1024: {
                items: 0
            }
        }
    });
}


function showDiv() {
    document.getElementById('section1').style.display = "block";
}

function hideDiv() {
    document.getElementById('section1').style.display = "none";
}

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#header').addClass('affix');
    } else {
        $('#header').removeClass('affix');
    }
});

$(window).on('load', function () {
    $('.loader').fadeOut();
    $('.loader-brand').delay(350).fadeOut('slow');
    $('body').delay(350).css({'overflow': 'visible'});
});


$('article').click(function () {
    $('#sidebar-wrapper').removeClass('active')
    $('.menu-toggle').removeClass('active');
    $('.menu-toggle i').removeClass('fa-times');
    $('.menu-toggle i').addClass('fa-bars');
});


$('.counting').each(function () {
    var $this = $(this),
            countTo = $this.attr('data-count');

    $({countNum: $this.text()}).animate({
        countNum: countTo
    },
            {

                duration: 15000,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                    //alert('finished');
                }

            });


});