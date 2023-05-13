function digPow(n, p){
    let arr=n.toString().split('');
    let p2=p, sum=0;
    for (i=0;i<arr.length;i++){
      sum+=Math.pow(Number(arr[i]),p2);
      p2++;
    }
    if(sum==n*p){
      return p
    }else{
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

function digPow(n, p) {
    var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
    return x % n ? -1 : x / n
}