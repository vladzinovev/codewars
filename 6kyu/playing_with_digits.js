function digPow(n, p){
    console.log(n,p)
    let arr=n.toString().split('');
    let p2=p;
    let sum=0;
    for (i=0;i<arr.length;i++){
      sum+=Math.pow(Number(arr[i]),p2);
      p2++;
    }
    console.log(sum)
    
    if(sum<n*p){
      return -1
    }
    if(sum>=n*p){
      if(sum%n==0){
        return sum/n
      }else{
          return -1
        }
    }
    
  }
//(digPow(89, 1), 1)
//(digPow(92, 1), -1)
//(digPow(46288, 3), 51)