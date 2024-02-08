const testrps = require('../RPS');

describe("Play rock, paper, scissors", function() {
    test("returns 'TIE!' if P1 === P2 ", function() {
        let output = testrps.whoWon('paper', 'paper');
        expect(output).toBe("TIE!");
    });
    test("returns 'Player 1 wins!' if P1 = scissors & P2 = paper", function() {
        let output = testrps.whoWon('scissors', 'paper');
        expect(output).toBe("Player 1 wins!");
    });
    test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function() {
        let output = testrps.whoWon('rock', 'paper');
        expect(output).toBe("Player 2 wins!");
    });
});