var arr=[1,2,3,4,5];
console.log(arr);

//배열 슬라이싱 -> 1번부터 4번전까지 
console.log(arr.slice(1,4)); //arr1=[2,3,4] 

//배열에서 빼고 넣기 
arr.splice(1,3,100); //index 2번부터 2개 빼기
console.log(arr); //1, 100, 5

let arr_splice=["나는", "지현", "입니다"];
arr_splice.splice(1,0,"대한민국","국군")
console.log(arr_splice);//["나는","대한민국","국군","지현","입니다"]

//concat 배열 추가
arr = arr.concat([3,6])
console.log(`arr.concat([3,6])->${arr}`); //1,100,5,3,6
//index value 찾고 index 반환
console.log(`100의 index번호: ${arr.indexOf(100)}`); //1

var d = arr.includes(2);
console.log(`arr.includes(2):${d}`);