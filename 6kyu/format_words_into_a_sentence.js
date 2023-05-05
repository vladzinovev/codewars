//выводим в строку все слова из массива через ',' , а в конце 'and'.
function formatWords(words){
    if(words==null) return ''
    let arr=[];
    for(i=0;i<words.length;i++){
        if(words[i].length!=0){arr.push(words[i])}
    }
    if (arr.length==0) return ''
    if (arr.length==1) return arr.join()
    if (arr.length==2) return `${arr[0]} and ${arr[1]}`
    let newArr=[];
    for(i=0;i<arr.length-1;i++){
        if(i==0){
        newArr.push(arr[i])
      }else{
         
        if(i==arr.length-2){
            newArr.push(` ${arr[i]} and ${arr[i+1]}`)
        } else{
            newArr.push(` ${arr[i]}`)
        }
      }
    }
    return newArr.join()
}
console.log(formatWords(['one', 'two', 'three', 'four']))
console.log(formatWords(['three']))
console.log(formatWords(['one', '', 'three']))
console.log(formatWords(['', '', 'three']))
console.log(formatWords(['one', 'two', '']))
console.log(formatWords([]))
console.log(formatWords(null))
console.log(formatWords(['']))

//short solution
function formatWords(words){
    if (!words) return "";
    return words.filter(function(a) { return a !== ''}).join(', ').replace(/(, )+(\S+)$/, ' and $2');
}