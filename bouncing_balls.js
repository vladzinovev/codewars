//бросаме мячик с высоты h, с отскоком bounce, сколько раз мама на высоте window увидит мяч 
function bouncingBall(h,  bounce,  window) {
    if(h===0 || bounce<=0 || bounce===1 || window>h/2) return -1;
    let count=0;
    while(h>window){
      count++;
      h=h*bounce;
      if(h>window){
        count++;
      }
    }
    return count
}
console.log(bouncingBall(6.0,0.66,1.5),7)
console.log(bouncingBall(30.0, 0.66, 1.5), 15)
console.log(bouncingBall(3.0, 0.66, 1.5), 3)
console.log(bouncingBall(3.0, 1.0, 1.5), -1)