function count(string) {
    // TODO
    
   
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    
    console.log(count)
    return count;
    
  }