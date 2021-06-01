
// let num=123;

// let num2=new Number(123);


// function Fc2(){

// }

// Fc2.prototype=Number;
// //생성자로 만들기 때문에 객체이다

// let obj=new Fc2();

// alert(typeof(obj));
// alert(typeof(String));

// let a=2;
// class user{
//   sayhi(){
//     alert(a);
//   }
// }
// let obj=new user();
// console.log(obj);

// let user3={sayHi(){alert("hi")}};

//프로토타입 을 지정하는 것보다
//class를 만드는것이 좀더 편하다.

// let a=[1,2];
// console.log(a.toString());

// console.log(typeof(Object.prototype));

// let a=1;
// function makeCounter() {
    
  
//     return function() {
//         let a= 0;
//       return a++;
//     };
//   }
  
//   let counter = makeCounter();
//   let counter2 = makeCounter();
//   alert(counter());
//   alert(counter());
//   alert(counter2());
//   //함수는 블락 스코프로 사용할수있따

// alert(sum(5)(-1));
// // sum(5)(-1) = 4

// function sum(a){
//     return function(b){
//         return a+b;
//     }
// }
/* ... 여기에 두 함수 inBetween과 inArray을 만들어주세요 ...*/
// let arr = [1, 2, 3, 4, 5, 6, 7];

// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

// function inBetween(a,b){
//     return function(item){
//         if(item>=a&&item<=b){
//             return item;
//         }
//     }
// }
// function inArray(...arr){
//     return function(x){
//         arr.includes(x);
//     }
//     }

// function hi(){
//     alert("안녕1");
// }
// let ss=setTimeout(hi,10000);
// alert(ss);
// let a=prompt("0 or 1");
// alert(a);
// if(a!=1){
//     clearTimeout(ss);
// }
// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(1), 1000);
//   });
  
//   promise.then(function(result) {
//     alert(result); // 1
//     this.result=result * 2;
//   });
  
// //   promise.then(function(result) {
// //     alert(result); // 1
// //     return result * 2;
// //   });
  
// //   promise.then(function(result) {
// //     alert(result); // 1
// //     return result * 2;
// //   });

//   console.log(promise);

let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
  ];
  
  // fetch를 사용해 url을 프라미스로 매핑합니다.
  let requests = urls.map(url => fetch(url));
  
  console.log(requests);
  // Promise.all은 모든 작업이 이행될 때까지 기다립니다.
//   Promise.all(requests)
//     .then(responses => responses.forEach(
//       response => alert(`${response.url}: ${response.status}`)
//     ));
// if(!Promise.allSettled) {
//     Promise.allSettled = function(promises) {
//       return Promise.all(promises.map(p => Promise.resolve(p).then(value => ({
//         status: 'fulfilled',
//         value
//       }), reason => ({
//         status: 'rejected',
//         reason
//       }))));
//     };
//   }

  //비동기는 모아놓았다가 시간이날대 시행함
  //프라미스 중요하고 async와 wait 중요함
  //await 는 기다림 retrun값은 result
  //일반 함수에서는 awit못씀
  async function f() {

  }
  
  f().then(alert); // 1