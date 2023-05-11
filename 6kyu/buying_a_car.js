function nbMonths(pOld, pNew, salary, perc){
    if(pOld>=pNew){
      return [0,pOld-pNew];
    }
    let result=-1,mounth=0;
    while(result<0){
      mounth++;
      if(mounth%2===0){perc+=0.5}
      pOld=pOld-pOld*perc/100;
      pNew=pNew-pNew*perc/100;
      result=Math.round(salary*mounth+pOld-pNew)
    }
      return [mounth,result];
}

//nbMonths(2000, 8000, 1000, 1.5), [6, 766]
//nbMonths(12000, 8000, 1000, 1.5) ,[0, 4000]