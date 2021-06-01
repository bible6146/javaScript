//문제 1번

// function sumTo(num){
//     let sum=0;
//     for(let i=1;i<=num;i++){
//         sum+=i;
//     }
//     return(sum);
// }
// function sumTo2(num){
//     if(num==1)return 1;
//     else{
//       return num+sumTo2(num-1);
//     }
// }
// function sumTo3(num){
//     return num*(num+1)/2
// }
// alert(sumTo3(4));


//문제 2번

// alert( factorial(5) ); // 120

// function factorial(num){
//     if(num==1)return 1;
//     else{
//        return num*factorial(num-1);
//     }
// }

//3번째 문제

// function fib(n) {
//     if(n==1){
//         return 2;
//     }
//     else{
//         return n+n-fib(n-1);
//     }
// }

// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757

//4번쨰 문제

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

//   function print(val){
//         alert(val.value);
//         if(val.next)print(val.next);
//   }
  function print2(val){
    let temp=val;  
    while(temp){
        alert(temp.value);
        temp=temp.next;
      }
  }
  print4(list);

  //문제 5번

  function print3(val){
    if(val.next){
        print3(val.next);
        }
        alert(val.value);
  }

  function print4(val){
      let temp=val;
      let arr=[];
      while(temp){
        arr.push(temp.value);
        temp=temp.next;
      }
      for(let i=arr.length-1;i>=0;i--){
          alert(arr[i]);
      }
    //   console.log(arr);
}