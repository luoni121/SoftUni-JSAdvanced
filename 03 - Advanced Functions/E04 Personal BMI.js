function solve4() {
    let [name, age, weight, height] = arguments;
    //height / 100 = height in meters
    let bmi = weight / Math.pow(height / 100, 2);

    //need to add stats to result
    let result = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: Math.round(bmi)
    }

    if (bmi < 18.5) {
        result.status = 'underweight';
    } else if (bmi < 25) {
        result.status = 'normal'
    } else if (bmi < 30) {
        result.status = 'overweight'
    } else {
        result.status = 'obese'
        result.recommendation = 'admission required'
    }

    return result;
}

// console.log(solve4('Peter', 29, 75, 182));
// console.log(solve4('Honey Boo Boo', 9, 57, 137));
