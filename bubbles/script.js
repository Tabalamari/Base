const scores1 = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];

printReport(scores1)

function printReport(scores) {
    let bubb = document.getElementById("bubb");
    bubb.innerHTML = bubbles(scores);

    let tests = document.getElementById("tests");
    tests.innerHTML = "<p style=display: flex>Bubbles tests: " + scores.length + "</p>";

    let highestBubbleScore = document.getElementById("highestBubbleScore");
    let highestScore = gethighestBubbleScore(scores);
    highestBubbleScore.innerHTML = "Highest bubble score: " + highestScore;
    
    let indexOfBiggestValue = document.getElementById("indexOfBiggestValue")
    indexOfBiggestValue.innerHTML = getIndexOfBiggestValue(scores, highestScore);
}

function bubbles(scores) {
    let result = [];
    for (let i = 0; i < scores.length; i++) {
        const element = scores[i];
        result.push("<p>Bubble solution #" + i + " score:" + element + "</p>");
    }
    return result.join("\n");
}
//var output;
// var i = 0;
// while (i < scores.length) {
//     output = "Bubble solution #" + i + " score: " + scores[i]; console.log(output);
//     i = i + 1;

function gethighestBubbleScore(scores) {
    function compareNumbers(a, b) {
        return a - b;
    }
    let copyScores = scores.slice();
    let sortScores = copyScores.sort(compareNumbers)
    let highScores = sortScores[sortScores.length - 1];

    return highScores;
}

function getIndexOfBiggestValue(arr, val) {
    const indexes = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            indexes.push(" #" + i);
        }
    }
    return "Solutions with highest score: " + indexes;
}
