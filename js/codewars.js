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