//프라미스의 정적 메소드


//promis.all은 배열 비동기 작업의 동일한 then이다 
//전달되는 프라미스중 하나라도 거부되면 다른 비동기들은 무시되고
//promise.all이 반환하는 프라미스는 에러와 함께 catch로 간다

let a=Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
  ]).then(alert);
  //결과 값은 result들 의 배열이 되지만 
  //then을 사용하면 반환되는값이 프라미스의 then을한
  //프라미스이다 
  console.log(a);

  let b=new Promise(function bo(resolve,reject){
        resolve(1);
  });
  console.log(b);


  //promise.allSettled는 모든 프로미스가 처리 될때 까지
  //기다리는것은 동일하나 
  //반환되는 배열은 각각의 프라미스 객체를 가지고있고
  //그 프라미스들은 성공할경우 status가 fullfield
  //실패할 경우 rejected를 가지고 있다

  //Promise.rase 는 가장 먼저 처리되는 결과 혹은 에러를 
  //반환 한다.

  //promise.resolve는 이행상태 프라미스를 생성한다.
  //바로 되는지 안되는지 모르겠는 프라미스라면 쓸만함