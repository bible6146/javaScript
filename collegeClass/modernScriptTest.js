let calc = new Calculator;
calc.addMethod("*", (a, b) => a * b);

console.log( calc.calculate("3 + 7") ); // 10
console.log(calc.calculate("1 * 2"));
function Calculator(){
    this.calculate=function (str){
        let temp=str.split(' ');
        return this.Method[temp[1]](+temp[0],+temp[2]);       
    }
    this.Method={
        "+":(b,c)=>b+c,
        "-":(b,c)=>a-c
    }
    this.addMethod=function (name,fun){
        this.Method[name]=fun;
    }
}