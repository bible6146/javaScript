
//첫번쨰 문제
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); 

function aclean(arr){
 let sum=[];
 let set=new Set();
 arr.forEach(e=>{
   let temp=e.toUpperCase().split('').sort().join('');
   if(!set.has(temp)){
     console.log(set.has(temp));
     set.add(temp);
      sum.push(e);
   }
 } );
 return sum;
}


//두번째 문제
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

// map/keys()메소드는 키값의 배열이 아닌
//이터러터 객체를 반환해서 배열 메소드를 사용하려면 
//Array.from으로 진짜 배열로 바꾸어야 한다.
//Array.from은 이터러터 객체를 배열으로 바꿀때 
//for of 에서 값을 읽어오듯이 읽어와서 배열로 바꿔준다

keys.push("more");




let a={
  a:1,
  b:10,
  [Symbol.iterator](){
    return {
      start:this.a,
      end:this.b,

      next(){
        if(this.start<this.end){
          return {
            done:false,value:this.start++
          }
        }
        else {
          return{done:true}
        }
      }
  }
  }
}
for(let ss of a){
  console.log(ss);
}
let temp=Array.from(a);
console.log(temp);