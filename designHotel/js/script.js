$(function(){
    
    //1190px 이하가 되었을 때 헤더의 메뉴버튼 클릭하면 뜨게하는 기능
    const appBtn = $('.header-mobile-btn');
    const mMenu= $('.mobile-menu');

    appBtn.on({click:function(){
        mMenu.stop().animate({left:0},500);
    }});

    //메뉴를 끄기 위해 X버튼을 누르면 사라진다.
    const close=$('.appbarCloseBt');
    close.on({click:function(){
        mMenu.stop().animate({left:"-100%"},500);
    }})


    // section2로 넘어가는 기능
    // section2의 y 위치
    let nextTop=document.querySelector('.section2').offsetTop;
    document.querySelector('.nextIcon').addEventListener('click',function(e){
        e.preventDefault();
        window.scrollTo({top:nextTop, behavior:'smooth'});
    });

    //section2 마우스 위치따라서 슬라이드되는 기능
    //마우스가 왼쪽으로 가면 슬라이드가 좌에서 우로 가면서 좌측 슬라이드 보임
    //마우스가 오른쪽으로 가면 슬라이드가 우에서 좌로 가면서 우측 슬라이드가 보임
    const trandingWrap = document.querySelector('.tranding-wrap');
    const parent=trandingWrap.parentElement;
    let offset = trandingWrap.getBoundingClientRect().left;

    trandingWrap.addEventListener('mousemove',function(e){
        const maxScroll =  trandingWrap.scrollWidth - parent.clientWidth;
        let moveX = e.pageX - offset;

        if(moveX>maxScroll) moveX = maxScroll;
        if(moveX<0) moveX = 0;
        
        trandingWrap.style.left = (-moveX) + 'px';
    });
});

document.addEventListener('DOMContentLoaded', ()=>{
    const header = document.getElementById('header');
    window.addEventListener('scroll', ()=>{
        if(window.scrollY>700){
            header.classList.add('scrolled');
        }else{
            header.classList.remove('scrolled');
        }
    });
});

