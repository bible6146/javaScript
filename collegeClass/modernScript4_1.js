//원시형의 특징 저장하는 데이터 양이 정해져 있다
//유동적인 자료형 객체,문자 
//식별자는 문자열로 바꿀수있는 모든것이 가능하다 -1 가능 aler로 나올수있는것은 가능
//식별자는 띄어쓰기 안됨 하지만 대괄호로 식별자 호출하면 가능

// let user={
//     "너의 이름은":"김정세",
//     안녕:"반가워"
// }
// console.log(user["너의 이름은"])//가능 대괄호는 문자열로 접근해야됨
// console.log(user.너의 이름은)//안됨



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