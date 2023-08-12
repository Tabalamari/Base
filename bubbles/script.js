const scores1 = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];
const costs = [.25, .27, .25, .25, .25, .25, .33, .31, .25, .29, .27, .22, .31, .25, .25, .33, .21, .25, .25, .25, .28, .25, .24, .22, .20, .25, .30, .25, .24, .25,
    .25, .25, .27, .25, .26, .29];
printReport(scores1)

function printReport(scores) {
    const bubbleSolutions = document.getElementById("bubbleSolutions");
    bubbleSolutions.innerHTML = getRangeOfElements(scores, "Bubble Solution ").join("\n");

    const tests = document.getElementById("tests");
    tests.innerHTML = "<p style=display: flex>Bubbles tests: " + scores.length + "</p>";

    const highestBubbleScore = document.getElementById("highestBubbleScore");
    const highestScore = gethighestBubbleScore(scores);
    highestBubbleScore.innerHTML = "Highest bubble score: " + highestScore;

    const indexesOfHighestScore = document.getElementById("indexesOfHighestScore")
    indexesOfHighestScore.innerHTML = "Solutions with highest score: " + getIndexOfValue(scores, highestScore);

    const mostEffectiveIndex = document.getElementById("mostEffectiveIndex");
    mostEffectiveIndex.innerHTML = "The most cost effective index of solution: " + "# " + getMostCostEffectiveSolution(scores, costs, highestScore)
}

function getRangeOfElements(scores, label) {
    const result = [];
    for (let i = 0; i < scores.length; i++) {
        const element = scores[i];
        result.push("<p>" + label + "#" + i + " score:" + element + "</p>");
    }
    return result;
}

function gethighestBubbleScore(scores) {

    const copyScores = scores.slice();
    const sortScores = copyScores.sort((a, b) => a - b);
    const highScores = sortScores[sortScores.length - 1];

    return highScores;
}

function getIndexOfValue(arr, val) {
    const indexes = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            indexes.push(" #" + i);
        }
    }
    return indexes;
}

function getMostCostEffectiveSolution(scores, costs, highscore) {
    let cost = 100;
    let index;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === highscore) {
            if (cost > costs[i]) {
                index = i;
                cost = costs[i];
            }
        }
    }
    return index;
}