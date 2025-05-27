let heading = document.querySelector('#heading');
heading.onclick = function(){
    heading.style.color = "red";
}

/* alert("안녕하세요")
confirm("저녁은 뭘까") */
// prompt("몇살이야","22")

// document.write("<h1>hey there what's going on</h1>")

/* var name = prompt("이름이 무엇인가요?");
console.log(name) */
let width;
let height;

width=200;
height=50;
let area = width*height;
console.log(area);
let totalArea =5;

const pi = 3.14;
let radius = prompt("반지름값을 입력해주세요");

let area1 = radius * radius * pi;
console.log("원의넓이"+area1)