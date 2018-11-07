const test = require("tap").test;

const generateRandomWord = require("../index");

test("generates random word", function(t) {
    const word = generateRandomWord();
    console.log(word)
    t.is(typeof word, '')
    t.ok(word.length > 0)
    t.end()
})