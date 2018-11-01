function solution(input) {

    let ingredients = {
        protein: 0, carbohydrate: 0, fat: 0, flavour: 0
    }

    let meals = {
        apple: { protein: 0, carbohydrate: 1, fat: 0, flavour: 2 },
        coke: { protein: 0, carbohydrate: 10, fat: 0, flavour: 20 },
        burger: { protein: 0, carbohydrate: 5, fat: 7, flavour: 3 },
        omelet: { protein: 5, carbohydrate: 0, fat: 1, flavour: 1 },
        cheverme: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    let commands = {
        restock: (product, quantity) => {
            ingredients[product] += +quantity;
            return 'Success';
        },
        prepare: (meal, quantity) => {

            if (ingredients.protein < meals[meal].protein * quantity) {
                return 'Error: not enough protein in stock';
            }

            else if (ingredients.carbohydrate < meals[meal].carbohydrate * quantity) {
                return 'Error: not enough carbohydrate in stock';
            }

            else if (ingredients.fat < meals[meal].fat * quantity) {
                return 'Error: not enough fat in stock';
            }

            else if (ingredients.flavour < meals[meal].flavour * quantity) {
                return 'Error: not enough flavour in stock';
            }
            else {
                let needed = meals[meal];
                for (let [key, value] of Object.entries(needed)) {
                    ingredients[key] -= value * quantity;
                }
                return 'Success';
            }
        },
        report: () => {
            return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} ` +
                `fat=${ingredients.fat} flavour=${ingredients.flavour}`
        }
    }

    return function preapre(input) {
        input = input.split(' ');
        token = input.shift();
        switch (token) {
            case 'report':
                return commands[token]();
            case 'restock':
            case 'prepare':
                return commands[token](input.shift(), input.shift());
        }
    }
}

// let manager = solution();
// console.log(manager("restock flavour 50")); // Success
// console.log(manager("prepare coke 4"));

// console.log(manager('restock carbohydrate 10'));
// console.log(manager('restock flavour 10'));
// console.log(manager('prepare apple 1'));
// console.log(manager('restock fat 10'));
// console.log(manager('prepare burger 1'));
// console.log(manager('report'));
