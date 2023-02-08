const submissions = [
    {name: 'Jane', score: 95, date: '2020-01-24', passed: true},
    {name: 'Joe', score: 77, date: '2018-05-14', passed: true},
    {name: 'Jack', score: 59, date: '2019-07-05', passed: false},
    {name: 'Jill', score: 88, date: '2020-04-22', passed: true}

];

function addSubmission(array, newName, newScore, newDate) {
    let ifPassed = null;
    if(newScore >= 60){
        ifPassed = true;
    } else {
        ifPassed = false;
    }
    console.log(ifPassed)
    return array.push({name: newName, score: newScore, date: newDate, passed: ifPassed})
};

function deleteSubmissionByIndex(array, index) {
    return array.splice([index], 1);
}

function deleteSubmissionByName(array, name) {
    const foundName = array.findindex(name);
    if (foundName === name) {
        array.splice()
    }
}

function editSubmission(array, index, score) {

}

function findSubmissionByName(array, name) {
    return array.find((item => item.name === name));
 //   for (let item of array) {
 //       if (item.name === name) {
 //           return item;
 //       }
 //   }
 //   return "Item not found"
}

function findLowestScore(array) {
    const found = array.find()
}

function findAverageScore(array) {

}

function filterPassing() {

}

function filter90AndAbove() {

}
//deleteSubmissionByIndex(submissions, 1);
addSubmission
console.log(submissions);