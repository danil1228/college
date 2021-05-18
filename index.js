const $card_text = document.querySelectorAll('.card-text')
const $card_img = document.querySelectorAll('.card-body')

for (let i = 0; i < $card_text.length; i++) {
    $card_text[i].addEventListener('mouseenter', (event) => {
        $card_text[i].style.opacity = 1
        $card_img[i].style.opacity = 0
    })

    $card_text[i].addEventListener('mouseout', (event) => {
        $card_text[i].style.opacity = 0
        $card_img[i].style.opacity = 1
    })
}

$(function(){
    $('.mini_imgs').click(function(event) {
        var i_path = $(this).attr('src');
        $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"></div>');
        $('#magnify').css({
            left: ($(document).width() - $('#magnify').outerWidth())/2,
            top: ($(window).height() - $('#magnify').outerHeight())/2
        });
        $('#overlay, #magnify').fadeIn('fast');
    });

    $('body').on('click', '#close-popup, #overlay', function(event) {
        event.preventDefault();
        $('#overlay, #magnify').fadeOut('fast', function() {
            $('#close-popup, #magnify, #overlay').remove();
        });
    });
});