export class Translator {
    constructor(binary) {
        this.binary = binary;
    }

    translateInput(strToConvert) {
        let splitCharacters = strToConvert.toLowerCase().split(" ").join("").split("");
        let convertedStr = splitCharacters.map(char => {
            return this.binary[char];
        }).join(" ");
        return convertedStr

    }
}