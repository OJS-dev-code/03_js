$(function(){
    $('#input1').val("텍스트필드를 다시 입력하였습니다");
    $('#textarea1').val("한나야 화내지마");
    $('#select1').val("city2");
    $('#select2').val(['town2','town3']);

    //내용 비우기
    $('#emp').empty();

    //내용 추가하기
    $('.insert p:eq(2)').after("<p>특히 한나는 더 안됨</p>");
    $("<p>그럴리가</p>").insertAfter('.insert p:eq(0)');

    $('.insert p:eq(0)').before("<p>신나는 금요일</p>");
    $("<p>학교종이 땡땡땡</p>").insertBefore('.insert p:eq(0)');
    
    //클래스 더하기 append/prepend
    let basket=$('#basket')
    let apple=$('#apple')
    let banana=$('#banana')
    let orange=$('#orange')

    basket.append(apple);
    basket.append(orange);
    banana.appendTo(basket)

    $('.img>a').hover(function(){
        $(this).find('img').css({'transform':'scale(1.3)','transition':'all .3s' })
    },function(){
        $(this).find('img').css({'transform':'scale(1)' })
    });


    let topLine=$('.topLine');
    let bottomLine=$('.bottomLine');
    let leftLine=$('.leftLine');
    let rightLine=$('.rightLine');
    let setIn;
    function line(){
        setIn= setInterval(function(){
            topLine.css('left','-100%').animate({left:0},500);
            bottomLine.css('left','100%').animate({left:0},500);
            leftLine.css('top','-100%').animate({top:0},500);
            rightLine.css('top','100%').animate({top:0},500);
        },1500)
    }
   
    $('.line').hover(function(){
        line()
    }, function(){
        clearInterval(setIn)
    });

    //그룹이벤트 등록하는 방법1
    $('.btn1').on("mouseover focus", function(){
        $('.btn1').css('background', 'red');
    });

    //그룹이벤트 등록하는 방법2
    $('.btn2').on({"mouseover focus":function(){
        $('.btn2').css('background', 'yellow');
    }});

    //그룹이벤트 등록하는 방법2
    $('.btn3').on({"mouseover":function(){
        $(this).css('background', 'pink');
    }, "focus":function(){
        $(this).css('background', 'green');
    }});

    //preventDefault
    //e = event를 위한 놈
    $('.btn4').on("click",function(e){
        e.preventDefault();
        //a 태그가 가지고 있는 이벤트동작 막힘

        $('.txt4').css('background','green');
    });
    //return false
    $('.btn5').on("click",function(e){
        $('.txt5').css('background','pink');
        return false;
        //아무값도 반환하지마 == css만 변경하고 어떤 동작도 수행하지마
    });
    //doubleclick
    $('.btn6').on("dblclick",function(e){
        $('.txt6').css('background','greenyellow');
    });

    //mouse event
    //hover
    $('.hover').hover(function(){
        $('.hover').text('말똥말똥말똥');
    }, function(){
        $('.hover').text('최말똥');
    });
    //mouseenter mouseleave
    $('.mouse').mouseenter(function(){
        $('.mouse').html('text랑 html 뭔 차이일까');
    });
    $('.mouse').mouseleave(function(){
        $('.mouse').text('<h1>태그를 넣어도 제대로 동작하지 않아요<h1>')
    });
    //focus/blur
    $('.focus').focus(function(){
        $('.focus').addClass('actives');
    })
    $('.focus').blur(function(){
        $('.focus').removeClass('actives');
    })

    //click
    $('.clickTitle').click(function(){
        $(this).text('왕 재미있다');

        let img=$('<img>', {
            src:'https://shop.hansalim.or.kr/im/is/activeDesigner/080601061_content1.jpg',
            alt:'이미지'
        })

        $('#imgContainer').append(img);
    });
});