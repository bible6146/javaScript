//생성자 함수는 새로운 객체를 정의 하는데 이때
//이때 일반프로퍼티인 porotype이있는데 이안에는
//constructor 이라는 프로퍼티가 있고 값은 자기 자신이다
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

// Rabbit.prototype = {};//이렇게 해도 이미 만들어진후라서 나온다
Rabbit.prototype.eats = false;//이렇게하면 false인데
//여기서 중요한거는 생성자의 prototype을 바꿧냐
//아니면 porotype프로퍼티가 가지고 있는 값을 바꿧냐 차이인듯

//그리고 delet연사은 객체에 직접 적용되는거 기억하기!
alert( rabbit.eats ); // true