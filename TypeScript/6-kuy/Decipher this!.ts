/*
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:
the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples
decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
*/
export function decipherThis(str: string): string {
    return str.split(' ').map(word => {
      const asciiCode = parseInt(word);
      const asciiCodeDigits = asciiCode.toString().length;
      const newWord = String.fromCharCode(asciiCode) + word.substr(asciiCodeDigits);
      
      if (newWord.length <= 2) {
        return newWord;
      }
      else {
        return newWord[0] + newWord[newWord.length-1] + newWord.substring(2, newWord.length-1) + newWord[1];
      }
    }).join(' ');
  }