module.exports = function(array) {
	return array.reduce((total, number) => {
		return total * number;
	}, 1)
}