//첫번째 문제
function myShortString(str){
    let arr=str.split('-');
    for(s of arr){
        s.substring(0,1).toUpperCase();
    }
    return arr.join('');
}
console.log(myShortString("webkit-transition"));