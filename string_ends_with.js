//если второе слово является окончанием первого, то true, иначе false
function solution(str, ending){
    let len=ending.length;
    let newStr=str.slice(-len);
    if(ending==newStr || ending.length==0) return true;
    return false;
}
//(solution('abcde', 'cde'), true)
//(solution('abcde', 'abc'), false)