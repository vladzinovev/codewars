function factorial(n){
    let sum=1;
    if(n==0||n==1){return 1}
    for(i=1;i<=n;i++){
      sum*=i;
    }
    return sum;
  }
//(factorial(0), 1);
//(factorial(1), 1);
//(factorial(4), 24);
//(factorial(7), 5040);
//(factorial(17), 355687428096000);