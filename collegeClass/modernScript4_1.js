// //원시형의 특징 저장하는 데이터 양이 정해져 있다
// //유동적인 자료형 객체,문자 
// //식별자는 문자열로 바꿀수있는 모든것이 가능하다 -1 가능 aler로 나올수있는것은 가능
// //식별자는 띄어쓰기 안됨 하지만 대괄호로 식별자 호출하면 가능
// //Json은 항상 큰따움표로 식별자를 해줘야됨 

const my={};
my.nama="김정세";//my가 가리키는것은 name이 아니라서 
console.log(my.nama)//객체 안에 값을 바꿀수가 있다
                //const의 주소값은 바꿀수 없다.

let user={
    "너의 이름은":"김정세",
    안녕:"반가워"
}
console.log(user["너의 이름은"])//가능 대괄호는 문자열로 접근해야됨
// console.log(user.너의 이름은)//안됨

let question={
    "1":"당신의 이름은?",
    "2":"당신의 이름은?",
    "3":"당신의 이름은?",
    "4":"당신의 이름은?"    
}
//대괄호 표기법으로 할경우 가능함 
alert(question[prompt("번호를 고르세요")]);
//but . 표기방법으로는 불가능 
let user = {
    name: "John",
    age: 30
  };
  
  // let key = "name";
  // user.key; // undefined
  // console.log(user);

//   let fruit=prompt("어떤과일을 구매?","apple");
//   let bag={
//       [fruit]:5,//변수로 키 내임을 정함
//   }
 let fruit = 'apple';
 let bag = {
    [fruit + 'Computers']: 5 // bag.appleComputers = 5
  };
 fruit="tomato"//로 바꿔도 객체 키이름이 바뀌지 않는다
  
  //단축 프로퍼티
  //프로퍼티 값을 생략하면 값을 찾아와서 넣어준다
  //대괄호 안해도 되네?
// let x={one,bag,hi};//==let x={one:one,bag:bag,hi:hi};

let test={//키의 이름만 정해줄경우에
  [fruit]:123,
}
let test1={//변수의 값을 밸류로 할때에
  apple:fruit
}
let test2={//변수의 이름을 이름으로 값을 밸류로 넣음
  fruit
}
console.log(test);
console.log(test1);
console.log(test2);

let user={};
console.log(user.no===undefined)//true 이러면 안됨

let obj = {
  test: undefined
};
console.log(obj.test)//undifind이므로
//비교할때 ==undifinde로 하면 값이 있는지 없는지 모른다

//출력할때 숫자형으로 변경가능한 프로퍼티 키이름은 먼저 출력된다
//숫자형을 변경가능한 프로퍼티는 지들끼리 값을 비교한다
//그냥 올바르게 출력하고 싶으면 앞에 +붙이자

let a={
  "-1":"Aaa",
  "+1":"Bbb",
  1:"cccc"
}
console.log(a["1"]);
//단항 연산일때 문자형 앞에 +는 숫자형으로 변환 한다
