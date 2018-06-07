module.exports = function(array) {

    if (array.length % 2 !== 0) return Error("Odd array length");

    return array.reduce((result, number, i) => {
        if (i === 0) return [array[0] + array[1]]
        if (i === 1) return result;
        if (i % 2 === 0) {
            return [...result, array[i] + array[i+1]]
        }
        return result;
    }, [])
}