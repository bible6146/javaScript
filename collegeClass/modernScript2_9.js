//자바 스크립트 값 비교 

//문자열은 사전순서로 비교한다 
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

//동등 연산자는 형을 바꿔서 비교하지만
//일치 연산자는 자료형 까지 비교 한다
0==false //true
0===false //false

// 인트형은 0을 제외한 모든값은 다 ture
// 문자형은 값이 비어 있찌 않으면 다 true

console.log(Boolean(" "));

//null 과 undefind 는 예외적인 상황이 많다
null===undefined//false 일치 연산자 사용 하면 된다
null==undefined//true 

//undefind는 다른값과 비교하면 안된다
// 아마 > 이것이 null값을 숫자형으로 형변환 시켜주는 보다
console.log(null>-1)
console.log(null==0)
console.log(+null==0)

//undefind는 무엇을 해도 false 이된다

5 > 4 //ture
"apple" > "pineapple"//true
"2" > "12"//false
undefined == null//true
undefined === null//false
null == "\n0\n"//false
null === +"\n0\n"//false