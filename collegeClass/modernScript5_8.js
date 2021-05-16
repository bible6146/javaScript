//1번 문제
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };
  
//   alert( sumSalaries(salaries) ); // 650
// //첫번째
//   function sumSalaries(obj){
//     let sum=0;
//     for(let a of Object.values(obj)){
//         sum+=a;
//     }
//     return sum;
//   }
// //두번째
// function sumSalaries(obj){
//     return Object.values(obj).reduce((a,b)=>a+b,0);
// }

//두번째문제
let user = {
    name: 'John',
    age: 30
  };
  
  alert( count(user) ); // 2

  function count(obj){
    return Object.keys(obj).length;
  }

  let a="안녕"
  alert(a.length);//문자열도 길이를 프로퍼티로 갖는듯
  alert(new Map().size);//맵은 있음
  alert(user.length);//일반적인 객체는 길이가 없음