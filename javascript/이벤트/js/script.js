let btn = document.getElementById('submit');
let container = document.querySelector('.container');


btn.addEventListener('click', function(){
    //addEventListner는 this 불가능
    btn.style.color='red';
    console.log('button clicked');
});

container.addEventListener('mouseenter', ()=>{
    container.style.background='green'
    console.log('container mouse entered');
});
container.addEventListener('mouseleave', ()=>{
    container.style.background='none'
    console.log('container mouse leaved');
});

window.addEventListener('keydown', function(event){
    console.log(event.keyCode);// keycode
    console.log(event.key); //key값
});

