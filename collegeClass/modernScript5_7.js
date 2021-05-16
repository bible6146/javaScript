let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

  let set=new WeakSet();
  set.add(messages[0]);
  let temp=messages[0];
  messages[0]=null;
  console.log(temp);
  console.log(set.delete(messages[0]));

//일반적으로는 객체를 하나라도 참조하면 값을 지우지 않지만
//weak를 사용하면 객체참조값이 사라지면 
//weak객체에서는 마치 참조 안하듯이 된다.
//weak에서는 값으로 바로가지않고 변수에 가서 위치값을 읽고
//결정하는듯 

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

  let week=new WeakMap();

  week.set(messages[0],Date.now());

  console.log(week.get(messages[0]));