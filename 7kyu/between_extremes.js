function betweenExtremes(arr) {
    let max=arr[0],min=arr[0];
    for(i=1;i<arr.length;i++){
        if(max<arr[i]){max=arr[i]}
        if(min>arr[i]){min=arr[i]}
     }
  return max-min;
}
//(betweenExtremes([21, 34, 54, 43, 26, 12]), 42);
//(betweenExtremes([-1, -41, -77, -100]), 99);