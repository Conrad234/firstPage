$( window ).scroll(function() {
    console.log('scroll');
  $('.affix').fadeIn(1000);
});


$('.websites').mouseover(function(){
    $(this).find('button').removeClass('hide'); 
});

$('.websites').mouseleave(function(){
    $(this).find('button').addClass('hide'); 
});