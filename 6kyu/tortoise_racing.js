//через сколько [часов,минут,секунд] одна черепаха догонит другую
function race(v1, v2, g) {
    console.log(v1,v2,g)
      if(v1>v2){return null}
      let time=g/(v2-v1);
      console.log(time,(time-Math.floor(time))*60,(time*60-Math.floor(time*60))*60)
      let hour=Math.floor(time);
      let min=Math.floor((time-Math.floor(time))*60);
      let sec=Math.floor((time*60-Math.floor(time*60))*60);
      
      let hourAndMin=(time-Math.floor(time))*60;
      let minAndSec=(time*60-Math.floor(time*60))*60;
      console.log(hourAndMin,min,hourAndMin-min,((hourAndMin-min)*60)-Math.floor(((hourAndMin-min)*60)))
      if( hourAndMin-min >0.998){
          return[hour,min+1,0]
      }
      console.log(minAndSec,sec,minAndSec-sec,Math.floor(minAndSec))
      if(minAndSec-sec>0.998){
          return[hour,min,sec+1]
      }
    return[hour,min,sec]
}

//assert.deepEqual(race(720, 850, 70), [0, 32, 18])
//assert.deepEqual(race(80, 91, 37), [3, 21, 49])
//assert.deepEqual(race(80, 100, 40), [2, 0, 0])
//assert.deepEqual(race(720, 850, 37), [0, 17, 4])

function race(v1, v2, g) {
    
    var seconds = Math.floor(g / (v2 - v1) * 3600);
    var h = Math.floor(seconds / 3600);
    var m = Math.floor((seconds - h * 3600) / 60);
    var s = seconds - h * 3600 - m * 60;
  
    return v2>v1 ?[h, m, s]:null;
  }