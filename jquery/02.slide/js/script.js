$(function(){
    let current=0;
    let slides= $('.slide>li');

    setInterval(function(){
        let prev = slides.eq(current);
        move(prev, 0, '-100%');

        current++;
        //1 씩 증가되면 보이는 갯수와 같거나 커지면 다시 0으로 돌림
        if(current==slides.length) current=0;

        let next = slides.eq(current);
        move(next, '100%' , 0);
    },1000);

    //tg = 움직이는 대상
    function move(tg, start, end){
        tg.css('top', start).stop().animate({top:end},500);
    }
});

$(function(){
    let current=0;
    let slides2= $('.slide2>li');

    setInterval(function(){
        let prev = slides2.eq(current);
        move2(prev, 0, '-100%');

        current++;
        //1 씩 증가되면 보이는 갯수와 같거나 커지면 다시 0으로 돌림
        if(current==slides2.length) current=0;

        let next = slides2.eq(current);
        move2(next, '100%' , 0);
    },1000);

    //tg = 움직이는 대상
    function move2(tg, start, end){
        tg.css('right', start).stop().animate({right:end},500);
    }
});