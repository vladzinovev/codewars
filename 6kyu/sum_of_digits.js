//суммируем все цифры в числе пока не получится одна цифра
function digitalRoot(n) {
    if(n<10){return n}
    while(n>=10){
        let p=n.toString().split('');
        let sum=0;
        for(i=0;i<p.length;i++){
          sum+=Number(p[i]);
        } 
        n=sum;
    }
    return n;
  }
//16  -->  1 + 6 = 7
//942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
//132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
//493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2


function digitalRoot(n) {
    return (n - 1) % 9 + 1;
}