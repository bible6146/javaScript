// let gfunc=function (){
//     alert(this);
// }
// gfunc();//window가 나옴 왜나하면 
//         //함수 호출은 whindow.gfunc이 생략 된것

// let user={
//     gfunc
// }
// user.gfunc();//Object가 나옴

// user.name="kim";
// user.gfunc=function(){
//     alert(this.name);
// }

// var wfunc=user.gfunc;

// wfunc();//암것도 안나옴 this 가 윈도우기 때문

// user.gfunc.call(window);
// //윈도우가 호출하듯이 호출 하는것

function uuser(name) {
    return {
        name ,
        isAdmin : false};
  }
  
  let user = uuser("Jack");
  
  alert(user.name); // Jack
  alert(user.isAdmin); // false

  //일반 함수처럼쓰면 리턴값만 주고끝나고 
  //new 쓰면 중괄호를 반환함
function User(name,age){
    this.name=name;
    this.age=age;
}
var user1=new User("kim",30);