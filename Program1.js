function generateRandomNumbers() {
    let randomNumbers = [];
    for (let i = 0; i < 10; i++) {
      let randomNumber = Math.floor(Math.random() * 900) + 100;
      randomNumbers.push(randomNumber);
    }
    return randomNumbers;
  }
  
  function findSecondLargestAndSmallest(numbers) {
    let largest = numbers[0];
    let secondLargest = -Infinity;
    let smallest = numbers[0];
    let secondSmallest = Infinity;
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largest) {
        secondLargest = largest;
        largest = numbers[i];
      } else if (numbers[i] > secondLargest && numbers[i] < largest) {
        secondLargest = numbers[i];
      }
  
      if (numbers[i] < smallest) {
        secondSmallest = smallest;
        smallest = numbers[i];
      } else if (numbers[i] < secondSmallest && numbers[i] > smallest) {
        secondSmallest = numbers[i];
      }
    }
  
    return {
      secondLargest,
      secondSmallest
    };
  }
  
  let randomNumbers = generateRandomNumbers();
  console.log("Random Numbers:", randomNumbers);
  
  let results = findSecondLargestAndSmallest(randomNumbers);
  console.log("Second Largest:", results.secondLargest);
  console.log("Second Smallest:", results.secondSmallest);
  