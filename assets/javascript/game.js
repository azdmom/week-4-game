// //  At the start of every game:
// // - the game will begin by a number being automatically generated in the randomNum div
// //     - the number should be between 19 - 120
// // - give each of the crystals a random value between 1 - 12
var wins = 0;
var losses = 0;
var totalScore = 0;
var randomNum = Math.floor(Math.random() * 101) + 19;
console.log(randomNum)
var image1 = Math.floor((Math.random() * 12) + 1);
console.log(image1)
var image2 = Math.floor((Math.random() * 12) + 1);
console.log(image2);
var image3 = Math.floor((Math.random() * 12) + 1);
console.log(image3)
var image4 = Math.floor((Math.random() * 12) + 1);
console.log(image4)

$('#wins').html(wins);
$('#losses').html(losses);
$('#totalScore').html(totalScore);
$('#randomNum').html(randomNum)

// // - with every click of each crystal, the totalScore goes up
$(document).ready(function () {
    // //     once player has won or lost, game will reset:
    // //         - crystal values will reset
    // //         - randomNum will reset
    // //         -totalScore will reset to 0 

    function win() {
        wins++;
        $('#wins').text(wins);
        alert("You won!");
        restart();
    }

    function loss() {
        losses++;
        $('#losses').text(losses);
        alert("You lost!");
        restart();
    }

    $("#image1").on("click", function () {
        totalScore = totalScore + image1;
        $("#totalScore").text(totalScore);
        if (totalScore === randomNum) {
            win();
        }
        else if (totalScore > randomNum) {
            loss();
        };
    });

    $("#image2").on("click", function () {
        totalScore = totalScore + image2;
        $("#totalScore").text(totalScore);
        if (totalScore === randomNum) {
            win();
        }
        else if (totalScore > randomNum) {
            loss();
        };
    });

    $("#image3").on("click", function () {
        totalScore = totalScore + image3;
        $("#totalScore").text(totalScore);
        if (totalScore === randomNum) {
            win();
        }
        else if (totalScore > randomNum) {
            loss();
        };
    });

    $("#image4").on("click", function () {
        totalScore = totalScore + image4;
        $("#totalScore").text(totalScore);
        if (totalScore === randomNum) {
            win();
        }
        else if (totalScore > randomNum) {
            loss();
        };
    });

    // //     if the totalScore = randomNum, then player has won
    // //         - wins++
    // //         - reset
    // //     else if totalScore > random number, player has lost
    // //         - loss++
    // //         - reset
    function restart() {
        totalScore = 0;
        randomNum = Math.floor(Math.random() * 120) + 18;
        image1 = Math.floor((Math.random() * 12) + 1);
        image2 = Math.floor((Math.random() * 12) + 1);
        image3 = Math.floor((Math.random() * 12) + 1);
        image4 = Math.floor((Math.random() * 12) + 1);

        $('#wins').html(wins);
        $('#losses').html(losses);
        $('#totalScore').html(totalScore);
        $('#randomNum').html(randomNum)
    };

});