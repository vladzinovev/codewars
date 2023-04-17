//сумма двух маленьких чисел

function compareNumbers(a, b) {
    return a - b;
}
function sumTwoSmallestNumbers(numbers) {  
    numbers.sort(compareNumbers);
    return numbers[0]+numbers[1]
}