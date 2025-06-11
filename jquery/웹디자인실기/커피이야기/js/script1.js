$(function(){
    //dropdown menu
    $('header>nav>ul>li').hover(function(){
        $(this).find('ul').stop().slideDown(500);
    }, function(){
        $(this).find('ul').stop().slideUp(500);
    });
    //image slider
    let slider = $('.mainSlider>ul>li')
    // slider index
    let current = 0; 
    function move(tg, start, end){
        tg.css('left', start).stop().animate({'left':end},500);
    }
    setInterval(function(){
        let prev = slider.eq(current);
        move(prev, 0, '100%');
        current++;

        if(current==slider.length) current =0;

        let next = slider.eq(current);
        move(next, '-100%', 0)
    },2000);

});