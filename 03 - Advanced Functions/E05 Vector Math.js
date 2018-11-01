let solution = (function () {

    function add(v1, v2) {
        return [v1[0] + v2[0], v1[1] + v2[1]];
    }
    function multiply(v1, scalar) {
        return [v1[0] * scalar, v1[1] * scalar];
    }
    function length(v1) {
        return Math.sqrt(v1[0] * v1[0] + v1[1] * v1[1]);
    }
    function dot(v1, v2) {
        return v1[0] * v2[0] + v1[1] * v2[1];
    }
    function cross(v1, v2) {
        return v1[0] * v2[1] - v1[1] * v2[0];
    }

    return {
        add:add,
            multiply:multiply,
        length:length,
            dot:dot,
        cross:cross
    }
})();

// console.log(solution.add([1, 1], [1, 0]));
// console.log(solution.multiply([3.5, -2], 2));
// console.log(solution.length([3, -4]));
// console.log(solution.dot([1, 0], [0, -1]));
// console.log(solution.cross([3, 7], [1, 0]));
