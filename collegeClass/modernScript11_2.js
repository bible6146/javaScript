let promise = new Promise(function(resolve, reject) {
            //생성자에서 우리가 적어주는게 excuter 함수이다
    reject(1);//여기서 실행멈춤 
     //프라미스의 excuter()은리졸브나 리젝트중 하나라도 호출
    //되면 실행을 멈춘다
  
    setTimeout(() => resolve(2), 1000);
  });
  
  promise.then(alert);

  function delay(ms) {
    return new Promise(function(resolve,reject){
        setTimeout(()=>resolve(),ms);
    })
  };
  
  delay(3000).then(() => alert('3초후 실행'));
  //then의 첫번째 인수는 풀필드일때
  //두번째 인수는 리젝티드 일때 실행된다.

  //resolve는 result값을 정해주고 
  //then은 result값을 인수로 가져온다