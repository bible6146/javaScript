//문제 풀이
// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false
// function isEmpty(emp){
//     for(let key in emp){ //객체의 프로퍼티가 하나도 없으면 
//         return false;    //for문이 작동안함
//     }
//     return true;

// }

//문제 2
// let user={}
// user.name="jone";
// user.surname="Smith";
// user.name="pete";
// delete user.name;
// console.log(user);

//문제 3
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
//     jo:null
//   }//null은 숫자형으로 형변환 하면 0
// function salarisesum(emp){
//     let sum=0;
//     for(let s in emp){
//         sum+=emp[s];//s로 전달되는것이 키의 이름이다 
//     }               // 그래서 s를 바로주면 키값이 더해짐
//     return sum;
// }
// alert(salarisesum(salaries));
// alert(true+100);//101

//문제 3
// 함수 호출 전
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  
  function multiplyNumeric(emp){
      //isNAN은 NAN이면 ture 아니면(숫자면)false
      //왜사용 하나면 NAN==NAN 은 안됨
      //isFinite는 숫자면 ture 숫자가 아니거나 Infinity면 false
      for(let s in emp){
          if(!isNaN(emp[s])){
              emp[s]=emp[s]*2;
            }
        }
    }
    console.log(isNaN(123));//false
    console.log(menu);

    // 함수 호출 후
  //   menu = {
  //     width: 400,
  //     height: 600,
  //     title: "My menu"
  //   };