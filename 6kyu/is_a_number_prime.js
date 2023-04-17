//является ли целое число простым

function isPrime(num) {
    if(num<2) return false
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if(num%i==0)return false
    }
    return true
}