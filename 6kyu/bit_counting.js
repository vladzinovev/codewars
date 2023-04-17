//переводим число в биты и суммируем все единицы

function countBits(n) {
  let count = 0;
  for (let num = n; num > 0; ) {
    count = count + (num % 2);
    num = parseInt(num / 2);
  }
  return count;
}

//countBits(0), 0);
//countBits(4), 1);
//countBits(7), 3);
//countBits(9), 2);
//countBits(10), 2);
