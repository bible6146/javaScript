//new Promise 는 즉이 프라미스를 반환하고
//then.catch 는 마이크로 큐에 들어가서
//현재 코드가 다끝나고 시작된다.
//unhandledrejection 은 큐에
async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("완료!"), 1000)
    });
  
    let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)
  
    alert(result); // "완료!"
    return 1;
  }
  

  console.log(f());