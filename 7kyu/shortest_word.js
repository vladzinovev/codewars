//вывести количество букв в самом коротком слове из строки

function findShort(s){
    let str = s.split(' ');
    let count=1000;
    for (i = 0; i < str.length; i++) {
      if (str[i].length<count){
        count=str[i].length
      }
    }
    return count
  }