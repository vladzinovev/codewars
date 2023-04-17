function remove (string) {
    const arr=string.split(' ');
    let arr2=[];
    for(i=0;i<arr.length;i++){
        let exclamation=0;
        for(j=0;j<arr[i].length;j++){
          arr[i][j]=='!'?exclamation++:null;
        }
      (exclamation==0 || exclamation==2)?arr2.push(arr[i]):null;
    }
    return arr2.join(' ');
}
//remove("Hi!") === ""
//remove("Hi! Hi!") === ""
//remove("Hi! Hi! Hi!") === ""
//remove("Hi Hi! Hi!") === "Hi"
//remove("Hi! !Hi Hi!") === ""
//remove("Hi! Hi!! Hi!") === "Hi!!"
//remove("Hi! !Hi! Hi!") === "!Hi!"