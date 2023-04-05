# ArrayMax.js
function findSmallestTransaction(transactions) {
  let smallest = transactions[0];
  for (let i = 1; i < transactions.length; i++) {
    if (transactions[i] > smallest) {
      smallest = transactions[i];
    }
  }
  return smallest;
}
---
function findBestStudentMistakes(students) {
  let smallest = students[0]
  for (let i = 1; i < students.length; i++) {
    if (students[i] < smallest) {
      smallest = students[i];
    }
  }

  return smallest;
}
---
function findAverageTime(times) {
  let summ = times[0]
  for (let i = 1; i < times.length; i++) {
    summ += times[i]
  }

  return summ / times.length
}
---
function findMostProfitableClient(income) {
  let maxProfit = 0;
  let bestClient = 0;
  for (let i = 0; i < income.length; i++) {
    let clientProfit = income[i].reduce((acc, curr) => acc + curr, 0);
    if (clientProfit > maxProfit) {
      maxProfit = clientProfit;
      bestClient = i;
    }
  }
  return bestClient;
}


# ArrayTop
Тут интересно что алгоритм поиска нескольких минимальных величин findBottomElements основанный на методе sort() работает в разы быстрее чем findTopElements

function findMaxUnderBoundary(inputArray, topBoundary) {
  let currentMax = -Infinity; // заменяем +Infinity на -Infinity
  for (let k = 0; k < inputArray.length; k++) {
    if (inputArray[k] <= topBoundary) {
      currentMax = Math.max(currentMax, inputArray[k]);
    }
  }
  return currentMax;
}
---
function findBottomElements(inputArray, numberOfElements) {
  console.time('findBottomElements');
  const sortedArray = inputArray.sort((a, b) => a - b);
  const bottomElements = sortedArray.slice(0, numberOfElements);
  console.timeEnd('findBottomElements')
  return bottomElements;
}
---
function findTopElements(inputArray, numberOfElements) {
  console.time('findTopElements');
  const topElements = new Array(numberOfElements);
  let previousMax = +Infinity;

  for (let i = 0; i < numberOfElements; i++) {
    const currentMax = findMaxUnderBoundary(inputArray, previousMax);

    // Удалим максимальное значение из массива
    inputArray.splice(inputArray.indexOf(currentMax), 1)

    previousMax = currentMax;

    topElements[i] = currentMax;
  }
  return topElements;
}

# UniqueNumbers
Тут не совсем понятно что нужно сделать студенту
function lettersLearnedToday(word) {
  // return [...new Set(word)].join('')
  const letters = []

  for (let i = 0; i < word.length; i++) {
    if (!letters.includes(word[i])) {
      letters.push(word[i])
    }
  }
  return letters.join('');
}

function avoidJailDueToTaxFraud(report) {
  const summs = report.flat()
  // Array.prototype.flat() or for loop ?
  // for (let i = 0; i < report.length; i++) {
  //   const clientReport = report[i]
  //
  //   for (let i = 0; i < clientReport.length; i++) {
  //     summs.push(clientReport[i])
  //   }
  // }

  for (let i = 0; i < summs.length; i++) {
    if (summs.indexOf(summs[i]) !== i) {
      return summs[i]
    }
  }

  return -1;
}

# ArraySorted
function groupAndPrint(phoneNumbers) {
  const phoneCounts = {};
  for (let i = 0; i < phoneNumbers.length; i++) {
    const phoneNumber = phoneNumbers[i];
    if (phoneCounts[phoneNumber]) {
      phoneCounts[phoneNumber]++;
    } else {
      phoneCounts[phoneNumber] = 1;
    }
  }
  for (const phoneNumber in phoneCounts) {
    printPhoneInfo(phoneNumber, phoneCounts[phoneNumber]);
  }
}

function cryptoCurrencyAnalysis(fileContents) {
  console.log(`\n\tInput file contents:`);
  const currencies = {}

  fileContents.forEach(({ name, amount }) => {
    if (currencies[name]) {
      currencies[name] = currencies[name] = {
        count: ++currencies[name].count,
        amount: amount + currencies[name].amount
      }
    } else {
      currencies[name] = {
        count: 1,
        amount
      }
    }
  });

  Object.entries(currencies).forEach(([ name, { amount, count } ]) => {
    printCurrencyInfo(name, amount / count)
  });
}
