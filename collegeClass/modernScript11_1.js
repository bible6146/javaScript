function oadScript(src){
    let script1=document.createElement('script');
    //script1 변수를 script 타입으로 지정
    script1.src=src;
    script1.onload=()=>alert("성공");
    //onload는 이런함수다라고 알려주면 얘가 성공하면 자동호출
    console.log(script1.onload);
    document.head.append(script1);
    //html에 넣으면 실행됨 
    //얘보다 성공알림이 늦게 뜨는거 보니까 
    //얘까지 완료되야 성공이라고 판단하는듯 
    //ㄴㄴ 얘만 비동기 메소드임
}
oadScript('modernScriptTest.js');
console.log("hi");

//1번문제

function showCircle1(src){
    let script=document.createElement("script");
    
    script.src=src;
    document.head.append(script);
    
}
showCircle1('Circle.js');