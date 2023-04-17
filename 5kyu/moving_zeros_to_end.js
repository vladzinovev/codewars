//все нули выводим в конце массива
function moveZeros(arr) {
    let arrNew=[];
    let count=0
    for (i = 0; i < arr.length; i++) {
      if(arr[i]===0){
          count++;
      }else{
          arrNew.push(arr[i])
      }
    }
    if(count>0){
        for (i = 0; i < count; i++) {
          arrNew.push(0)
        }
    }
    return arrNew;
  }
  //console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) // returns[false,1,1,2,1,3,"a",0,0]