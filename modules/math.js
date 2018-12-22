function add(x1, x2){
    return x1 + x2;
}

function substract(x1, x2){
    return x1 - x2;
}

function multiply(x1, x2){
    return x1 * x2;
}

function divide(x1, x2){
    if (x2 ===0 ){
        showmessage("can't be divided for 0");
    }else{
        return x1 / x2;
    }
}

function showmessage(message){
    console.log(message);
}

exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;