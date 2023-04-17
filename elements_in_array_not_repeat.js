//нужно внсети элементы в массив без повторения
var uniqueInOrder=function(iterable){
    if(iterable.length==0) return [];  
    let arr=[];
    arr.push(iterable[0]);
    for (i = 1; i < iterable.length; i++) {
        if(iterable[i]!=iterable[i-1]){
          arr.push(iterable[i])
        }
    }
    return arr;
}
console.log(uniqueInOrder([]))
console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder('ABBCcAD'))
console.log(uniqueInOrder([1,2,2,3,3]))