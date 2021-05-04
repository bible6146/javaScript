let user ={
   name:{ realname:"jone"}
}
let admin=user;
console.log(user===admin);//같은 값을 참조 함

let temp=user.name;
temp.realname="super Jhon";

console.log(user);//같은 참조값이기 때문에 값이 변해있음



let user = {
    name: "John",
    age: 30,
    two:{
        hi:330
    }
  };
  
  let clone = {}; // 새로운 빈 객체
  
  // 빈 객체에 user 프로퍼티 전부를 복사해 넣습니다.
  for (let key in user) {
    clone[key] = user[key];
  }
  user.two.hi=200;
  console.log(clone.two.hi);
  let user2={};
  Object.assign(user2,user);
  console.log(user2);
  //객체안의 있는 객체를 참조말고 복사하고 싶으면 
  //json을 이용한다

//깊은복사
obj={a:0,b:{c:0}};
let obj3=JSON.parse(JSON.stringify(obj));
console.log(obj3);

let json=JSON.stringify(obj);

console.log(typeof(json));//string
json=JSON.parse(json);
console.log(typeof(json));//object

//json 만든는벙
let json2=`{"name":"홍길동"}`//키값도 큰따움표로 묶어줌
console.log(typeof(json2));

//Json 파싱
let jsonString = `[
    {"id":"adsd"},
    {"id":"adsd"},
    {"id":"adsd"}
]`;

let config =JSON.parse(jsonString);
console.log(config);
// 서버 디비 자스 일본어 교양





