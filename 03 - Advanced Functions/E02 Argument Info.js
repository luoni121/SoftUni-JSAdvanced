function solve2() {
    let map = new Map();

    for (const argument of arguments) {
        let type = typeof argument;

        if (map.has(type) === false) {
            map.set(type, 0);
        }
        let oldCount = map.get(type);
        map.set(type, oldCount + 1);
        console.log(`${type}: ${argument}`)
    }

    [...map]
        .sort((a, b) => b[1] - a[1])
        .forEach(e => {
            console.log(`${e[0]} = ${e[1]}`)
        });
}

// solve2('cat', 42, function () { console.log('Hello world!'); });
