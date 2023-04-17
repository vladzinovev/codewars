function likes(names) {
    let text='';
      switch (names.length){
      case 0:  
        text ="no one likes this";
        break;
      case 1:  
       text= `${names[0]} likes this`;
        break;
      case 2:  
        text=`${names[0]} and ${names[1]} like this`;
        break;
      case 3:  
        text=`${names[0]}, ${names[1]} and ${names[2]} like this`;
        break;
      default:
        text= `${names[0]}, ${names[1]} and ${names.length-2} others like this`;  
    }
    return text;
}

//[]                                -->  "no one likes this"
//["Peter"]                         -->  "Peter likes this"
//["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
//["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
//["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"