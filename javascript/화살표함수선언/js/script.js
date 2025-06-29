//es5
var pow = function(x){return x*x;}
console.log(pow(3));

//es6
//매개변수가 하나 있는 경우
const pow1 = x=> x*x 
// 함수 몸체가 한 줄의 구문이면 중괄호 생략 가능, 암묵적으로 return 사용 안함
console.log(pow1(5));

//매개변수가 없는 경우
const pow2 = () => {}

//매개변수가 여러개 경우
const sum = (x,y) => x+y
console.log(sum(2,3));

const pow3 = () => {
    const x = 10;
    return x;
}
console.log(pow3());

//this는 arrow function에서 사용 불가능하다. 
//this 사용 예시 
function Prefixer(prefix){
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
  // (A)
  return arr.map(function (x) {
    return this.prefix + ' ' + x; // (B)
  } .bind(this));
};

var pre = new Prefixer('Hi');
console.log(pre.prefixArray(['Lee', 'Kim']));