var findPoisonedDuration = function (timeSeries, duration) {
  const totalDuration = timeSeries.reduce((acc, currentTime, currentIndex) => {
    let thisDuration = duration;
    let nextTime = timeSeries[currentIndex + 1];

    // if the next time stamp starts before current duration could finish, cut the current one short
    // && only if there is a next time stamp
    if (nextTime - currentTime < duration && nextTime) {
      thisDuration = nextTime - currentTime;
    }

    // add current duration to accumulator
    return (acc += thisDuration);
  }, 0);

  return totalDuration;
};

// console.log(findPoisonedDuration([1, 4], 2));
// console.log(findPoisonedDuration([1, 2], 2));
console.log(findPoisonedDuration([0, 3, 6, 9], 5));
