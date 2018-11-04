function modifyCar(input) {
    let modifiedCar = {}
    modifiedCar.model = input.model;

    //set engine
    if (input.power <= 90) {
        modifiedCar.engine = {
            power: 90,
            volume: 1800
        }
    } else if (input.power <= 120) {
        modifiedCar.engine = {
            power: 120,
            volume: 2400
        }
    } else if (input.power <= 200) {
        modifiedCar.engine = {
            power: 200,
            volume: 3500
        }
    }

    modifiedCar.carriage = {
        type: input.carriage,
        color: input.color,
    };

    if (input.wheelsize % 2 === 0) {
        input.wheelsize -= 1;
    }

    let wheels = [];
    for (let i = 0; i < 4; i++) {
        wheels.push(input.wheelsize);
    }
    modifiedCar.wheels = wheels;
    return modifiedCar;
}

// let car = {
//     model: 'VW Golf II',
//     power: 90,
//     color: 'blue',
//     carriage: 'hatchback',
//     wheelsize: 14
// }
// console.log(modifyCar(car));
