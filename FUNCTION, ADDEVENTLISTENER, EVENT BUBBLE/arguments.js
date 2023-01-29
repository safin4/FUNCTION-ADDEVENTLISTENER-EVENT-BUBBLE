function addNumbers(num1, num2) {
    var sum =0;
    for(let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
    }

    function logInfo(message) {
        console.log(message);
    }
    logInfo("Good morning");

    var double = sum * 2;
    console.log("double", double);

    return sum; 
}

var result = addNumbers(5, 7, 15, 29);
console.log(result);