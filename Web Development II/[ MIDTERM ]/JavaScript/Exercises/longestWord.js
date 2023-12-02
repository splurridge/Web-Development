function getLongest(str) {
    let strSplit = str.split(' ');
    let longestWord = ' ';
    
    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWord.length) {
            longestWord = strSplit[i];
        }
    }
    
    return longestWord;
}

console.log(getLongest("May the force be with you"));
