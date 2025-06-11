$(function(){
    //메뉴
    $('nav>ul').hover(function(){
        $(this).find('.sub').stop().slideDown(1000);
    },function(){
        $(this).find('.sub').stop().slideUp(500);
    });
    //이미지슬라이드
    let slider = $('#imgslider>ul>li');
    let current = 0;
    
    setInterval(function(){
        let prev = slider.eq(current);
        move(prev, 0, '-100%');
        current++;
        //만약 이미지 개수만큼 되면, 이미지 인덱스는 0으로 돌아간다.
        if(current==slider.length) current=0;
        
        let next = slider.eq(current);
        move(next, '100%', 0);

    },3000)

    function move(tg, start, end){
        tg.css('left',start).stop().animate({left:end},500);
    }

    //탭
    // tab, content 둘의 li와 div 개수가 동일, 해당하는 내용의 순서가 동일해야 함.
    let tab = $('.tabs>ul>li'); // li 공지사항, 갤러리 
    let content=$('.tabcontents>div'); //div 공지사항 내용, 갤러리 내용

    tab.click(function(e){
        //클릭한 것의 index 번호
        let i = $(this).index();
        e.preventDefault();
        //active class는 모두 지우고, 클릭한 것만  active 추가
        $('.tabs>ul>li>a').removeClass('active')
        $(this).find('a').addClass('active');
        //모든 내용을 숨기고, 클릭한 것의 인덱스 번호와 동일한 인덱스 번호를 가진 content 보이기 
        content.hide();
        content.eq(i).show();
    });

    //공지사항 내용을 클릭하면 팝업modal이 나타나고, 닫기를 누르면 꺼진다.
    $('.notice>ul>li').click(function(e){
        e.preventDefault();
        $('.modal').show();
    });
    $('.close').click(function(){
        $('.modal').hide();
    });
})