var grade = require('../grading');

describe('Grading', function() {
  it('should return letter grade for a certain grade', function() {
    expect(grade.letterGrader(98)).toEqual('A');
    expect(grade.letterGrader(80)).toEqual('B');
    expect(grade.letterGrader(70)).toEqual('C');
    expect(grade.letterGrader(60)).toEqual('D');
    expect(grade.letterGrader(59)).toEqual('F');
    expect(grade.letterGrader(101)).toEqual('Please enter a grade from 0 to 100');
    expect(grade.letterGrader(-1)).toEqual('Please enter a grade from 0 to 100');
  });

  it('should give the average of an array of test scores', function() {
    expect(grade.averageScore([90, 95, 87, 60])).toEqual(83);
  });

  it('should give the median of an array of test scores', function() {
    expect(grade.medianScore([52,80,80,86,94])).toEqual(80);
    expect(grade.medianScore([52,80,86,94])).toEqual(83);
  });

  it('should give the mode of an array of test scores', function() {
    expect(grade.modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])).toEqual(92);
  });
});
