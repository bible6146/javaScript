function solution(N, stages) {
    var temp = new Map();
    var answer = [];
    for (let i = 1; i <= N;i++) {
        answer[i] = i;
    }
    stages.forEach(e => {
        temp.set(e, temp.has(e) ? temp.get(e) + 1 : 1);
    });
    temp.delete(N + 1);
    answer.sort(function (a, b) {
        return temp.get(a) - temp.get(b);
    })
    return temp;
    var answer = [];
   
}
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]))
//[3,4,2,1,5]