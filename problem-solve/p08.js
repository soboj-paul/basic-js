function findShortWord(sentencs){
    let words = sentencs.split(" ");
    let shortWord = words[0];
    for(let word of words){
        if(word.length < shortWord.length){
            shortWord = word;
        }
    }
    return shortWord;
}
console.log(findShortWord("JavaScript is a fun language"))