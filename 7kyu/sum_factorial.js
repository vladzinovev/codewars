function sumFactorial(arr){
    let sum=0;
    for(i=0;i<arr.length;i++){
      let a=1;
        for(j=arr[i];j>0;j--){
          a*=j;
        }
      sum+=a;
    }
    return sum;
}
console.log(sumFactorial([5,4]))

//assert.strictEqual(sumFactorial([4,6]), 744);
//assert.strictEqual(sumFactorial([5,4,1]), 145);