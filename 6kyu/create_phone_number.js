//маска для номера телефона

function createPhoneNumber(numbers){
  let arr=[];
  for (i = 0; i < numbers.length; i++) {
    switch (i){
    case 0:  
      arr.push(`(${numbers[i]}`)
      break;
    case 2:  
     arr.push(`${numbers[i]}) `)
      break;
    case 5:  
      arr.push(`${numbers[i]}-`)
      break;
    default:
      arr.push(numbers[i])
    }
  }
  return arr.join('')
}
//or
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  return format;
}

//createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890"