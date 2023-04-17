//деламе пробел перед заглавной буквой в строке

function solution(string) {
    let arr=[]
    for (var i = 0; i < string.length; i++) {
      !!(string[i].toUpperCase()==string[i])?arr.push(` ${string[i]}`):arr.push(string[i])
    } 
    return arr.join('')
}

//(solution('camelCasing'), 'camel Casing', 'Unexpected result')
//(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')