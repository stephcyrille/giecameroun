$(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();
    if($(window).scrollTop()){
        $('nav').addClass('scrollStyle');
        $('nav').removeClass('navbar');
    } else {
        $('nav').removeClass('scrollStyle');
        $('nav').addClass('navbar');
    }
});


$('.tabs a').click(function(e){
    var $a = $(this);
    var $li = $a.parent();
    
    if($li.hasClass('active')){
        return false;
    }
    
    var $target = $($a.attr('href'));
    $li.siblings('.active').removeClass('active');
    $li.addClass('active');

    $target.siblings(':visible').fadeOut(500, function(){
        $target.fadeIn(500);
    })

})