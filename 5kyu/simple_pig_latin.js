//в каждом слове первую букву ставим в конец слова и добавляем 'ay'
function pigIt(str){
    let arr=str.split(' ');
    let arrNew=[];
    for (i=0;i<arr.length;i++){
      if(arr[i]==='!'|| arr[i]==='?'){
          arrNew.push(arr[i])  
      }else{
          let start=arr[i].slice(0,1);
          let end=arr[i].slice(1);
          arrNew.push(`${end}${start}ay`)
      }
    }
    return arrNew.join(' ');
}
//pigIt('Pig latin is cool'),'igPay atinlay siay oolcay'
//pigIt('This is my string'),'hisTay siay ymay tringsay'