const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function getDigitalMorseCode(morseCode) {
    var digitalCode = '0000000000'.split('');
    var letterCode = morseCode.replace(/\./g, '10').replace(/-/g, '11');

    for (var letterIndex = 0; letterIndex < digitalCode.length; letterIndex++) {
        var matchingLetterCodeIndex = letterIndex - (digitalCode.length - letterCode.length);

        digitalCode[letterIndex] = letterCode[matchingLetterCodeIndex] || '0';
    }

    return digitalCode.join('');
}

function getDigitalMorseTable() {
    var morseCodes = Object.keys(MORSE_TABLE);
    var digitalMorseTable = {};

    for (var index = 0; index < morseCodes.length; index++) {
        var morseCode = morseCodes[index];
        var digitalCode = getDigitalMorseCode(morseCode);

        digitalMorseTable[digitalCode] = MORSE_TABLE[morseCode];
    }

    digitalMorseTable['**********'] = ' ';

    return digitalMorseTable;
}

function decode(expr) {
    var digitalMorseTable = getDigitalMorseTable();

    var tmpString = '';
    var result = '';

    for (var index = 0; index < expr.length; index++) {
        tmpString += expr[index];

        if (digitalMorseTable[tmpString]) {
            result += digitalMorseTable[tmpString];
            tmpString = '';
        }
    }

    return result;
}

module.exports = {
    decode
}
