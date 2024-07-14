const whoWon = require('../RPS.js');

describe("check", function(){

    test("should return 'TIE' if both players submit same entry.", function() {
        let output = whoWon("paper", "paper");
        expect(output).toBe('TIE!');
        });

    test("should return 'Player 2 wins' if P1 = rock and P2 = paper.", function() {
        let output = whoWon("rock", "paper");
        expect(output).toBe("Player 2 wins!");
        });

     test("should return 'Player 2 wins' if P1 = paper and P2 = scissors.", function() {
        let output = whoWon("paper", "scissors");
        expect(output).toBe("Player 2 wins!");
        });    
    
    test("should return 'Player 2 wins' if P1 = scissors and P2 = rock.", function() {
        let output = whoWon("scissors", "rock");
        expect(output).toBe("Player 2 wins!");
        });
    
    test("should return 'Player 1 wins!' for all other legal entries", function() {
        let output = whoWon("rock", "scissors");
        expect(output).toBe("Player 1 wins!");
        });
    
    test("should return 'Not a valid entry. Try again.' if either player submits an invalid answer", function() {
        let output = whoWon("paper", "towel");
        expect(output).toBe("Not a valid entry. Try again.");
        });


})