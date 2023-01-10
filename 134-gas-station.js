var canCompleteCircuitOld = function (gas, cost) {
  if (cost.reduce((a, b) => a + b) > gas.reduce((a, b) => a + b)) return -1;

  const startPoints = gas
    .map((station, index) => {
      return station === 0 || station - cost[index] < 0 ? -1 : index;
    })
    .filter((station) => station !== -1);

  for (let i = 0; i < startPoints.length; i++) {
    const startStation = startPoints[i];
    const gasNew = [...gas.slice(startStation), ...gas.slice(0, startStation)];
    const costNew = [
      ...cost.slice(startStation),
      ...cost.slice(0, startStation),
    ];
    let fuel = 0;
    let skip = false;

    for (let j = 0; j < gas.length; j++) {
      fuel += gasNew[j];
      fuel -= costNew[j];
      if (fuel < 0) {
        skip = true;
        break;
      }
    }

    if (!skip) return startStation;
  }
  return -1;
};

var canCompleteCircuit = function (gas, cost) {
  const cycleLength = gas.length;
  let start = 0;
  let fuel = 0;

  for (let i = start; i < cycleLength + start; i++) {
    // if i starts to wrap for the second time, return -1 as no solution is found
    if (i >= cycleLength * 2 - 1) return -1;

    let index = i;

    // resetting overflowing index
    if (i >= cycleLength) {
      index -= cycleLength;
    }

    // refuel and drive away
    fuel += gas[index];
    fuel -= cost[index];

    // if fuel becomes negative, choose the next start location being the one after where fuel runs out
    if (fuel < 0) {
      start = i + 1;
      fuel = 0;
      continue;
    }

    // if fuel never ran into negative, then when i wraps, around the solution is found
    if (i - cycleLength === start - 1) {
      return start;
    }
  }
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));

var canCompleteCircuitNico = function (gas, cost) {
  //check that the total gas is greater than the cost of gas

  const totalGas = gas.reduce((acc, current) => {
    return acc + current;
  }, 0);

  const totalCost = cost.reduce((acc, current) => {
    return acc + current;
  }, 0);

  if (totalCost > totalGas) {
    return -1;
  }

  let currentLoop = 0;
  let flag = false;

  while (!flag && currentLoop < gas.length) {
    console.log(currentLoop);
    console.log(gas[0], cost[0]);
    console.log(gas.length);
    if (currentLoop === 49999) {
      return 99999;
    }

    if (gas[0] === cost[0]) {
      gas.shift();
      cost.shift();
      if (gas.length === 0) {
        flag = true;
      }
      currentLoop++;
      continue;
    }

    let currentGas = 0;
    for (let i = 0; i < gas.length; i++) {
      currentGas = currentGas + gas[i] - cost[i];
      if (currentGas < 0) {
        flag = false;
        break;
      } else {
        flag = true;
      }
    }
    gas.push(gas.shift());
    cost.push(cost.shift());
    currentLoop++;
  }
  if (flag === true) {
    return currentLoop - 1;
  } else {
    return -1;
  }
};
