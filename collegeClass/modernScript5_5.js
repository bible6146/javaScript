// //첫번째 문제
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
function camelize(arr){
    let temp=arr.split('-');
   
    return temp.map(s=> s.substring(0,1).toUpperCase()+s.substring(1)).join('');
    ;
}
console.log(camelize("-webkit-transition"));


//느낀점 foreach를 쓰면 반환값이 없고 해당요소로 함수만 실행
//시켜준다.


//두번째 문제
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (조건에 맞는 요소)

alert( arr ); // 5,3,8,1 (기존 배열은 변경되지 않았습니다.)

function filterRange(arr,a,b){
    return arr.filter(s=>(s>=a&&s<=b));
}

//느낀점 filter는 조건을 만족하는 요소들을 배열로 만들어주고
// find는 조건을 만족하는 단하나의 요소만 반환 한다

//세번째 문제
let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // 1과 4 사이에 있지 않은 요소는 모두 제거함

alert( arr ); // [3, 1]

function filterRangeInPlace(arr,a,b){
        arr.forEach((s,i)=>{
            if(s<a||s>b){
               arr.splice(i,1);
            }
        });
}
//slice는 배열을 짤라서 반환 해주는것이고
//delete 를하면 배열 길이는 바뀌지 않고 아무값도 안들어간다.
//splice 는 (시작인덱스, 짜를갯수임) 배열 건드림
//반환 값은 삭제된 요소로 구성된 배열이다

//네번째 문제
let arr = [5, 2, 1, -10, 8];

let arr2=arr.sort((a,b)=>-(a-b));

alert( arr ); // 8, 5, 2, 1, -10
alert(arr2);

//reverse 는 배열을 뒤집어서 반환한다 요소의 크기가 아닌 순서이다!
//reverse와 sort는 배열을 건드리는 동시에 반환도 한다

//다섯번째 문제

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(s=>({
    fullname:s.name+s.surname,
    id:s.id
}
));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullname ) // John Smith


// 느낀점 화살표 함수에서 객체를 반환 할때 {}를 쓰면 객체라고 
// 인식안하고 함수라고 인식해서 
// ()를 써야 된다 ()이것도 함수시작 {}랑똑같음


// 6번째 문제
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)

function copySorted(arr){
    let a=arr.slice(0);
    return a.sort();
}

//7번째 문제

let calc = new Calculator();

alert( calc.calculate("3 + 7") ); // 10
calc.addMethod("/",(a,b)=>a/b);
alert(calc.calculate("4 / 2"));
function Calculator(){
    
    this.calculate = function(str){
        let temp=str.split(' ');
        return this.method[temp[1]](+temp[0],+temp[2]);    
    }
    this.method={
        "+":(a,b)=>(a+b),
        "-":(a,b)=>(a-b),
        "*":(a,b)=>(a*b)
    }
    this.addMethod=function(nama,fun){
        this.method[nama]=fun;
        //동적으로 객체이름을 정해주려면 대괄호 표기를 써야함
    }
}

