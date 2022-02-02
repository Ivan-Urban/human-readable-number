module.exports = function toReadable (number) {
    let strNumber = '';
    const hundreds = Math.trunc(number/100);
    const dozens = Math.trunc((number - hundreds*100) / 10);
    const units = number - hundreds*100 - dozens*10;
    switch(hundreds) {
        case 0:
            break;
        case 1:
            strNumber += 'one hundred';
            break;
        case 2:
            strNumber += 'two hundred';
            break;
        case 3:
            strNumber += 'three hundred';
            break;
        case 4:
            strNumber += 'four hundred';
            break;
        case 5:
            strNumber += 'five hundred';
            break;
        case 6:
            strNumber += 'six hundred';
            break;
        case 7:
            strNumber += 'seven hundred';
            break;
        case 8:
            strNumber += 'eight hundred';
            break;
        case 9:
            strNumber += 'nine hundred';
            break;    
    }

    if (dozens != 0 && hundreds != 0) {
        strNumber += ' ';
    }

    switch(dozens) {
        case 0:
            break;

        case 1:
            switch(units) {
                case 0:
                    strNumber += 'ten';
                    break;
                case 1:
                    strNumber += 'eleven';
                    break;
                case 2:
                    strNumber += 'twelve';
                    break;
                case 3:
                    strNumber += 'thirteen';
                    break;
                case 4:
                    strNumber += 'fourteen';
                    break;
                case 5:
                    strNumber += 'fifteen';
                    break;
                case 6:
                    strNumber += 'sixteen';
                    break;
                case 7:
                    strNumber += 'seventeen';
                    break;
                case 8:
                    strNumber += 'eighteen';
                    break;
                case 9:
                    strNumber += 'nineteen';
                    break;    
            }
            break;

        case 2:
            strNumber += 'twenty';
            break;
        case 3:
            strNumber += 'thirty';
            break;
        case 4:
            strNumber += 'forty';
            break;
        case 5:
            strNumber += 'fifty';
            break;
        case 6:
            strNumber += 'sixty';
            break;
        case 7:
            strNumber += 'seventy';
            break;
        case 8:
            strNumber += 'eighty';
            break;
        case 9:
            strNumber += 'ninety';
            break;    
    }

    if (((hundreds != 0 || dozens != 0) && units != 0) && dozens != 1) {
        strNumber += ' ';
    }

    if (dozens != 1) {
        switch(units) {    
            case 1:
                strNumber += 'one';
                break;    
            case 2:
                strNumber += 'two';
                break;
            case 3:
                strNumber += 'three';
                break;
            case 4:
                strNumber += 'four';
                break;
            case 5:
                strNumber += 'five';
                break;
            case 6:
                strNumber += 'six';
                break;
            case 7:
                strNumber += 'seven';
                break;
            case 8:
                strNumber += 'eight';
                break;
            case 9:
                strNumber += 'nine';
                break;
            default:
                break;            
        }    
    }

    if (hundreds == 0 && dozens == 0 && units == 0){
        strNumber += 'zero';
    }
        
    return strNumber;    
};

console.log(module.exports(552));
