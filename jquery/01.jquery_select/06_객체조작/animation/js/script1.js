// $(function(){
//     $('#start').click(function(){
//         $('#dog').fadeOut(1000).fadeIn(1000);
//     });
// });

// javascript -> OnClick(), jQuery -> click()
//1초 -> 1000

// $(function(){
//     $('#start').click(function(){
//         $('#dog').animate({top: '-=100px'},500).animate({top:'+=100'},500);
//     });
// });

$(function(){
    $('#start').click(function(){
        $('#dog').animate({width:'400px'},500).animate({width:'200px'},500).animate({width:'300px'},500);
    });
});