//переводим числа в римские цифры и обратно

function toRoman(num) {
    let newNum=num;
    let str='';
    
    if(newNum>=1000){
        while(newNum>=1000){
            newNum-=1000;
            str=str.concat('M')
        }
    }

    if(newNum>=100){
        if(newNum>=900){
            newNum-=900;
            str=str.concat('CM')
        }
        if(newNum>=500){
            newNum-=500;
            str=str.concat('D')
            while(newNum>=100){
                newNum-=100;
                str=str.concat('C')
            }
        }
        if(newNum>=400){
            newNum-=400;
            str=str.concat('CD')
        }else{
            while(newNum>=100){
                newNum-=100;
                str=str.concat('C')
            }
        }
    }

    if(newNum>=10){
        if(newNum>=90){
            newNum-=90;
            str=str.concat('XC')
        }
        if(newNum>=50){
            newNum-=50;
            str=str.concat('L')
            while(newNum>=10){
                newNum-=10;
                str=str.concat('X')
            }
        }
        if(newNum>=40){
            newNum-=40;
            str=str.concat('XL')
        }else{
            while(newNum>=10){
                newNum-=10;
                str=str.concat('X')
            }
        }
    }

    if(newNum>=1){
        if(newNum>=9){
            newNum-=9;
            str=str.concat('IX')
        }
        if(newNum>=5){
            newNum-=5;
            str=str.concat('V')
            while(newNum>0){
                newNum-=1;
                str=str.concat('I')
            }
        }
        if(newNum>=4){
            newNum-=4;
            str=str.concat('IV')
        }else{
            while(newNum>=1){
                newNum-=1;
                str=str.concat('I')
            }
        }
    }
    
    return str;
 }
 
//console.log(toRoman(1000))
//console.log(toRoman(4))
//console.log(toRoman(1))
console.log(toRoman(1990))
console.log(toRoman(2008))
console.log(toRoman(1005))
 
function fromRoman(str) {
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]=='M'){count+=1000;}
        
        if(str[i]=='C'&&str[i+1]=='M'){count+=900;i+=2}
        if(str[i]=='C'&&str[i+1]=='D'){count+=400;i+=2}
        if(str[i]=='D'){count+=500;}
        if(str[i]=='C'){count+=100;}
        
        if(str[i]=='X'&&str[i+1]=='C'){count+=90;i+=2}
        if(str[i]=='X'&&str[i+1]=='L'){count+=40;i+=2}
        if(str[i]=='L'){count+=50;}
        if(str[i]=='X'){count+=10;}
        
        if(str[i]=='I'&&str[i+1]=='X'){count+=9;i+=2}
        if(str[i]=='I'&&str[i+1]=='V'){count+=4;i+=2}
        if(str[i]=='V'){count+=5;}
        if(str[i]=='I'){count+=1;}
        
    }
    return count;
}
console.log(fromRoman('IV'))
 
//short solution
const map = { M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1};

class RomanNumerals {
    static toRoman(num) {
        let str = '';
        for (var i in map) {
            while (num >= map[i]) {
                str += i;
              num -= map[i];
            }
        }
        return str;
    }
    
    static fromRoman(str) {
         return str.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((acc, el) => acc + map[el], 0);
    }
}
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 