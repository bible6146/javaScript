//8번째 문제

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(s=>s.name);

alert( names ); // John, Pete, Mary


//9번째 문제

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete

function sortByAge(arr){
    arr.sort((a,b)=>a.age-b.age);
}

//9번째 문제
let arr = [3, 2, 3];

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);

function shuffle(arr){
    arr.sort(s=>s-Math.random()*5);
}

//열번째 문제

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

function getAverageAge(arr){
    let sum=0;
    arr.forEach(s=>sum+=s.age)
    return sum/3;
}

//열한번째 문제
function unique(arr) {
    let temp=[];
    arr.forEach(s=> {
        if(!temp.includes(s)){
            temp.push(s);
            //배열에는 add 못쓰는듯
        }
    });
    return temp;
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(strings) ); // Hare, Krishna, :-O