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
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 