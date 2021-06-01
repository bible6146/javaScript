// new Promise(function(resolve, reject) {

//     setTimeout(() => reject(1), 1000); // (*)
  
//   }).then(function(result) { // (**)
  
//     alert(result); // 1
//     return result * 2;
  
//   }).then(function(result) { // (***)
  
//     alert(result); // 2
//     return result * 2;
  
//   }).then(function(result) {
  
//     alert(result); // 4
//     return result * 2;
  
//   });
  //then의 첫번째 인수(함수)는 fullfield일때 실행되는함수
  //첫번째 인수(함수)의 인수는 프라미스 객체의 result값이다
//두번째 인수(함수)는 거부 되었을때 실행되는 함수이고 
//그함수의 인수는 에러값이다

console.log(new Promise(resolve=>resolve(1)).then());
//then의 반환값의 프로미스임

promise.then(f1).catch(f2);

promise.then(f1, f2);
//첫번째 코드는 then에서 오류가 나도 잡아주고
//두번째는 그렇지 못한다 따라서 두번째가 좀더 안전하다