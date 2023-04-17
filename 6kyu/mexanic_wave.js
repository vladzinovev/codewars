//берем слово и его добавляем в массив столько раз, сколько в нем букв, изменяя каждый раз одну из букв на заглавную
function wave(str){
    let arr=[], string='';
    for(i=0;i<str.length;i++){
        if(str[i]!=' '){
            for(j=0;j<str.length;j++){
                i==j ? string=string.concat(str[j].toUpperCase()) :  string=string.concat(str[j]) 
            }
            arr.push(string);
            string=''
        }
    }
    return arr;
}
console.log(wave('two words')) //['Two words','tWo words','twO words','two Words','two wOrds','two woRds','two worDs','two wordS']