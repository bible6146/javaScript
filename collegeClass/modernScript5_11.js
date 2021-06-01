//첫번째 문제

let user = {
    name: "John Smith",
    age: 35
  };

let user2=JSON.parse(JSON.stringify(user));

//2번째 문제

let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
  };
  
  // 순환 참조
  room.occupiedBy = meetup;
  meetup.self = meetup;
  alert("aa");
  alert( JSON.stringify(meetup, function replacer(key, value) {
    return (key!=""&&value==meetup)?undefined:value;
  }))   //처음 함수호출하면 래퍼 객체가 만들어지는데
        //그 키값은 공백이고 밸류가 인수로 전달한 객체
        //라서 그렇다
  
  /* 얼럿창엔 아래와 같은 결과가 출력되어야 합니다.
  {
    "title":"Conference",
    "occupiedBy":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
  }
  */