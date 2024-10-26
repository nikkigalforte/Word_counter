function countWords() {
    const sentence = document.getElementById("sentence").value;
    let wordCount = 0;
    const space = ' ';

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        if (char !== space) {
            if (i === 0 || sentence[i - 1] === space) {
                wordCount++;
            }
        }
    }

    document.getElementById("wordCount").innerText = `Количество слов: ${wordCount}`;
}
