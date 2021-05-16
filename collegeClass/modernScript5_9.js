// let user = {
//     name: "John",
//     years: 30
//   };
//   let{name,years:age,isAdmin="false"}=user;
// //배열을 받을때는 [] 객책를 받을때는 {}
// console.log( name ); // John
// console.log( age ); // 30
// console.log( isAdmin ); // fals

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  function topSalary(obj){
      let max=0;
      let topname;
    //   for(let ss of Object.entries(obj)){
    //       if(max<ss[1]){
    //         max=ss[1];
    //         name=ss[0]
    //       }
    //   }
    for(let [name,money]of Object.entries(obj)){
        if(max<money){
            max=money;
            topname=name;
        }
    }
      return topname;
  }
  console.log(topSalary(salaries));