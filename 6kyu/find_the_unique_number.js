function findUniq(arr) {
    let a=arr[0],b;
    let res=1;
    for(i=1;i<arr.length;i++){
      if(arr[i]==a){
        res+=1;
      }else{
        b=arr[i];
      }
    }
    let uniq;
    res==1?uniq=a:uniq=b;
    return uniq;
}
//assert.strictEqual(findUniq([ 1, 0, 0 ]), 1);
//assert.strictEqual(findUniq([ 0, 1, 0 ]), 1);
//assert.strictEqual(findUniq([ 0, 0, 1 ]), 1);
//assert.strictEqual(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
//assert.strictEqual(findUniq([ 1, 1, 2, 1, 1 ]), 2);
//assert.strictEqual(findUniq([ 3, 10, 3, 3, 3 ]), 10);