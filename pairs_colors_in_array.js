//вывести количество пар одинаковых цветов
function numberOfPairs(gloves) {
  let arr = [];
  let newGloves = [...gloves];
  for (i = 0; i < newGloves.length; i++) {
    for (j = 0; j < newGloves.length; j++) {
      if (
        String(newGloves[i]) === "undefined" ||
        String(newGloves[j]) === "undefined" ||
        i == j
      ) {
      } else {
        if (newGloves[i] == newGloves[j]) {
          arr.push(newGloves[i]);
          delete newGloves[i];
          delete newGloves[j];
        }
      }
    }
  }
  return arr.length;
}
//console.log(numberOfPairs(['red','red']))
//console.log(numberOfPairs(['red','green','blue']))
//console.log(numberOfPairs(['gray','black','purple','purple','gray','black']))
