// function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new Error(response.status);
//         }
//       })
//   }
  
// //   loadJson2('no-such-user.json').catch(alert); // Error: 404
// console.log(loadJson2('no-such-user.json'));
// async function loadJson2(url){
//         let a=await fetch(url);
//         console.log(a);
//         if(a.status==200){
//             return a.json();
//         }
//         else{
//         //아니면 이렇게 명시적으로 리턴을 해주자
//         //  return Promise.reject(new Error(a.status));
//          //아니면 이렇게 await를 써도 반환 해준다
//          await Promise.reject(new Error(a.status));
 
//         //  throw new Error(a.status);
//         //에러를 던지면 그냥 거부 상태인 프라미스를 반환해준다
        
//         }
//         await 1;
// }

demoGithubUser();
async function demoGithubUser() {
    while(true){
        let name = prompt("GitHub username을 입력하세요.", "iliakan");
        try{
            let a=await loadJson(`https://api.github.com/users/${name}`);
            alert(a.name);
            break;
        }catch{
            alert("일치사용자 없음");
            demoGithubUser();
        }   
    }
  }
  function loadJson(url) {
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new HttpError(response);
        }
      })
  }
  class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }


// async function wait() {
//     await new Promise(resolve => setTimeout(resolve, 1000));
  
//     return 10;
//   }
  
//   function f() {
//     wait().then(function(a){
//         alert(a);
//     });
//   }
//   f();
// let a=new Promise((resolve)=>resolve(1));
// console.log(a.then(()=>3));