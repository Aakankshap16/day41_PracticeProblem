console.log("Welcome to Practice Problem!!");
function generateRandomNumbers() {
    let randomNumbers = [];
    for (let i = 0; i < 10; i++) {
      let randomNumber = Math.floor(Math.random() * 900) + 100;
      randomNumbers.push(randomNumber);
    }
    return randomNumbers;
  }

  
  function findSecondLargestAndSmallest(numbers) {
    let sortedNumbers = numbers.slice().sort((a, b) => a - b); // Sort the numbers array in ascending order
     console.log("sorted Random Number",sortedNumbers);
  let secondLargest = sortedNumbers[sortedNumbers.length - 2]; // Get the second largest element
  let secondSmallest = sortedNumbers[1]; // Get the second smallest element

   
  
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
  