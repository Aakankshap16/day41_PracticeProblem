function findZeroSumTriplets(array) {
    let triplets = [];
  
    for (let i = 0; i < array.length - 2; i++) {
      for (let j = i + 1; j < array.length - 1; j++) {
        for (let k = j + 1; k < array.length; k++) {
          if (array[i] + array[j] + array[k] === 0) {
            triplets.push([array[i], array[j], array[k]]);
          }
        }
      }
    }
  
    return triplets;
  }
  
 
  let numbers = [1, -2, 3, 4, -1, -3, 0];
  let triplets = findZeroSumTriplets(numbers);
  
  if (triplets.length > 0) {
    console.log("Triplets with sum zero:");
    for (let triplet of triplets) {
      console.log(triplet);
    }
  } else {
    console.log("No triplets found with sum zero.");
  }
  