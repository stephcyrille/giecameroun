$(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();
    if($(window).scrollTop()){
        $('#service1').removeClass('service1-off');
        $('#service1').addClass('service1-on');
        $('#service3').removeClass('service3-off');
        $('#service3').addClass('service3-on');
    } 
});
