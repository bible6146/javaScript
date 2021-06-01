//암시적 try catch 
//catch는 resolve가 실행되었을때 실행되는데
//익스큐터나 then 안에서 에러라고 판단되면 
//바로 catch로 넘어간다. 

//.catch는 명시적인 에러뿐아니라 핸들러 위쪽에서 발생한 
//비정상 에러도 잡는다

//catch 안에서도 에러를 분석하고 처리할수 없는 에러라고
//판단되면 다시에러를 (throw)던지거나 성공적으로 처리되면 가장
//가까운 then으로 넘어간다.

//만약 에러를 처리하지 못하면
//예외 처리 핸들러가 없기 떄문에 에러가 갇힌다
//이런 경우는 전역객체 unhandledrejection이 실행된다

new Promise(function(resolve, reject) {
    setTimeout(() => {
      throw new Error("에러 발생!");
    }, 1000);
  }).catch(alert);
//이런경우는 catch실행안된다 
//왜냐하면 암시적 try catch가 코드를
//감싸고 있는데 동기적 에러는 잡아주지만 
//비동기적 에러는 잡아주지 않는다
//reject를 써야한다

//올바른 예
new Promise(function(resolve, reject) {
    setTimeout(() => {
      reject(new Error("에러 발생"));
    }, 1000);
  }).catch(alert);