function toReadable(number) {
    let result;
    const zero = ('zero');
    const one = ('one');
    const two = ('two');
    const three = ('three');
    const four = ('four');
    const five = ('five');
    const six = ('six');
    const seven = ('seven');
    const eight = ('eight');
    const nine = ('nine');
    const ten = ('ten');
    const eleven = ('eleven');
    const twelve = ('twelve');
    const thirteen = ('thirteen');
    const fourteen = ('fourteen');
    const fifteen = ('fifteen');
    const sixteen = ('sixteen');
    const seventeen = ('seventeen');
    const eighteen = ('eighteen');
    const ninteen = ('ninteen');
    const twenty = ('twenty');
    const thirty = ('thirty');
    const forty = ('forty');
    const fifty = ('fifty');
    const sixty = ('sixty');
    const seventy = ('seventy');
    const eighty = ('eighty');
    const ninety = ('ninety');
    const hundred = ('hundred');

    switch (number) {
        case 0: result = zero; break;
        case 1: result = one; break;
        case 2: result = two; break;
        case 3: result = three; break;
        case 4: result = four; break;
        case 5: result = five; break;
        case 6: result = six; break;
        case 7: result = seven; break;
        case 8: result = eight; break;
        case 9: result = nine; break;
        case 10: result = ten; break;
        case 11: result = eleven; break;
        case 12: result = twelve; break;
        case 13: result = thirteen; break;
        case 14: result = fourteen; break;
        case 15: result = fifteen; break;
        case 16: result = sixteen; break;
        case 17: result = seventeen; break;
        case 18: result = eighteen; break;
        case 19: result = ninteen; break;
    }


    if (number > 19 && number < 100) {

        let Units = number % 10;
        let resultForUnits;
        switch (Units) {
            case 0: resultForUnits = ''; break;
            case 1: resultForUnits = one; break;
            case 2: resultForUnits = two; break;
            case 3: resultForUnits = three; break;
            case 4: resultForUnits = four; break;
            case 5: resultForUnits = five; break;
            case 6: resultForUnits = six; break;
            case 7: resultForUnits = seven; break;
            case 8: resultForUnits = eight; break;
            case 9: resultForUnits = nine; break;
        }

        let Dozens = (Math.floor(number / 10));
        let resultForDozens;
        switch (Dozens) {
            case 2: resultForDozens = twenty; break;
            case 3: resultForDozens = thirty; break;
            case 4: resultForDozens = forty; break;
            case 5: resultForDozens = fifty; break;
            case 6: resultForDozens = sixty; break;
            case 7: resultForDozens = seventy; break;
            case 8: resultForDozens = eighty; break;
            case 9: resultForDozens = ninety; break;
        };

        result = `${resultForDozens} ${resultForUnits}`;
    };


    if (number > 100 && number < 1000) {
        let Hundreds = (Math.floor(number / 100));
        let resultForHundreds;
        switch (Hundreds) {
            case 1: resultForHundreds = one; break;
            case 2: resultForHundreds = two; break;
            case 3: resultForHundreds = three; break;
            case 4: resultForHundreds = four; break;
            case 5: resultForHundreds = five; break;
            case 6: resultForHundreds = six; break;
            case 7: resultForHundreds = seven; break;
            case 8: resultForHundreds = eight; break;
            case 9: resultForHundreds = nine; break;
        };

        let DozensOfHundreds = (Math.floor(number % 100));
        let resultForDozensOfHundreds;
        let resultForTeens;
        let teenRound = Math.floor(number % 100);
        if (teenRound < 20 && DozensOfHundreds === 1) {
            resultForTeens = one
        }
        else if (teenRound < 20 && DozensOfHundreds === 2) {
            resultForTeens = two
        }
        else if (teenRound < 20 && DozensOfHundreds === 3) {
            resultForTeens = three
        }
        else if (teenRound < 20 && DozensOfHundreds === 4) {
            resultForTeens = four
        }
        else if (teenRound < 20 && DozensOfHundreds === 5) {
            resultForTeens = five
        }
        else if (teenRound < 20 && DozensOfHundreds === 6) {
            resultForTeens = six
        }
        else if (teenRound < 20 && DozensOfHundreds === 7) {
            resultForTeens = seven
        }
        else if (teenRound < 20 && DozensOfHundreds === 8) {
            resultForTeens = eight
        }
        else if (teenRound < 20 && DozensOfHundreds === 9) {
            resultForTeens = nine
        }
        else if (teenRound < 20 && DozensOfHundreds === 10) {
            resultForTeens = ten
        }
        else if (teenRound < 20 && DozensOfHundreds === 11) {
            resultForTeens = eleven
        }
        else if (teenRound < 20 && DozensOfHundreds === 12) {
            resultForTeens = twelve
        }
        else if (teenRound < 20 && DozensOfHundreds === 13) {
            resultForTeens = thirteen
        }
        else if (teenRound < 20 && DozensOfHundreds === 14) {
            resultForTeens = fourteen
        }
        else if (teenRound < 20 && DozensOfHundreds === 15) {
            resultForTeens = fifteen
        }
        else if (teenRound < 20 && DozensOfHundreds === 16) {
            resultForTeens = sixteen
        }
        else if (teenRound < 20 && DozensOfHundreds === 17) {
            resultForTeens = seventeen
        }
        else if (teenRound < 20 && DozensOfHundreds === 18) {
            resultForTeens = eighteen
        }
        else if (teenRound < 20 && DozensOfHundreds === 19) {
            resultForTeens = ninteen
        }

        else if (teenRound > 20 ) 
            result = `${resultForHundreds} hundred ${resultForDozensOfHundreds}`;
    };



    return console.log(Math.floor(number % 100));
};

toReadable(920);


