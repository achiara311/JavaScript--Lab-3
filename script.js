"use strict";
//1
let submissions = [
    {
        name: "Jane",
        score: 95,
        date: "2020 - 01 - 24",
        passed: true,
    },
    {
        name: "Joe",
        score: 77,
        date: "2018 - 05 - 14",
        passed: true,
    },
    {
        name: "Jack",
        score: 59,
        date: "2019 - 07 - 05",
        passed: false,
    },
    {
        name: "Jill",
        score: 88,
        date: "2020 - 04 - 22",
        passed: true,
    }
];
console.log("---------ADD SUBMISSION-----------")
//2
const addSubmission = (array, newName, newScore, newDate) => {
    let addAnotherSubmission = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60 ? true : false,
        //passed: newScore >= 60 
    };
    array.push(addAnotherSubmission);
}
addSubmission(submissions, "Anthony", 76, "3-01-1993");
console.log(submissions);

//3 
console.log("---------DELETE SUBMISSIONS INDEX-----------")
const deleteSubmissionByIndex = (array, index,) => {
    array.splice(index, 1);
}
// deleteSubmissionByIndex(submissions, 4);
console.log("Deleted Anthony:", submissions);

//4
console.log("---------DELETE SUBMISSION NAME USING findIndex-----------")
const deleteSubmissionByName = (array, name) => {
    let deleteIndex = array.findIndex((student) => {
        return student.name === name;
    });
    array.splice(deleteIndex, 1);
}

deleteSubmissionByName(submissions, "Jane");
console.log("Deleted Jane", submissions);

const editSubmission = (array, index, score) => {
    array[index].score = score;
    array[index].passed = score >= 60;
}
editSubmission(submissions, 3, 100);
console.log(submissions);

//6
console.log("------Find Submission By Name-----------");
const findSubmissionByName = (array, name) => {
    let found = array.find((student) => {
        return student.name === name;
    });
    return found;
};
console.log(submissions);
console.log("Name:", findSubmissionByName(submissions, "Anthony"));
// console.log("Our name", submissions);

//7

//similar to finding the sum (hint)
//if its lower, i replace it (lowestScoreArray = number )

//7
console.log("------Find LOWEST SCORE-----------");
const findLowestScore = (array) => {
    let lowestScoreArray = array[0]; //current lowest score, base everything else off of this
    array.forEach((number) => {
        if (number.score < lowestScoreArray.score) {
            lowestScoreArray = number; //lowest score is now the CURRENT OBJECT, THE CURRENT SCORE
        }
    });
    return lowestScoreArray;
};

console.log(findLowestScore(submissions));

//8
console.log("------Find AVERAGE SCORE-----------");
console.log(submissions);
const findAverageScore = (array) => {
    let sum = 0; //should be outside of loop
    for (let averageScore of array) {
        sum += averageScore.score;
        //OR
        //sum += averageScore.score/4;
    }
    return sum / array.length;
    //OR
    //return sum;
}

console.log(findAverageScore(submissions));

//9
console.log("------Filter Passing -----------");
const filterPassing = (array) => {
    let passUs = array.filter((pass) => {
        return pass.passed === true;
    });
    return passUs;
};

console.log("Who passed:", filterPassing(submissions));

//10
console.log("------Filter 90 and Above -----------");
const filter90AndAbove = (array) => {
    let pleasePassUs = array.filter((newPass) => {
        return newPass.score >= 90;
    });
    return pleasePassUs;
};

console.log("Who passed 90 and above:", filter90AndAbove(submissions));

console.log("------Extended Challenges -----------");

const createRange = (start, end) => {
    let numbers = [];
    for (let i = start; i <= end; i++) {
        //it's saying: lets start at your first input
        //and we'll keep going until you hit your second input
        numbers.push(i);//pushing your start input into your array
        //to activate it
    }
    return numbers;
}

console.log("Our number range:", createRange(2, 5));

console.log("----counting elements-------")


let elements = ["a", "b", "b", "c", "a", "a", "c", "c", "c", "c"];
const countElements = (array) => {
    let countsObject = {};
    for (let i = 0; i < array.length; i++) {
        let num = array[i];//container for array[i]
        if (countsObject[num]) {//if object contains array strings,add it together by one
            countsObject[num] += 1; //object[num] = object[num]+1
        } else {
            countsObject[num] = 1;//have it just be one
        }
        //OR
        // countsObject[num] = countsObject[num] ? countsObject[num] + 1 : 1;
    }
    return countsObject;
}

console.log(countElements(elements));