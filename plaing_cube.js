//бросаем кубик 5 раз и  считаем очки
//Three 1's => 1000 points
//Three 6's =>  600 points
//Three 5's =>  500 points
//Three 4's =>  400 points
//Three 3's =>  300 points
//Three 2's =>  200 points
//One   1   =>  100 points
//One   5   =>   50 point
function score( dice ) {
    let count=0,one=0,two=0,three=0,four=0,five=0,six=0;
    for (i = 0; i < dice.length; i++) {
          switch(dice[i]){
              case 1: one++; break;
              case 2: two++; break;
              case 3: three++; break;
              case 4: four++; break;
              case 5: five++; break;
              case 6: six++; break;
          }
      }
    if(one>2) { 
      count += 1000; 
      one-=3;
    }
    count+=one*100;
    if(five>2) { 
      count += 500; 
      five-=3;
    }
    count+=five*50;
    if(two>2) count+=200;
    if(three>2) count+=300;
    if(four>2) count+=400;
    if(six>2) count+=600;
    
    return count;
}
//score( [1, 1, 1, 1, 1] ) == 0;
//score( [2, 3, 4, 6, 2] ) == 0;
//score( [4, 4, 4, 3, 3] ) == 400;
//score( [2, 4, 4, 5, 4] ) == 450;