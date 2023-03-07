//создаем таблицу умножения
multiplicationTable = function(size) {
    const arr=[];
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            if(i==0 || j==0){
                i==0 ? arr.push(j+1) : arr.push(i+1)
            }
            else{
                arr.push([i+1]*[j+1])
            }
        }  
    }
    let arrString=[], newArr=[], count=0;
    for (i = 0; i < arr.length; i++) {
        arrString.push(arr[i]);
        count++;
        if(count==size||i+1==arr.length){
            newArr.push(arrString)
            arrString=[];
            count=0;
        }
    }
    return newArr;
}
console.log(multiplicationTable(1))//[[1]]
console.log(multiplicationTable(2))//[[1,2],[2,4]]
console.log(multiplicationTable(3))//[[1,2,3],[2,4,6],[3,6,9]]
console.log(multiplicationTable(4))//[[1,2,3,4],[2,4,6,8],[3,6,9,12],[4,8,12,16]]

//короткий вариант
multiplicationTable = function(size) {
    var result = [];
    for (var i = 0; i < size; i++) {
      result[i] = [];
      for(var j = 0; j < size; j++) {
        result[i][j] = (i + 1) * (j + 1);
      }
    }
    return result
}