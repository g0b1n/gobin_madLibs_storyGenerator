function addCommas(num) {
    num = num.toString();
    let numPattern = /(-?\d+)(\d{3})/;
    while (numPattern.test(num))
        num = num.replace(numPattern, "$1, $2");
    return num
}

console.log(addCommas(123456789));

module.exports = addCommas;