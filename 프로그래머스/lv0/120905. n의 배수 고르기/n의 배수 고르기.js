function solution(n, numlist) {
    const arr = [];
    for(let i =0; i< numlist.length; i++){
        if(numlist[i] % n === 0){
            arr.push(numlist[i])
        }
    }
    return arr;
}