function ArrayChallenge(strArr: string[]): string | number {
  // __define-ocg__
  const N = parseInt(strArr[0]);
  let totalGas = 0;
  let totalCost = 0;

  for (let i = 1; i <= N; i++) {
    const [gas, cost] = strArr[i].split(':').map(Number);
    totalGas += gas;
    totalCost += cost;
  }

  if (totalGas < totalCost) {
    return "impossible";
  }

  for (let startStation = 1; startStation <= N; startStation++) {
    let currentGas = 0;
    let currentStation = startStation;
    let canTravel = true;

    for (let visitedStations = 0; visitedStations < N; visitedStations++) {
      const [gas, cost] = strArr[currentStation].split(':').map(Number);
      currentGas += gas - cost;
      if (currentGas < 0) {
        canTravel = false;
        break;
      }
      currentStation = (currentStation % N) + 1; // circular route
    }

    if (canTravel) {
      return startStation;
    }
  }

  return "impossible";
}

// Test cases
console.log(ArrayChallenge(["4", "0:1", "2:2", "1:2", "3:1"])); // Output: 4
console.log(ArrayChallenge(["4", "0:1", "2:2", "1:2", "0:1"])); // Output: impossible
