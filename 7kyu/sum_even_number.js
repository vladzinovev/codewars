//только четные суммируем
function sumEvenNumbers(arr) {
    let sum=0;
    for (i = 0; i < arr.length; i++) {
      if(arr[i]%2===0){
        sum+=arr[i];
      }
    }
    return sum;
}
//sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 30)
//sumEvenNumbers([1,3,5,7,10]), 10)
//sumEvenNumbers([1, 3, 5, 8, 10,7]), 18)

//short solution
sumEvenNumbers = input => input.filter(x => x % 2 == 0).reduce((x, y) => x + y, 0)