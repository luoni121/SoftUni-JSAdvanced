function workerCrew(worker) {
    if(worker.hasOwnProperty('handsShaking') && worker.handsShaking){
        let alcoholNeeded = 0.1*(worker.weight)*(worker.experience);
   
        if(worker.bloodAlcoholLevel < alcoholNeeded){
        worker.bloodAlcoholLevel += alcoholNeeded;
        worker.handsShaking = false;
        }
    }
        return worker;
}

// worker = {
//     weight: 80,
//     experience: 1,
//     bloodAlcoholLevel: 0,
//     handsShaking: true
// }

// console.log(workerCrew(worker));
