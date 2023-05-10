function validParentheses(parenStr) {
    const arr=parenStr.split('');
    let right=0, left=0,result;
    for(i=0;i<arr.length;i++){
        arr[i]=='('?left++:right++;
      if(right>left){
        return false
      }
    }
    if(right==left){return true}else{return false};
}

//runTest(true, "()");
//runTest(true, "((()))");
//runTest(true, "()()()");
//runTest(true, "(()())()");
//runTest(true, "()(())((()))(())()");
//runTest(false, ")(");
//runTest(false, "()()(");
//runTest(false, "((())");
//runTest(false, "())(()");
//runTest(false, ")()");
//runTest(false, ")");