function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  function findMaxAndMinCounts(counts) {
    let maxCount = 0;
    let minCount = Infinity;
    let maxNumber;
    let minNumber;
  
    for (let number in counts) {
      if (counts.hasOwnProperty(number)) {
        const count = counts[number];
        if (count > maxCount) {
          maxCount = count;
          maxNumber = number;
        }
        if (count < minCount) {
          minCount = count;
          minNumber = number;
        }
      }
    }
  
    return {
      maxNumber,
      maxCount,
      minNumber,
      minCount,
    };
  }
  
  function rollAndStoreResults() {
    const counts = {};
    let rollNumber;
    let maxNumber;
    let maxCount;
    let minNumber;
    let minCount;
  
    while (true) {
      rollNumber = rollDie();
  
      if (counts.hasOwnProperty(rollNumber)) {
        counts[rollNumber] += 1;
      } else {
        counts[rollNumber] = 1;
      }
  
      ({ maxNumber, maxCount, minNumber, minCount } = findMaxAndMinCounts(counts));
  
      console.log("Current Counts:", counts);
      console.log("Max Number:", maxNumber, "(", maxCount, "times )");
      console.log("Min Number:", minNumber, "(", minCount, "times )\n");
  
      if (maxCount === 10 || minCount === 10) {
        break;
      }
    }
  
    console.log("Final Counts:", counts);
    console.log("Number that reached maximum times:", maxNumber, "(", maxCount, "times )");
    console.log("Number that reached minimum times:", minNumber, "(", minCount, "times )");
  }
  
  rollAndStoreResults();
  