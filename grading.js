function letterGrader(grade) {
  switch(true) {
    case grade > 100:
      return 'Please enter a grade from 0 to 100';
    case grade < 0:
      return 'Please enter a grade from 0 to 100';
    case grade >= 90:
      return 'A';
    case grade >= 90:
      return 'A';
    case grade >= 80:
      return 'B';
    case grade >= 70:
      return 'C';
    case grade >= 60:
      return 'D';
    case grade >= 0:
      return 'E';
    default:
      return 'Please enter a grade';
    }
}

function averageScore(scoresArray) {
  var total = 0;
  for (var i = 0; i < scoresArray.length; i++) {
    total += scoresArray[i];
  }
  return total / scoresArray.length;
}

function medianScore(scoresArray) {
  debugger;
  var numOfTests = scoresArray.length;
  var sortedArr = scoresArray.sort();
  if (numOfTests % 2 === 0) {
    var firstMiddle = sortedArr[numOfTests / 2 - 1];
    var secondMiddle = sortedArr[numOfTests / 2];
    return (firstMiddle + secondMiddle) / 2;
  } else {
    return sortedArr[(numOfTests - 1) / 2];
  }
}

function modeScore(scoresArray) {
  var numMap = {};
  var mode;

  for (var i = 0; i < scoresArray.length; i++) {
    if (numMap[scoresArray[i]]) {
      numMap[scoresArray[i]]++;
    } else {
      numMap[scoresArray[i]] = 1;
    }
  }

  var count = 0;
  for (var score in numMap) {
    if (numMap[score] > count) {
      count = numMap[score];
      mode = score;
    }
  }
  return +mode;
}

module.exports = {
  letterGrader: letterGrader,
  averageScore: averageScore,
  medianScore: medianScore,
  modeScore: modeScore
};
