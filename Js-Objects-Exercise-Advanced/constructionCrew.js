function costructionCrew(worker) {
    if (worker.dizziness) {
        worker.dizziness = false;
        worker.levelOfHydrated += (worker.experience * 0.1) * worker.weight;
    }
    return worker
}
console.log(costructionCrew({
    weight: 80,

    experience: 1,

    levelOfHydrated: 0,

    dizziness: true
}));