


const words = [
    "apple",
    "brown",
    "cat",
    "hat",
    "stack",
    "flat",
    "errand"
];




function randomSelection(array){
    return array[Math.floor(Math.random()*array.length)];
}

function generateRandomWord(){
    return randomSelection(words);
}

module.exports = generateRandomWord;