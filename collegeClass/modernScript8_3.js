let arr = [1, 2, 3];

// arr은 Array.prototype을 상속받았나요?
alert( arr.__proto__ === Array.prototype )
//위에는 true이고 밑에는 false인 이유는 
//Array이가 생성자 "함수"  이기 때문이다
//함수는 prototype이라는 일반 프로퍼티가 있다
alert( arr.__proto__ === Array.__proto__ )
let obj = {};
Object.prototype.toString=()=>"메롱";
alert( obj ); // "[object Object]" ?

Function.prototype.defer=(ms)=>{setTimeout(this,ms);}
                            //화살표 함수에는 this가 없다.
// Function.prototype.defer=function(ms){
//     setTimeout(this,ms);
// }
function f() {
    alert("Hello!");
  }

  f.defer(1000); // 1초 후 "Hello!" 출력

  function f(a, b) {
    alert( a + b );
  }
  
  Function.prototype.defer=function(ms){
     return setTimeout(this,ms);
  }
  f.defer(1000)(1, 2); // 1초 후 3을 출력
