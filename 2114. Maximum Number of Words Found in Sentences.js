/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    // set max to -1
    // loop through sentences
        // with each loop compare max to length of the current sentence

        let max = -1;

        for (let i = 0; i < sentences.length; i++) {

            let sentenceArray = sentences[i].split(" ");



            if (max < sentenceArray.length) {
            
                max = sentenceArray.length
            
            }
        };


        return max;
};