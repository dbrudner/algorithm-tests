module.exports = function(string) {
    const split = string.split("");

    const res = split.map(letter => {
        if ((/[A-Z]/).test(letter)) {
            return letter.toLowerCase()
        } else if ((/[a-z]/).test(letter)) {
            return letter.toUpperCase()
        }
        else {
            return letter
        }
    })

    return res.join("");
}