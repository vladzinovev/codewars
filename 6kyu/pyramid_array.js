function pyramid(n) {
  if (n == 0) return [];
  let arr = [];
  num = [];
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      num.push(1);
    }
    arr.push(num);
    num = [];
  }
  return arr;
}
console.log(pyramid(4));
//pyramid(0), []  
//pyramid(1), [[1]]  
//pyramid(2), [[1], [1, 1]] 
//pyramid(3), [[1], [1, 1], [1, 1, 1]]
//pyramid(4), [[1], [1, 1], [1, 1, 1], [1, 1, 1, 1]]
