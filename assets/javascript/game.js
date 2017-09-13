$(document).ready(function() {
    runGame();
});
// Wins & Losses Tally Outside of Game Scope
var wins = 0;
var losses = 0;
// Function That Runs the Entire Game
function runGame() {
    var counter = 0;
// Randomly Generated Target Number
    var targetNumber = Math.floor(Math.random() * ((120-19)+1) + 19);
    $("#numberToMatch").text(targetNumber);
// Four Generated Crystal Values
    var numberOptions = [];
    while (numberOptions.length < 4) {
        var randomNumber = Math.ceil(Math.random() * 12);
        if (numberOptions.indexOf(randomNumber) > -1) continue;
        numberOptions[numberOptions.length] = randomNumber;
    }
    console.log(numberOptions);
// Crystal Image Button Clicks
    $("#crystal1").click(function() {
        $(".statusDisp").remove();
        counter = numberOptions[0] + counter;
        $("#totalScore").text(counter);
        scoreChecker();
    });
    $("#crystal2").click(function() {
        $(".statusDisp").remove();
        counter = numberOptions[1] + counter;
        $("#totalScore").text(counter);
        scoreChecker();
    });
    $("#crystal3").click(function() {
        $(".statusDisp").remove();
        counter = numberOptions[2] + counter;
        $("#totalScore").text(counter);
        scoreChecker();
    });
    $("#crystal4").click(function() {
        $(".statusDisp").remove();
        counter = numberOptions[3] + counter;
        $("#totalScore").text(counter);
        scoreChecker();
    });
// Function That Checks the Score and Updates HTML Then Restarts Game
    function scoreChecker() {
        if (counter === targetNumber) {
            wins++;
            $(".wins-losses").append('<p class="statusDisp">You Won!</p>');
            $("#winsNumber").text(wins);
            counter = 0;
            $("#totalScore").text(counter);
            numberOptions = [0, 0, 0, 0];
            runGame();
        }
        if (counter > targetNumber) {
            losses++;
            $(".wins-losses").append('<p class="statusDisp">You Lost!</p>');
            $("#lossesNumber").text(losses);
            counter = 0;
            $("#totalScore").text(counter);
            numberOptions = [0, 0, 0, 0];
            runGame();
        }
    }
}