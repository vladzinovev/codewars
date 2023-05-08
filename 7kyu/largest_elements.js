//суммируем n больших чисел из массива
function largest(n, array) {
    if(n==0){return []}
    array.sort(function(a, b) {
      return a - b;
    });
    let arr=[];
    for (i=array.length-n;i<array.length;i++){
      arr.push(array[i])
    }
    return arr;
}
//doTest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [9, 10]);
//doTest(0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], []);
//doTest(2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5], [-1, 0]);
//doTest(3, [5, 1, 5, 2, 3, 1, 2, 3, 5], [5, 5, 5]);
//doTest(7, [9, 1, 50, 22, 3, 13, 2, 63, 5], [3, 5, 9, 13, 22, 50, 63]);
//doTest(0, [1, 2, 3, 4, 8, 7, 6, 5], []);

//short solution
function largest(n,xs){
    return xs.sort(function(a, b) {return a - b;}).slice(xs.length-n);
}