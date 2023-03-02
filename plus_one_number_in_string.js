//плюс один к чилу в строке
function incrementString(strng) {
    let num=[];
    let rev=strng.split('').reverse().join('');
    let count =0;
    for (i = 0; i < rev.length; i++) {
      if(/\d/.test(rev[i])==true){
        num.push(rev[i]);
        count++;
      }else{
        break;
      }
    }
    rev=rev.slice(count,rev.length);
    if(num.length==0) return strng+1;
    let numRev=num.reverse().join('')
    let numPlusOne=String(Number(numRev)+1);
    if(numPlusOne.length<numRev.length){
        const zeroPad = (numb, places) => String(numb).padStart(places, '0')
        numPlusOne=zeroPad(numPlusOne,numRev.length);
        return rev.split('').reverse().join('').concat(numPlusOne)
    }
    return rev.split('').reverse().join('').concat(numPlusOne)
}
//incrementString("foobar000", "foobar001");
//incrementString("foobar999", "foobar1000");
//incrementString("foobar00999", "foobar01000");
//incrementString("foo", "foo1");
//incrementString("foobar001", "foobar002");
//incrementString("foobar1", "foobar2");
//incrementString("1", "2");
//incrementString("009", "010");
//incrementString("fo99obar99", "fo99obar100");