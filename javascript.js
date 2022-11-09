const add = function(nb1, nb2) {
	return nb1 + nb2;
};

const subtract = function(nb1, nb2) {
    return nb1 - nb2;
};

const multiply = function(nb1, nb2) {
    return nb1 * nb2;
};

const divide = function(nb1, nb2) {
    return nb1 / nb2
}

const operate = function (operator, nb1, nb2) {
    if (operator === '+') return add(nb1, nb2);
    else if(operator === '-') return subtract(nb1, nb2);
    else if(operator === "*") return multiply(nb1, nb2);
    else if(operator === "/") return divide(nb1, nb2);
}

console.log(operate('*',7, 6));

for(i = 0; i < 9; i++) {
    const button = document.createElement('button');
    document.body.append(button);
    button.textContent = "button";
}