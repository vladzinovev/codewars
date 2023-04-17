//если слове больше 5 букв, то делаем реверс слова

function spinWords(string){
  let str = string.split(' ');
  for (i = 0; i < str.length; i++) {
    if (str[i].length>4){
      str[i]=str[i].split('').reverse().join('')
    }
  }
  return str.join(' ')
}

//spinWords("Welcome"), "emocleW");
//spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
//spinWords("This is a test"), "This is a test");
//spinWords("This is another test"), "This is rehtona test");
//spinWords("You are almost to the last test"), "You are tsomla to the last test");
//spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
//spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");