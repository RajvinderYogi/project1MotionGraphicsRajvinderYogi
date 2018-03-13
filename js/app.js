// on click function for On
$('.on').on('click',function(){
    $('.button-cover').removeClass('move-right');
    $('.button-cover').addClass('move-left');
    $('body').addClass('bg-body');
    $('footer').addClass('bg-footer');
    $('.project').show(800);
    $('footer').show(800);

});

//on click function for Off
$(".off").on('click',function(){
    $('.button-cover').removeClass('move-left');
    $('.button-cover').addClass('move-right');
    $('body').removeClass('bg-body');
    $('footer').removeClass('bg-footer');
    $('.project').hide(800);
    $('footer').hide(800);
});