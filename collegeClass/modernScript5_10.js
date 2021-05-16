//첫번째 문제
// let date=new Date(2012,2,20,3,12);
// alert(date);

//두번째 문제
// let date = new Date(2019, 11, 5);  // 2019년 11월 5일
// alert( getLocalDay(date) );       // 금요일이므로, 5가 출력되어야 함

// function getLocalDay(day){
//     if(day.getDay==0){
//         return 7;
//     }
//     return day.getDay();
// }
//세번째 문제
// let date = new Date(2012, 0, 3);  // 2012년 1월 3일
// alert(date.getDay());
// alert( getWeekDay(date) );        // "TU"가 출력되어야 합니다.

// // function getWeekDay(day){
// //     let sum=['mo','tu','we','th','fr','sa','su'];
// //     let temp=new Date(2012,0,1);
// //     let a=day.getDay()%7- temp.getDay()%7;
// //     // alert(day.getDay());
// //     return sum[a-1];

// // }
// function getWeekDay(date1){
//     let sum=['mo','tu','we','th','fr','sa','su'];
//     return sum[date1.getDay()];
// }

//네번째 문제
// let date = new Date(2015, 0, 2); // 2015년 1월 2일

// console.log( getDateAgo(date, 1) ); // 1, (2015년 1월 1일)
// console.log( getDateAgo(date, 2) ); // 31, (2014년 12월 31일)
// console.log( getDateAgo(date, 365) ); // 2, (2014년 1월 2일)

// function getDateAgo(day,a){
//     let temp=new Date(day);
//     temp.setDate(day.getDate()-a);
//     return temp; 
// }


//다섯번째 문제
//내풀이
// function getLastDayOfMonth(year, month){
//     for(let i=1;i<31;i++){
//         let temp=new Date(year,month,i);
//         if(temp.getMonth()>month){
//             return i-1;
//         }
//     }
// }
// //정해
// function getLastDayOfMonth2(year, month){
//     let date=new Date(year,month+1,0);
//     return date.getDate();
// }

// console.log(getLastDayOfMonth(2012, 1));
// console.log(getLastDayOfMonth2(2012, 1));

//6번째 문제

// console.log(getSecondsToday()); // (3600 * 10)
// function getSecondsToday(){
//     let date=new Date().setHours(0,0,0);
//     let now=new Date().setHours(10,0,0);
//     return now-date;
// }

//7번째 문제

alert( formatDate(new Date(new Date - 1)) ); // "현재"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30초 전"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5분 전"

// 어제를 나타내는 날짜를 "일.월.연 시:분" 포맷으로 출력
// alert( formatDate(new Date(new Date - 86400 * 1000)) );

function formatDate(day){
    let dif=new Date()-day;
    if(dif<1000){
        return "현재"
    }
    if(dif>=1000&&dif<1000*60){
        return dif/1000+"초"
    }
    if(dif>1000*60&&dif<1000*60*60){
        return dif/1000/60+"분전"
    }
    get
}