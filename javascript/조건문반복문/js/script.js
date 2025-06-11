//8. Conditional operators: if
//if, else if, else

const name='hyun';
if(name==='hyun'){ //true -> 실행
	console.log('Welcome, huyun');
}else if(name==='coder'){
	console.log('You are amazing coder');
}else{
	console.log('unKwnon');
}

//if(조건1){실행} else if(조건2){실행} else{조건이 다 안맞으면}

//9.Ternary operators: ? 간단하게 출력할떄 사용 (삼항조건연산자)
//condition ? value1 : value2;
console.log(name ==='hyun' ? 'yes':'no');

//10. Switch statement(스위치 예제)
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in TS

const browser = 'IE';
switch (browser){
	case 'IE':
	console.log('go away!');
	break;
	case 'Chrome':
	console.log('love you!');
	break;
	case 'firefox':
	console.log('love you!');
	break;
	default:
	console.log('same all!');
	break;
}

//. Loops(반복문)
//while loop, while the condition is truthy, 조건문 읽고 블럭실행
//body code is executed.

let i=3;
while(i>0){
	console.log(`while:${i}`);
	i--;
}

//do while loop, body code is executed first, 블럭을 먼저 실행하고 조건문 읽음
//then check the condition.
i = 3;
do{
	console.log(`do while:${i}`);
	i--;
	
}while(i<0);


//for loop, for(begin(시작값) 처음 한번만 실행; condition(조건); step(스텝)) 
for(i=3; i>0; i--){
		console.log(`for:${i}`);
	}
for(let i =3; i>0; i=i-2){
	//inline variable declaration 인라인안에 지역변수를 선언하여 실행하는것도 좋음
	console.log(`inline variable for:${i}`);
}

//nested loops 중첩
for(let i=0; i<3; i++){
	for(let j=0; j<3; j++){
		console.log(`i:${i},j:${j}`);
	}
}

for(let dan =1; dan <=9; dan++){
    console.log(`${dan}단`);
    for(let i = 1; i <=9; i++){
        console.log(`${dan} * ${i} = ${dan*i}`);
    }
}

//break(반복문에서 완전히 끝내는것), continue(반복문에서 지금것만 스킵하고 다른것 실행)
//Q1. iterate from 0 to 10 and print only even numbers (use continue)

/* for(let i =0; i<11; i++){
		if(i%2 !==0){
			continue;
		}
	console.log(`q1.${i}`);
} */
for(let i =0; i<11; i++){
	if(i%2 ===0){ //짝수만 나오게
		console.log(`q1.${i}`);
	}
}	

for(let i =0; i<11; i++){
	if(i%2 !==0){ //짝수만 나오게
		console.log(`홀수${i}`);
	}
}	

//Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)-숫자8을 만나면 그만 하는것


for(let i =0; i<11; i++){
	if(i>8){ //1~8까지만 출력 
		break;
	}
	console.log(`q2.${i}`);
}	
