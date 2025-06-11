//변수 type
console.log('변수 타입');
let name="정서";
console.log(name);

name = "말똥이";
console.log(name);

const animal="cat";
console.log(animal);

console.log(typeof name);
let number =5;
console.log(typeof number);

const booltype = true;
console.log(typeof booltype);

let age=22;
console.log(typeof age);

let isAdult=true;
console.log(typeof isAdult)

//배열은 내부적으로 object이기 때문에 결과값은 object로 나옴
let numbers=[1,2,3,4];
console.log(typeof numbers);

let user={name:"정서", age:22};
console.log(typeof user);

//log 결과가 object로 나오는 것은 오래된 버그
let nothing=null;
console.log(typeof nothing);

let x;
console.log(typeof x);

//함수 호이스팅(Hoisting)
// ❌ Uncaught TypeError: sayHi is not a function
/* sayHi(); 
var sayHi = function() {
  console.log("Hi!");
}; 
*/
console.log('변수 호이스팅');
sayHello(); // ✅ 정상 동작
function sayHello() {
  console.log("Hello!");
}

//문자와 변수 연결
console.log('문자와 변수 연결');
const char='c';
const brendan = char+'c'+5;
console.log(brendan)
console.log(typeof brendan)
let plus = char+brendan;
console.log(plus);

console.log(`value: ${brendan}, type: ${typeof brendan}`);

//문자와 변수 연결
const char1="c";
const brendan1='brendan';
const greeting='hello'+ brendan1;
console.log(greeting);
console.log(`value: ${greeting}, type: ${typeof greeting} `)

//연산자 operators
console.log('연산자');
console.log(1+1); //add
console.log(1-1); //substract
console.log(1/1); //divide
console.log(1*1); //multiple
console.log(5%2); //remainder 나머지구하기 
console.log(2**3); //exponentiation
console.log(5 ^ 3); //bitwise,결과 6

//증감 연산자 
console.log('증감연산자');
let counter = 2;
console.log(counter);
++counter;
console.log(counter);
--counter;
console.log(counter);

//할당연산자
console.log('할당연산자');
let z = 3;
let a = 6;
z += a; // z = z+a; 9
console.log(z);
z -= a //z = z-a; 3
console.log(z);
z *= a //z = z*a; 18
console.log(z);
z /= a //z = z/a; 3
console.log(z);

//비교연산자
console.log('비교연산자->결과값 boolean');
console.log(10<6); //false
console.log(10<=6);
console.log(10==6);
console.log(10>6); //true
console.log(10>=6);

//논리 연산자
console.log('논리 연산자 or || and && not !');
const value1=false;
const value2=4<2; //false
console.log(`or:${value1 || value2 || check()}`);
function check(){
  for(let i=0; i<10; i++){
    console.log('오예');
  }  
  return true;
};
console.log(`and:${check() && value1 && value2}`);
console.log(`not:${!value1}`);


//Equality(같다)
console.log('equlity 같은지 아닌지 확인');
const stringFive='5';
const numberFive=5;
//== loose equality, with type conversion 타입을 변경해서 나타내줌
console.log(stringFive==numberFive); //value값 동일하므로 true
console.log(stringFive===numberFive); //type값은 다르므로 false
console.log(stringFive!=numberFive); //value값 동일하므로 false
//=== strict equality(타입이 다르면 달라), no type conversion
console.log('type까지같나?')
console.log(stringFive===numberFive); //type이 다르므로 false
console.log(stringFive!==numberFive); //type이 다르므로 true


//object equality by reference
console.log('object끼리 비교')
const hyun1={name:'hyun'};
const hyun2={name:'hyun'};
const hyun3=hyun1;
console.log(hyun1==hyun2);//false 서로 다른 객체 이므로
console.log(hyun1===hyun2);//false 서로 다른 객체 이므로
console.log(hyun1===hyun3);//true 서로 같은 객체 이므로

//equality -puzzler
console.log("0과 '', null과 false,undefined의 value, type비교")
console.log(0==false);//true
console.log(0===false);//0은 boolean 타입이 아니기 때문에 false 
console.log(''==false);//true
console.log(''===false);//''은 boolean 타입이 아니기 때문에 false
console.log(null==undefined);//true
console.log(null===undefined);//false
console.log('결과적으로, value값은 동일하지만 type은 다르다.')
