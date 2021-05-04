let a=3,b=3;
let calculator = {
    a:3,
    b:3,
    read(){
        this.a=prompt("첫");
        this.b=prompt("두");
    },
    sum:function(){
        return +this.a+ +this.b;
    },
    mul:function(){
        return a*b;
    }

  };
  
  calculator.read();
  alert(calculator.a);
  alert( calculator.sum() );
  alert( calculator.mul() );



// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//     },
//     down() {
//       this.step--;
//     },
//     showStep: function() {
//               alert( this.step );
//     }
//   };

