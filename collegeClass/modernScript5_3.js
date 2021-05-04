// //첫번째 문제
// let fruits = ["사과", "배", "오렌지"];

// // 배열을 '복사'한 후, push 메서드를 이용해 새로운 값을 추가합니다.
// let shoppingCart = fruits;
// shoppingCart.push("바나나");

// // fruits에 어떤 값이 들어 있을까요?
// alert( fruits.length ); // ?

// //4 가 들어간다 배열도 객체 처럼 참조형이기 때문에
// // 어디에서 값을 바꾸든지 동일한 객체이면 상관없다.

//두번째 문제 
// let style=["jazz","blues"];
// console.log(style);

// style.push("rock");
// console.log(style);

// style.splice(((style.length%2+style.length/2)-1),1,"class");
// console.log(style);

// console.log(style.shift());

// style.unshift("Rap","reggae");
// console.log(style);


//세번째 문제
// let arr = ["a", "b"];

// arr.push(function() {
//   alert( this );
// })

// alert(arr[2]()); // ?

//아마 Object 찍힐거 같다 alert창에서 힌트는 String이니까
//위에 답은 오답 배열은 toString이 모든 요소를 출력하는거였다 
//그리고 alert창의 반환값은 undefined이고 alret창이 하나 
//더있으니까 두번째 alert 창에는 undefined가 나온다

//네번째 문제
// function sumInput(){
//     let a;
//     let sum=[];1
//     while(true){
//         a=prompt("배열에 저장할값은?");
//         if(isNaN(a)||a==undefined||a==''){
//             break;
//         }
//         console.log(a);1
//         sum.push(a);
//     }
//     a=0;
//     sum.forEach(idx=>a+=+idx);
//     return a;
// }
// console.log(sumInput());

//다섯번째 문제 

function getMaxSubSum(arr){
    let max=0;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<=arr.length;j++){
            let arrtemp=arr.slice(i,j);
            let temp=arrtemp.reduce((sum,next)=>sum+next,0);
            if(max<temp)max=temp;
        }
    }
    return max;
}

console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));





