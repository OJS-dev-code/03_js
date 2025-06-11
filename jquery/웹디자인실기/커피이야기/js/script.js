$(function(){
    //세로 메뉴
    $('nav>ul>li').hover(function(){
        $(this).find('ul').stop().slideDown(500);
    },function(){
        $(this).find('ul').stop().slideUp(500);
    });

    //메인슬라이드 mainslider
    let slide=$('#mainslider>ul>li'); //이미지들을 변수 slide에 담기
    let current= 0; //초기화 위한 변수

    setInterval(function(){
        let prev = slide.eq(current);
        // move(prev,1,0);
        move(prev,0,'100%');
        current++;

        if(current == slide.length) current=0;

        let next = slide.eq(current);
        // move(next, 0, 1);
        move(next,'-100%', 0);
    },2000)

    // function move(tg,start,end){
    //     //1인 아이가 0이 되게 함
    //     tg.css('opacity','start').stop().animate({opacity:end},1000);
    // }
    //opcity 아니고 left일때 
    function move(tg,start,end){
        //우측으로 빠지는 슬라이드
        tg.css('left',start).stop().animate({'left':end},500);
    }

    //content1,2,3 클릭하면 modal창 튀어나옴
    $('.click').click(function(e){
        e.preventDefault();
        $('.modal').show();
    });
    $('.close').click(function(){
        $('.modal').hide();
    })
});