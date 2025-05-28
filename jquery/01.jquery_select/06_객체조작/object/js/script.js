$(function(){
    const v = $('#input1').val();
    console.log(v)
    $('#input1').val('텍스트필드를 다시 입력했습니다.');

    let vt = $('#textarea1').val();
    console.log(vt)
    $('#textarea1').val('김도영 아프지마');

    vt = $('#select1').val();
    console.log(vt)
    $('#select1').val('city2');

    vt = $('#select2').val();
    console.log(vt)
    $('#select2').val(['town2', 'town3']);
    console.log(vt)


    $('#emp').empty();

    $('.insert p:eq(2)').after('<p>특히 누구는 안됨</p>');
    $('<p>신분증챙겨오세요</p>').insertAfter('.insert p:eq(0)');

    $('.insert p:eq(2)').before('<p>제발요</p>');
    $('<p>학교종이 땡땡땡</p>').insertBefore('.insert p:eq(0)');

    let basket = $('#basket');
    let apple = $('#apple');
    let banana = $('#banana');
    let orange = $('#orange');

    basket.append(apple);
    basket.append(orange);
    banana.appendTo(basket)

    $('.img>a').hover(function(){
        // $(this) == $('.img>a')
        $(this).find('img').css({transform:'scale(1.5)',transition:'.3s'});
    },function(){
        $(this).find('img').css({transform:'scale(1.0)',transition:'.3s'});
    });

    let topLine =$('.topLine');
    let bottomLine =$('.bottomLine');
    let leftLine =$('.leftLine');
    let rightLine =$('.rightLine');
    let setIn;

    function line(){
        //1.5s마다 실행되는 함수
        setIn= setInterval(function(){
            topLine.css('left','-100%').animate({left:0},500);
            bottomLine.css('left','100%').animate({left:0},500);
            leftLine.css('top','-100%').animate({top:0},500);
            rightLine.css('top','100%').animate({top:0},500);
        },1500);
    };
    //line function 실행
    $('.line').hover(function(){
           line(); 
        }, function(){
            clearInterval(setIn);
        });
});