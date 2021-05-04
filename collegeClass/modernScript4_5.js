// 심볼 함수
let user = { // 서드파티 코드에서 가져온 객체
    name: "John"
  };
  
  let id = Symbol("id");
  //값은 심볼키값이라도 리턴값이 다른가봄
  let id2= Symbol("id");
  user[id] = 1;
  
  alert( user[id] );//1
  alert( user[id2] );//undifined
  alert( user[Symbol("id")] );//undefined







//  let num1=123;
//  let num2=new Number(123);
// console.log(num2);//Object 
// //  num1==num2 //true
// //  num1===num2//false