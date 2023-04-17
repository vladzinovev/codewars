//выводим макс и мин число из строки
function highAndLow(numbers){
    let array=numbers.split(' ');
    let min=array[0],max=array[0];
    for(i=0;i<array.length;i++){
      if(Number(array[i])<min) min=array[i];
      if(Number(array[i])>max) max=array[i];
    }
    return `${max} ${min}`
}
//(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
//(highAndLow("1 2 3"), "3 1");