module.exports = function reverse (n) {
    let num = n;
    if (num<0) {
      num=-num;
    };
    let strNum = num.toString();
    let arrNum = strNum.split('');
    let revArrNum = arrNum.reverse();
    let revSrtNum = revArrNum.join('');
    return +revSrtNum;
}
