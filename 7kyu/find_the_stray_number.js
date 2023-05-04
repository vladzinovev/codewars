function stray(arr) {
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
//(stray([1, 1, 2]), 2);
//(stray([1, 2, 1]), 2);
//(stray([2, 1, 1]), 2);