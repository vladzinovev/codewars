function friend(friends){
    const arr=[];
    for (var i = 0; i < friends.length; i++) {
      if(friends[i].length==4){
        if(isNaN(friends[i])){
          arr.push(friends[i]);
        }
      }
    }
    return arr;
}
//assert.deepEqual(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])
//assert.deepEqual(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
//assert.deepEqual(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])
//assert.deepEqual(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"])