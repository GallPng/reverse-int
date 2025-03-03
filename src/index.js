module.exports = function reverse(n) {
    let str = n.toString();
    if (str[0] !== "-") {
        let strToM = str.split("");
        return +strToM.reverse().join("");
    } else if (str[0] === "-") {
        let strToM = str.split("");
        let strToMa = strToM.reverse().join("");
        return +strToMa.slice(0, -1);
    }
};
