let notvalid = true;
let answer;
answer = Number (prompt('Enter valid total bill amount'));
do {
    if (answer == null || answer == 0) {
        answer = Number (prompt('Enter a valid bill amount greater than zero'));
    }
    else if (answer < 0) {
        answer = Number (prompt('Negative amounts are not allowed, enter a valid amount'));
    }
    else if (isNaN(answer)) {
        answer = Number (prompt('Input is invalid, enter a valid number'));
    }
    else {
        notvalid = false;
    }
} while (notvalid);
let tip = (answer * 0.1);
console.log(`For a bill of $${answer}, the tip should be $${tip}`);
document.write(`For a bill of $${answer}, the tip should be $${tip}`);