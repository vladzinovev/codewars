const sequenceSum = (begin, end, step) => {
    if(begin>end){return 0}
    let sum=0;
    for(i=begin;i<=end;i+=step){
      sum+=i;
    }
    return sum
};
//2,2,2 --> 2
//2,6,2 --> 12 = (2 + 4 + 6)
//1,5,1 --> 15 = (1 + 2 + 3 + 4 + 5)
//1,5,3  --> 5 = (1 + 4)