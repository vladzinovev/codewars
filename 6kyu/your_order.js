function order(words) {
  if (!words) return "";
  let arr = words.split(" ");
  arr.unshift("empty");
  let arrNew = [];
  let index = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (index == arr[i][j]) {
        arrNew.push(arr[i]);
        index++;
        i = 0;
      }
    }
  }
  return arrNew.join(" ");
}
console.log(order("3a Thi1s is2 T4est"));
//order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
//order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
//order(""), "", "empty input should return empty string" )

//короткое решение
function order(words) {
  return words
    .split(" ")
    .sort(function (a, b) {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
}
