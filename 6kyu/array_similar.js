//если элементы двух массивов совпадают и сопадают по типу, то выводим true, иначе false
function arraysSimilar(arr1, arr2) {
    arr1.sort();
    arr2.sort();
    if(arr1.length===arr2.length){
      for(i=0;i<arr1.length;i++){
       if(arr1[i]===arr2[i]){
         
       }
       else return false
      }
    }
    else return false;
    return true
}
console.log(arraysSimilar([1, 2, 2, 3, 4],[2, 1, 2, 4, 3]))
console.log(arraysSimilar([2, 1, 2, 4, 3],[1, 2, 3, 4]))
console.log(arraysSimilar([1, 2, 3, 4],[1, 2, 3, "4"]))