const Animal = require('../models/animal');

exports.create = async (animal) => {
    await Animal.create(animal);
}

exports.getAll = () => {
   return Animal.find({}).lean();
}

exports.getById =  (id) => {
    return Animal.findById(id).lean()
}

exports.update = async (id,animal) => {
    return await Animal.findByIdAndUpdate(id,animal,{runValidators: true});
}

exports.delete = async (id,animal) => {
    await Animal.findByIdAndDelete(id,animal);
};

exports.donate = async (animalId,userId) => {
    let animal = await Animal.findById(animalId);
    animal.donation.push(userId);
    return await animal.save();
}