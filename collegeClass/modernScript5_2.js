//첫번째 문제
alert(ucFirst("john") == "John");

function ucFirst(str){
    return str.substr(0,1).toUpperCase()+str.substr(1);
}

console.log(checkSpam('buy ViAgRA now') );
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit") );
 
function checkSpam(str){
    let temp=str.toLowerCase();
    if(temp.includes("viagra")||temp.includes('xxx')){
        return true;
    }
    return false;
}
//두번째 문제

// truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"
console.log(truncate("What I'd like to tell on this topic is:", 20));
// truncate("Hi everyone!", 20) = "Hi everyone!"
console.log(truncate("Hi everyone!", 20));
function truncate(str,idx){
    return str.substr(0,idx)+"...";
}

//세번째 문제
alert( extractCurrencyValue('$120') === 120 ); // true

function extractCurrencyValue(str){
    return +str.substr(1);
}