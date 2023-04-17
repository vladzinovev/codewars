//гуляем по компасу и нужно сделать только 10 шагов и вернуться на место

function isValidWalk(walk) {
    if(walk.length===10){
      let ai=0,aj=0;
      for (i = 0; i < walk.length; i++) {
          switch(walk[i]){
              case 'n': aj++; break;
              case 's': aj--; break;
              case 'w': ai--; break;
              case 'e': ai++; break;
          }
      }
      return ai==0 && aj==0;
    }else{
      return false;
    }
}