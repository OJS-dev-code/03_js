$(function(){
    $('.clearfix>ul>li').hover(function(){
        $(this).find(ul).stop().slideDown(500);
    }, function(){
    });
});