// Navbar
$('.navbar-icon').click(function(){
    $('.navbar-list').css({width: '100%', opacity: '1'})
    $('.navbar').css({width:'100%',opacity:'1'})
    $('.navbar-icon').css('zIndex', 98)
    $('.navbar-icon').css('filter', 'greyscale(0)')
})
$('.navbar-icon-exit').click(function(){
    $('.navbar-list').css({width: '0%', opacity: '0'})
    $('.navbar').css({width:'0%',opacity:'0'})
    $('.navbar-icon').css('zIndex', 100)
    $('.navbar-icon').css('filter', 'greyscale(0.7)')
})
$('.navbar li').click(function(){
    $('.navbar-list').css({width: '0%', opacity: '0'})
    $('.navbar').css({width:'0%',opacity:'0'})
    $('.navbar-icon').css('zIndex', 100)
    $('.navbar-icon').css('filter', 'greyscale(0.7)')
})

// Education
$('.education .cards .first').click(function(){
    $('.cards .card:nth-child(1)').addClass('second');
    $('.cards .card:nth-child(1)').removeClass('first  third fourth fifth sixth seventh eights nineth tenth');
    
    $('.cards .card:nth-child(2)').addClass('third');
    $('.cards .card:nth-child(2)').removeClass('first second  fourth fifth sixth seventh eights nineth tenth');

    $('.cards .card:nth-child(3)').addClass('fourth');
    $('.cards .card:nth-child(3)').removeClass('first second  third fifth sixth seventh eights nineth tenth');

    $('.cards .card:nth-child(4)').addClass('fifth');
    $('.cards .card:nth-child(4)').removeClass('first second  third fourth  sixth seventh eights  nineth tenth');

    $('.cards .card:nth-child(5)').addClass('sixth');
    $('.cards .card:nth-child(5)').removeClass('first second  third fourth fifth  seventh eights nineth tenth');

    $('.cards .card:nth-child(6)').addClass('seventh');
    $('.cards .card:nth-child(6)').removeClass('first second  third fourth fifth  sixth eights nineth tenth');

    $('.cards .card:nth-child(7)').addClass('eights');
    $('.cards .card:nth-child(7)').removeClass('first second  third fourth fifth sixth seventh  nineth tenth');

    $('.cards .card:nth-child(8)').addClass('nineth');
    $('.cards .card:nth-child(8)').removeClass('first second  third fourth fifth sixth eights seventh   tenth');

    $('.cards .card:nth-child(9)').addClass('tenth');
    $('.cards .card:nth-child(9)').removeClass(' first second  third fourth fifth sixth seventh eights nineth ');

    $('.cards .card:nth-child(10)').addClass('first');
    $('.cards .card:nth-child(10)').removeClass(' second  third fourth fifth sixth seventh eights nineth tenth');
})
$('.education .cards .second').click(function(){
    $('.cards .card:nth-child(2)').addClass('second');
    $('.cards .card:nth-child(2)').removeClass('first   third fourth fifth sixth seventh eights nineth tenth');
    $('.cards .card:nth-child(3)').addClass('third');
    $('.cards .card:nth-child(3)').removeClass('first second   fourth fifth sixth seventh eights nineth tenth');
    $('.cards .card:nth-child(4)').addClass('fourth');
    $('.cards .card:nth-child(4)').removeClass('first second  third  fifth sixth seventh eights nineth tenth');
    $('.cards .card:nth-child(5)').addClass('fifth');
    $('.cards .card:nth-child(5)').removeClass('first second  third fourth  sixth seventh eights nineth tenth');
    $('.cards .card:nth-child(6)').addClass('sixth');
    $('.cards .card:nth-child(6)').removeClass('first second  third fourth fifth  seventh eights nineth tenth');
    $('.cards .card:nth-child(7)').addClass('seventh');
    $('.cards .card:nth-child(7)').removeClass('first second  third fourth fifth sixth  eights nineth tenth');
    $('.cards .card:nth-child(8)').addClass('eights');
    $('.cards .card:nth-child(8)').removeClass('first second  third fourth fifth sixth seventh  nineth tenth');
    $('.cards .card:nth-child(9)').addClass('nineth');
    $('.cards .card:nth-child(9)').removeClass('first second  third fourth fifth sixth seventh eights  tenth');
    $('.cards .card:nth-child(10)').addClass('tenth');
    $('.cards .card:nth-child(10)').removeClass('first second  third fourth fifth sixth seventh eights nineth ');
    $('.cards .card:nth-child(1)').addClass('first');
    $('.cards .card:nth-child(1)').removeClass(' second  third fourth fifth sixth seventh eights nineth tenth');
})
$('.education .cards .third').click(function(){
    $('.cards .card:nth-child(3)').addClass('second');
    $('.cards .card:nth-child(3)').removeClass(' first   third fourth fifth sixth seventh eights nineth tenth');
    $('.cards .card:nth-child(4)').addClass('third');
    $('.cards .card:nth-child(4)').removeClass('first second   fourth fifth sixth seventh eights nineth tenth');
    $('.cards .card:nth-child(5)').addClass('fourth');
    $('.cards .card:nth-child(5)').removeClass('first second  third  fifth sixth seventh eights nineth tenth');
    $('.cards .card:nth-child(6)').addClass('fifth');
    $('.cards .card:nth-child(6)').removeClass('first second  third fourth  sixth seventh eights nineth tenth');
    $('.cards .card:nth-child(7)').addClass('sixth');
    $('.cards .card:nth-child(7)').removeClass('first second  third fourth fifth  seventh eights nineth tenth');
    $('.cards .card:nth-child(8)').addClass('seventh');
    $('.cards .card:nth-child(8)').removeClass('first second  third fourth fifth sixth  eights nineth tenth');
    $('.cards .card:nth-child(9)').addClass('eights');
    $('.cards .card:nth-child(9)').removeClass('first second  third fourth fifth sixth seventh  nineth tenth');
    $('.cards .card:nth-child(10)').addClass('nineth');
    $('.cards .card:nth-child(10)').removeClass('first second  third fourth fifth sixth seventh eights  tenth');
    $('.cards .card:nth-child(1)').addClass('tenth');
    $('.cards .card:nth-child(1)').removeClass('first second  third fourth fifth sixth seventh eights nineth ');
    $('.cards .card:nth-child(2)').addClass('first');
    $('.cards .card:nth-child(2)').removeClass(' second  third fourth fifth sixth seventh eights nineth tenth');
})
$('.education .cards .fourth').click(function(){
    $('.cards .card:nth-child(4)').addClass('second');
    $('.cards .card:nth-child(4)').removeClass('first   third fourth fifth sixth seventh eights nineth tenth');
    $('.cards .card:nth-child(5)').addClass('third');
    $('.cards .card:nth-child(5)').removeClass('first second   fourth fifth sixth seventh eights nineth tenth');
    $('.cards .card:nth-child(6)').addClass('fourth');
    $('.cards .card:nth-child(6)').removeClass('first second  third  fifth sixth seventh eights nineth tenth');
    $('.cards .card:nth-child(7)').addClass('fifth');
    $('.cards .card:nth-child(7)').removeClass('first second  third fourth  sixth seventh eights nineth tenth');
    $('.cards .card:nth-child(8)').addClass('sixth');
    $('.cards .card:nth-child(8)').removeClass('first second  third fourth fifth  seventh eights nineth tenth');
    $('.cards .card:nth-child(9)').addClass('seventh');
    $('.cards .card:nth-child(9)').removeClass('first second  third fourth fifth sixth  eights nineth tenth');
    $('.cards .card:nth-child(10)').addClass('eights');
    $('.cards .card:nth-child(10)').removeClass('first second  third fourth fifth sixth seventh  nineth tenth');
    $('.cards .card:nth-child(1)').addClass('nineth');
    $('.cards .card:nth-child(1)').removeClass('first second  third fourth fifth sixth seventh eights  tenth');
    $('.cards .card:nth-child(2)').addClass('tenth');
    $('.cards .card:nth-child(2)').removeClass('first second  third fourth fifth sixth seventh eights nineth ');
    $('.cards .card:nth-child(3)').addClass('first');
    $('.cards .card:nth-child(3)').removeClass(' second  third fourth fifth sixth seventh eights nineth tenth');
})
$('.education .cards .tenth').click(function(){
    $('.cards .card:nth-child(10)').addClass('second');
    $('.cards .card:nth-child(10)').removeClass('first   third fourth fifth sixth seventh eights nineth tenth');
    $('.cards .card:nth-child(1)').addClass('third');
    $('.cards .card:nth-child(1)').removeClass('first second   fourth fifth sixth seventh eights nineth tenth');
    $('.cards .card:nth-child(2)').addClass('fourth');
    $('.cards .card:nth-child(2)').removeClass('first second  third  fifth sixth seventh eights nineth tenth');
    $('.cards .card:nth-child(3)').addClass('fifth');
    $('.cards .card:nth-child(3)').removeClass('first second  third fourth  sixth seventh eights nineth tenth');
    $('.cards .card:nth-child(4)').addClass('sixth');
    $('.cards .card:nth-child(4)').removeClass('first second  third fourth fifth  seventh eights nineth tenth');
    $('.cards .card:nth-child(5)').addClass('seventh');
    $('.cards .card:nth-child(5)').removeClass('first second  third fourth fifth sixth  eights nineth tenth');
    $('.cards .card:nth-child(6)').addClass('eights');
    $('.cards .card:nth-child(6)').removeClass('first second  third fourth fifth sixth seventh  nineth tenth');
    $('.cards .card:nth-child(7)').addClass('nineth');
    $('.cards .card:nth-child(7)').removeClass('first second  third fourth fifth sixth seventh eights  tenth');
    $('.cards .card:nth-child(8)').addClass('tenth');
    $('.cards .card:nth-child(8)').removeClass('first second  third fourth fifth sixth seventh eights nineth ');
    $('.cards .card:nth-child(9)').addClass('first');
    $('.cards .card:nth-child(9)').removeClass(' second  third fourth fifth sixth seventh eights nineth tenth');
})
$('.education .cards .nineth').click(function(){
    $('.cards .card:nth-child(9)').addClass('second');
    $('.cards .card:nth-child(9)').removeClass('first  third fouth fifth sixth seventh eights nineth tenth');
    
    $('.cards .card:nth-child(10)').addClass('third');
    $('.cards .card:nth-child(10)').removeClass('first second  fourth fifth sixth seventh eights nineth tenth');

    $('.cards .card:nth-child(1)').addClass('fourth');
    $('.cards .card:nth-child(1)').removeClass('first second  third fifth sixth seventh eights nineth tenth');

    $('.cards .card:nth-child(2)').addClass('fifth');
    $('.cards .card:nth-child(2)').removeClass('first second  third fourth  sixth seventh eights  nineth tenth');

    $('.cards .card:nth-child(3)').addClass('sixth');
    $('.cards .card:nth-child(3)').removeClass('first second  third fourth fifth  seventh eights nineth tenth');

    $('.cards .card:nth-child(4)').addClass('seventh');
    $('.cards .card:nth-child(4)').removeClass('first second  third fourth fifth  sixth eights nineth tenth');

    $('.cards .card:nth-child(5)').addClass('eights');
    $('.cards .card:nth-child(5)').removeClass('first second  third fourth fifth sixth seventh  nineth tenth');

    $('.cards .card:nth-child(6)').addClass('nineth');
    $('.cards .card:nth-child(6)').removeClass('first second  third fourth fifth sixth seventh eights tenth');

    $('.cards .card:nth-child(7)').addClass('tenth');
    $('.cards .card:nth-child(7)').removeClass(' first second  third fourth fifth sixth seventh eights nineth ');

    $('.cards .card:nth-child(8)').addClass('first');
    $('.cards .card:nth-child(8)').removeClass(' second  third fourth fifth sixth seventh eights nineth tenth');
})
$('.education .cards .eights').click(function(){
    $('.cards .card:nth-child(8)').addClass('second');
    $('.cards .card:nth-child(8)').removeClass('first  third fouth fifth sixth seventh eights nineth tenth');
    
    $('.cards .card:nth-child(9)').addClass('third');
    $('.cards .card:nth-child(9)').removeClass('first second  fourth fifth sixth seventh eights nineth tenth');

    $('.cards .card:nth-child(10)').addClass('fourth');
    $('.cards .card:nth-child(10)').removeClass('first second  third fifth sixth seventh eights nineth tenth');

    $('.cards .card:nth-child(1)').addClass('fifth');
    $('.cards .card:nth-child(1)').removeClass('first second  third fourth  sixth seventh eights  nineth tenth');

    $('.cards .card:nth-child(2)').addClass('sixth');
    $('.cards .card:nth-child(2)').removeClass('first second  third fourth fifth  seventh eights nineth tenth');

    $('.cards .card:nth-child(3)').addClass('seventh');
    $('.cards .card:nth-child(3)').removeClass('first second  third fourth fifth  sixth eights nineth tenth');

    $('.cards .card:nth-child(4)').addClass('eights');
    $('.cards .card:nth-child(4)').removeClass('first second  third fourth fifth sixth seventh  nineth tenth');

    $('.cards .card:nth-child(5)').addClass('nineth');
    $('.cards .card:nth-child(5)').removeClass('first second  third fourth fifth sixth seventh   tenth');

    $('.cards .card:nth-child(6)').addClass('tenth');
    $('.cards .card:nth-child(6)').removeClass(' first second  third fourth fifth sixth seventh eights nineth ');

    $('.cards .card:nth-child(7)').addClass('first');
    $('.cards .card:nth-child(7)').removeClass(' second  third fourth fifth sixth seventh eights nineth tenth');
})
$('.education .cards .seventh').click(function(){
    $('.cards .card:nth-child(7)').addClass('second');
    $('.cards .card:nth-child(7)').removeClass('first  third fouth fifth sixth seventh eights nineth tenth');
    
    $('.cards .card:nth-child(8)').addClass('third');
    $('.cards .card:nth-child(8)').removeClass('first second  fourth fifth sixth seventh eights nineth tenth');

    $('.cards .card:nth-child(9)').addClass('fourth');
    $('.cards .card:nth-child(9)').removeClass('first second  third fifth sixth seventh eights nineth tenth');

    $('.cards .card:nth-child(10)').addClass('fifth');
    $('.cards .card:nth-child(10)').removeClass('first second  third fourth  sixth seventh eights  nineth tenth');

    $('.cards .card:nth-child(1)').addClass('sixth');
    $('.cards .card:nth-child(1)').removeClass('first second  third fourth fifth  seventh eights nineth tenth');

    $('.cards .card:nth-child(2)').addClass('seventh');
    $('.cards .card:nth-child(2)').removeClass('first second  third fourth fifth  sixth eights nineth tenth');

    $('.cards .card:nth-child(3)').addClass('eights');
    $('.cards .card:nth-child(3)').removeClass('first second  third fourth fifth sixth seventh  nineth tenth');

    $('.cards .card:nth-child(4)').addClass('nineth');
    $('.cards .card:nth-child(4)').removeClass('first second  third fourth fifth sixth seventh   tenth');

    $('.cards .card:nth-child(5)').addClass('tenth');
    $('.cards .card:nth-child(5)').removeClass(' first second  third fourth fifth sixth seventh eights nineth ');

    $('.cards .card:nth-child(6)').addClass('first');
    $('.cards .card:nth-child(6)').removeClass(' second  third fourth fifth sixth seventh eights nineth tenth');
})
$('.education .cards .sixth').click(function(){
    $('.cards .card:nth-child(6)').addClass('second');
    $('.cards .card:nth-child(6)').removeClass(' first   third fourth fifth sixth seventh eights nineth tenth');
    $('.cards .card:nth-child(7)').addClass('third');
    $('.cards .card:nth-child(7)').removeClass('first second   fourth fifth sixth seventh eights nineth tenth');
    $('.cards .card:nth-child(8)').addClass('fourth');
    $('.cards .card:nth-child(8)').removeClass('first second  third  fifth sixth seventh eights nineth tenth');
    $('.cards .card:nth-child(9)').addClass('fifth');
    $('.cards .card:nth-child(9)').removeClass('first second  third fourth  sixth seventh eights nineth tenth');
    $('.cards .card:nth-child(10)').addClass('sixth');
    $('.cards .card:nth-child(10)').removeClass('first second  third fourth fifth  seventh eights nineth tenth');
    $('.cards .card:nth-child(1)').addClass('seventh');
    $('.cards .card:nth-child(1)').removeClass('first second  third fourth fifth sixth  eights nineth tenth');
    $('.cards .card:nth-child(2)').addClass('eights');
    $('.cards .card:nth-child(2)').removeClass('first second  third fourth fifth sixth seventh  nineth tenth');
    $('.cards .card:nth-child(3)').addClass('nineth');
    $('.cards .card:nth-child(3)').removeClass('first second  third fourth fifth sixth seventh eights  tenth');
    $('.cards .card:nth-child(4)').addClass('tenth');
    $('.cards .card:nth-child(4)').removeClass('first second  third fourth fifth sixth seventh eights nineth ');
    $('.cards .card:nth-child(5)').addClass('first');
    $('.cards .card:nth-child(5)').removeClass(' second  third fourth fifth sixth seventh eights nineth tenth');
})
$('.education .cards .fifth').click(function(){
    $('.cards .card:nth-child(5)').addClass('second');
    $('.cards .card:nth-child(5)').removeClass(' first   third fourth fifth sixth seventh eights nineth tenth');
    $('.cards .card:nth-child(6)').addClass('third');
    $('.cards .card:nth-child(6)').removeClass('first second   fourth fifth sixth seventh eights nineth tenth');
    $('.cards .card:nth-child(7)').addClass('fourth');
    $('.cards .card:nth-child(7)').removeClass('first second  third  fifth sixth seventh eights nineth tenth');
    $('.cards .card:nth-child(8)').addClass('fifth');
    $('.cards .card:nth-child(8)').removeClass('first second  third fourth  sixth seventh eights nineth tenth');
    $('.cards .card:nth-child(9)').addClass('sixth');
    $('.cards .card:nth-child(9)').removeClass('first second  third fourth fifth  seventh eights nineth tenth');
    $('.cards .card:nth-child(10)').addClass('seventh');
    $('.cards .card:nth-child(10)').removeClass('first second  third fourth fifth sixth  eights nineth tenth');
    $('.cards .card:nth-child(1)').addClass('eights');
    $('.cards .card:nth-child(1)').removeClass('first second  third fourth fifth sixth seventh  nineth tenth');
    $('.cards .card:nth-child(2)').addClass('nineth');
    $('.cards .card:nth-child(2)').removeClass('first second  third fourth fifth sixth seventh eights  tenth');
    $('.cards .card:nth-child(3)').addClass('tenth');
    $('.cards .card:nth-child(3)').removeClass('first second  third fourth fifth sixth seventh eights nineth ');
    $('.cards .card:nth-child(4)').addClass('first');
    $('.cards .card:nth-child(4)').removeClass(' second  third fourth fifth sixth seventh eights nineth tenth');
})

