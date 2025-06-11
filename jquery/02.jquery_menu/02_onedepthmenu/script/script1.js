$(function(){
    const menu = $('.menu>li');
    menu.hover(function(){
        close();
        let tg = $(this);
        let textImgBig = $(this).find('.text_img>.on');
        let textImgSmall = $(this).find('.text_img>.off');
        let brandImg = $(this).find('.menu_img');
        let brandImgWidth = brandImg.find('img').innerWidth();
        let brandImgHeight = brandImg.find('img').innerHeight();

        textImgBig.css('display','block');
        textImgSmall.css('display','none');

        brandImg.stop().animate({width:brandImgWidth, height:brandImgHeight},500)

    }, function(){
        let tg = $(this);
        let textImgBig = $(this).find('.text_img>.on');
        let textImgSmall = $(this).find('.text_img>.off');
        let brandImg = $(this).find('.menu_img');
        let brandImgWidth = 0;
        let brandImgHeight = 0;

        textImgBig.css('display','none');
        textImgSmall.css('display','block');

        brandImg.stop().animate({width:brandImgWidth, height:brandImgHeight},500)
    })
    open();
    function open(){
        let tg = $('.menu>li').eq(3);
        let textImgBig = tg.find('.text_img>.on');
        let textImgSmall = tg.find('.text_img>.off');
        let brandImg = tg.find('.menu_img');
        let brandImgWidth = brandImg.find('img').innerWidth();
        let brandImgHeight = brandImg.find('img').innerHeight();

        textImgBig.css('display','none');
        textImgSmall.css('display','block');

        brandImg.stop().animate({width:brandImgWidth, height:brandImgHeight},500)
    }
    function close(){
        let tg = $('.menu>li').eq(3);
        let textImgBig = tg.find('.text_img>.on');
        let textImgSmall = tg.find('.text_img>.off');
        let brandImg = tg.find('.menu_img');
        let brandImgWidth = 0;
        let brandImgHeight = 0;

        textImgBig.css('display','none');
        textImgSmall.css('display','block');

        brandImg.stop().animate({width:brandImgWidth, height:brandImgHeight},500)
    }
});