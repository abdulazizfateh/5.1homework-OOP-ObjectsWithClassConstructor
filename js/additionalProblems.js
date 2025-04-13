// P1 
const rentalCarCost = day => day * 40 - (day >= 3 && day < 7 ? 20 : day >= 7 ? 50 : 0);
// If we do not wrap the ternary with parantheses it 
// does not work as intended as the - subtraction has a higher precedence than ternary so we have to use parantheses 
// to make sure that the ternary gets done first
console.log(rentalCarCost(10));



// P2 
const quarterOf = (month) => month >= 1 && month <= 3 ? 1 : month > 3 && month <= 6 ? 2 : month > 6 && month <= 9 ? 3 : 4;
console.log(quarterOf(12));
// const quarterOf = m => Math.ceil(m/3); -> Best Practice - Genius



// P3
const removeExclamationMarks = (s) => s.replaceAll("!", "");
console.log(removeExclamationMarks("Hello World!!"));



// P4
class Kata {
    static getVolumeOfCuboid(length, width, height) { // This is static method as it works without creating object with constructors
        return length * width * height
    }
}
console.log(Kata.getVolumeOfCuboid(1, 2, 2));



// P5.1
const points = (games) => {
    let totalPoints = 0;
    games.forEach((item) => {
        if (item[0] > item[2]) {
            totalPoints += 3;
        } else if (item[0] === item[2]) {
            totalPoints += 1;
        }
    })
    return totalPoints;
}
console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));

// P5.2
const points2 = (games) => {
    return games.reduce((totalPoints, game) => {
        return totalPoints + (game[0] > game[2] ? 3 : game[0] === game[2] ? 1 : 0);
    }, 0);
}
// P5.3 - Single Line Code
const points3 = games => games.reduce((totalPoints, game) => totalPoints + (game[0] > game[2] ? 3 : game[0] === game[2] ? 1 : 0), 0);



// P6 
function greet(name) {
    if (name === "Johnny")
        return "Hello, my love!";
    return "Hello, " + name + "!";
}



// P7
const areaOrPerimeter = function (l, w) {
    if (l === w)
        return l * w;
    return (l + w) * 2;
};
console.log(areaOrPerimeter(4, 4));



// P8
const updateLight = current => current === "green" ? "yellow" : current === "red" ? "green" : "red";
console.log(updateLight("green"));



// P9
const otherAngle = (a, b) => 180 - a - b;
console.log(otherAngle(10, 40));



// P10
const setAlarm = (employed, vacation) => employed && !vacation;



// P11.1 - Using unary+ inside the reduce() method to convert string to a number type
const sumMix = x => x.reduce((sum, item) => sum + +item, 0);

// P11.2 - Using map() method to loop every item and convert them to a number type, and then sum them up using reduce
{
    const sumMix = x => x.map((item) => +item).reduce((sum, item) => sum + item, 0);
}



// P12
const sumArray = array => {
    if (!array || array.length <= 1 || Number(array)) { // !Array.isArray(array)
        return 0;
    }
    let min = array[0];
    let max = array[0];
    for (let item of array) {
        if (item < min) {
            min = item;
        }
        if (item > max) {
            max = item;
        }
    }
    return array.reduce((sum, item) => sum + item, 0) - min - max;
}
console.log(sumArray([-10, 20, 30, -3, 4, -9]));



// P13
const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) => laLigaGoals + copaDelReyGoals + championsLeagueGoals;
console.log(goals(43, 6, 10));



// P14.1 - My solution
const twoSum = (nums, target) => {
    let num1 = 0;
    let num2 = 0;

    let num1Index = null;
    let num2Index = null;

    for (let i = 0; i < nums.length; i++) {
        num1 = nums[i];
        num1Index = i;
        for (let j = i + 1; j < nums.length; j++) {
            num2 = nums[j];
            num2Index = j;
            if (num1 + num2 === target) {
                return [num1Index, num2Index];
            }
        }
    }
};
console.log(twoSum([0, 34, 4, 0], 0));

// P14.2 - Leetcode's Solution
{
    const twoSum = (nums, target) => {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                    return [i, j];
                }
            }
        }
    };
    console.log(twoSum([0, 34, 4, 0], 0));
}