// history


$('.history .card1 .main').click(function(){
    $('.history .card1 .card:nth-child(3)').removeClass('main-secondary main-last');
    $('.history .card1 .card:nth-child(3)').addClass('main');
    $('.history .card1 .card:nth-child(2)').removeClass('secondary-main');
    $('.history .card1 .card:nth-child(1)').removeClass('last-main');
})
$('.history .card1 .secondary').click(function(){
    $('.history .card1 .card:nth-child(2)').addClass('secondary-main');
    $('.history .card1 .card:nth-child(3)').removeClass('main main-last');
    $('.history .card1 .card:nth-child(3)').addClass('main-secondary');
    $('.history .card1 .card:nth-child(1)').removeClass('last-main');
})
$('.history .card1 .last').click(function(){
    $('.history .card1 .card:nth-child(1)').addClass('last-main');
    $('.history .card1 .card:nth-child(3)').removeClass('main main-secondary');
    $('.history .card1 .card:nth-child(3)').addClass('main-last');
    $('.history .card1 .card:nth-child(2)').removeClass('secondary-main');
})
$('.history .card2 .main').click(function(){
    $('.history .card2 .card:nth-child(3)').removeClass('main-secondary main-last');
    $('.history .card2 .card:nth-child(3)').addClass('main');
    $('.history .card2 .card:nth-child(2)').removeClass('secondary-main');
    $('.history .card2 .card:nth-child(1)').removeClass('last-main');
})
$('.history .card2 .secondary').click(function(){
    $('.history .card2 .card:nth-child(2)').addClass('secondary-main');
    $('.history .card2 .card:nth-child(3)').removeClass('main main-last');
    $('.history .card2 .card:nth-child(3)').addClass('main-secondary');
    $('.history .card2 .card:nth-child(1)').removeClass('last-main');
})
$('.history .card2 .last').click(function(){
    $('.history .card2 .card:nth-child(1)').addClass('last-main');
    $('.history .card2 .card:nth-child(3)').removeClass('main main-secondary');
    $('.history .card2 .card:nth-child(3)').addClass('main-last');
    $('.history .card2 .card:nth-child(2)').removeClass('secondary-main');
})



// ANimate btn
$('.btn1').mouseenter(function(){
    $('.interests .each-card:nth-child(1) .img-side').css({filter:'grayscale(0)'})
})
$('.btn1').mouseleave(function(){
    $('.interests .each-card:nth-child(1) .img-side').css({filter:'grayscale(0.8)'})
})
$('.btn2').mouseenter(function(){
    $('.interests .each-card:nth-child(3) .img-side').css({filter:'grayscale(0)'})
})
$('.btn2').mouseleave(function(){
    $('.interests .each-card:nth-child(3) .img-side').css({filter:'grayscale(0.8)'})
})
// Contatcts


$('.contacts .button').click(function(){
    $('.contacts .message-box').css({opacity:'1', zIndex:'10'})
})
$('.contacts .message-box .buttons .send').click(function(){
    const message = $('textarea').val()
    const name = $('.message-box input').val()
    localStorage.setItem('message', message)
    localStorage.setItem('name', name)
    $('.contacts .message-box').css({opacity:'0', zIndex:'-2'})
})
$('.contacts .message-box .buttons .exit').click(function(){
    $('.contacts .message-box').css({opacity:'0', zIndex:'-2'})
})






