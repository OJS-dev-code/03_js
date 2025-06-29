let btnCollapse = document.getElementById('btn-collapse'); //1개 
let heading = document.getElementsByClassName('panel-heading'); //3개 배열
let body = document.getElementsByClassName('panel-body'); //3개 배열
let question = document.getElementsByClassName('panel-question'); //3개 배열

for(let i=0; i<heading.length; i++){
    //heading마다 할 일
    heading[i].addEventListener('click',function(e){
        for(let j=0; j<question.length; j++){
            question[j].classList.remove('active');
            e.target.parentNode.classList.add('active');
            activebody();
        }
    });
}
function activebody(){
    for(let k=0; k<body.length; k++){
        body[k].style.display= 'none'
    }
    let activePanel=document.querySelector('.panel-question.active .panel-body');
    activePanel.style.display='block';
}
activebody();
btnCollapse.addEventListener('click', function(){
    for(let i=0; i<body.length; i++){
        body[i].style.display='none';
    }
})