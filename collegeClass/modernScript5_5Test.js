// //첫번째 문제
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
function camelize(arr){
    let temp=arr.split('-');
    temp.forEach(s => {
        s[0].toUpperCase()+s.substring(1);
    });
    return temp.join('');
}
console.log(camelize("-webkit-transition"));