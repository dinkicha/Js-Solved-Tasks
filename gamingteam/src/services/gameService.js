const Game = require('../models/game');

exports.create = async (GameData) => {
    await Game.create(GameData);
}

exports.getAll = () => {
   return Game.find({}).lean();
}

exports.getById =  (id) => {
    return Game.findById(id).lean()
}

exports.update = async (id,GameData) => {
    return await Game.findByIdAndUpdate(id,GameData);
}

exports.delete = async (id,GameData) => {
    await Game.findByIdAndDelete(id,GameData);
};

exports.buy = async (gameId,userId) => {
    let game = await Game.findById(gameId);
    game.boughtBy.push(userId);
    await game.save();
};

exports.search = async (name, platform) => {
    if (name == '' || platform == '') {
        return await Game.findById({}).lean();
    }

    return (await Game.find({platform}).lean()).filter(g => g.name.toLowerCase() == name.toLowerCase())
};