export function romanToInteger(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        switch (str.charAt(i)) {
            case 'I':
                if (str.charAt(i + 1) == 'X' || str.charAt(i + 1) == 'V') {
                    result -= 1;
                } else result += 1;
                break;
            case 'V':
                result += 5;
                break;
            case 'X':
                if (str.charAt(i + 1) == 'L' || str.charAt(i + 1) == 'C') {
                    result -= 10;
                } else result += 10;
                break;
            case 'L':
                result += 50;
                break;
            case 'C':
                if (str.charAt(i + 1) == 'D' || str.charAt(i + 1) == 'M') {
                    result -= 100;
                } else result += 100;
                break;
            case 'D':
                result += 500;
                break;
            case 'M':
                result += 1000;
                break;
        }
    }
    return result;
}
