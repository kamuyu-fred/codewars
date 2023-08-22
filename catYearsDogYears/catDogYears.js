var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    
    let catYears = 0;
    let dogYears = 0;
    if (humanYears >= 1) {
      catYears += 15;
      dogYears += 15;
      if (humanYears >= 2) {
        catYears += 9;
        dogYears += 9;
        for (let i = 3; i <= humanYears; i++) {
          catYears += 4;
          dogYears += 5;
        }
      }
    }
    return [humanYears, catYears, dogYears];
  
  }