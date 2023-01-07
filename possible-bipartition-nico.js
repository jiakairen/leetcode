var possibleBipartition = function (n, dislikes) {
  const group1 = [];
  const group2 = [];
  const testedValues = [];

  let currentNumber = 1;
  let count = 1;

  while (dislikes.length > 0) {
    console.log(currentNumber);
    if (currentNumber === 1) {
      group1.push(currentNumber);
    }
    testedValues.push(currentNumber);

    const currentSelection = dislikes.filter((n) => {
      if (n[0] === currentNumber) {
        return n;
      }
    });

    // console.log(currentSelection);

    const dislikesNumbers = currentSelection.map((n) => n[1]);

    console.log(dislikesNumbers);

    for (let i = 0; i < dislikesNumbers.length; i++) {
      const element = dislikesNumbers[i];
      console.log(element);
      if (count % 2 === 0) {
        if (group1.includes(element)) {
          return false;
        }
        group1.push(element);
      } else {
        if (group2.includes(element)) {
          return false;
        }
        group2.push(element);
      }
    }
    console.log("current number", currentNumber);

    dislikes = dislikes.filter((n) => {
      if (n[0] !== currentNumber) {
        return n;
      }
    });

    console.log(dislikes);

    console.log("tested values", testedValues);
    if (count % 2 === 0) {
      for (let i = 0; i < group1.length; i++) {
        const element = group1[i];
        if (!testedValues.includes(element)) {
          currentNumber = element;
          break;
        }
      }
    } else {
      for (let i = 0; i < group2.length; i++) {
        const element = group2[i];
        if (!testedValues.includes(element)) {
          currentNumber = element;
          break;
        }
      }
    }
    count++;
    console.log(group1);
    console.log(group2);
  }
};

console.log(
  possibleBipartition(50, [
    [21, 47],
    [4, 41],
    [2, 41],
    [36, 42],
    [32, 45],
    [26, 28],
    [32, 44],
    [5, 41],
    [29, 44],
    [10, 46],
    [1, 6],
    [7, 42],
    [46, 49],
    [17, 46],
    [32, 35],
    [11, 48],
    [37, 48],
    [37, 43],
    [8, 41],
    [16, 22],
    [41, 43],
    [11, 27],
    [22, 44],
    [22, 28],
    [18, 37],
    [5, 11],
    [18, 46],
    [22, 48],
    [1, 17],
    [2, 32],
    [21, 37],
    [7, 22],
    [23, 41],
    [30, 39],
    [6, 41],
    [10, 22],
    [36, 41],
    [22, 25],
    [1, 12],
    [2, 11],
    [45, 46],
    [2, 22],
    [1, 38],
    [47, 50],
    [11, 15],
    [2, 37],
    [1, 43],
    [30, 45],
    [4, 32],
    [28, 37],
    [1, 21],
    [23, 37],
    [5, 37],
    [29, 40],
    [6, 42],
    [3, 11],
    [40, 42],
    [26, 49],
    [41, 50],
    [13, 41],
    [20, 47],
    [15, 26],
    [47, 49],
    [5, 30],
    [4, 42],
    [10, 30],
    [6, 29],
    [20, 42],
    [4, 37],
    [28, 42],
    [1, 16],
    [8, 32],
    [16, 29],
    [31, 47],
    [15, 47],
    [1, 5],
    [7, 37],
    [14, 47],
    [30, 48],
    [1, 10],
    [26, 43],
    [15, 46],
    [42, 45],
    [18, 42],
    [25, 42],
    [38, 41],
    [32, 39],
    [6, 30],
    [29, 33],
    [34, 37],
    [26, 38],
    [3, 22],
    [18, 47],
    [42, 48],
    [22, 49],
    [26, 34],
    [22, 36],
    [29, 36],
    [11, 25],
    [41, 44],
    [6, 46],
    [13, 22],
    [11, 16],
    [10, 37],
    [42, 43],
    [12, 32],
    [1, 48],
    [26, 40],
    [22, 50],
    [17, 26],
    [4, 22],
    [11, 14],
    [26, 39],
    [7, 11],
    [23, 26],
    [1, 20],
    [32, 33],
    [30, 33],
    [1, 25],
    [2, 30],
    [2, 46],
    [26, 45],
    [47, 48],
    [5, 29],
    [3, 37],
    [22, 34],
    [20, 22],
    [9, 47],
    [1, 4],
    [36, 46],
    [30, 49],
    [1, 9],
    [3, 26],
    [25, 41],
    [14, 29],
    [1, 35],
    [23, 42],
    [21, 32],
    [24, 46],
    [3, 32],
    [9, 42],
    [33, 37],
    [7, 30],
    [29, 45],
    [27, 30],
    [1, 7],
    [33, 42],
    [17, 47],
    [12, 47],
    [19, 41],
    [3, 42],
    [24, 26],
    [20, 29],
    [11, 23],
    [22, 40],
    [9, 37],
    [31, 32],
    [23, 46],
    [11, 38],
    [27, 29],
    [17, 37],
    [23, 30],
    [14, 42],
    [28, 30],
    [29, 31],
    [1, 8],
    [1, 36],
    [42, 50],
    [21, 41],
    [11, 18],
    [39, 41],
    [32, 34],
    [6, 37],
    [30, 38],
    [21, 46],
    [16, 37],
    [22, 24],
    [17, 32],
    [23, 29],
    [3, 30],
    [8, 30],
    [41, 48],
    [1, 39],
    [8, 47],
    [30, 44],
    [9, 46],
    [22, 45],
    [7, 26],
    [35, 42],
    [1, 27],
    [17, 30],
    [20, 46],
    [18, 29],
    [3, 29],
    [4, 30],
    [3, 46],
  ])
);
