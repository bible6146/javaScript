// let head = {
//     glasses: 1
//   };
  
//   let table = {
//     pen: 3,
//     __proto__:head
//   };
  
//   let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__:table
// };
  
//   let pockets = {
//     money: 2000,
//     __proto__:bed
//   };
//   alert(pockets.pen);

let hamster = {
  stomach: [],

  eat(food) {
    // this.stomach.push 대신에 this.stomach에 할당
    this.stomach = [food];
  }
};

let speedy = {
   __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// Speedy는 음식을 발견합니다.
speedy.eat("apple");
speedy.eat("appl2");
//이렇게하면 배열에 저장이 안되서 따로 만들어주는게 낫다
alert( speedy.stomach ); // apple

// Lazy의 stomach는 비어있습니다.
alert( lazy.stomach ); // <nothing>