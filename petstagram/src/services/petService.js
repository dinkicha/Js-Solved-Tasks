const Photo = require('../models/Photo');

exports.create = async (PhotoData) => {
    await Photo.create(PhotoData);
}

exports.getAll = () => {
   return Photo.find({}).lean();
}

exports.getById =  (id) => {
    return Photo.findById(id).lean()
}

exports.update = async (id,PhotoData) => {
    return await Photo.findByIdAndUpdate(id,PhotoData);
}

exports.delete = async (id,PhotoData) => {
    await Photo.findByIdAndDelete(id,PhotoData);
};

exports.comment = async (photoid,userId,comment) => {
    let photo = await Photo.findById(photoid);
    let commentData = {userId, comment};
    photo.commentList.push(commentData);
    await photo.save();
};

exports.getPostComments = async (id) => {
    return await Photo.findById(id).lean().populate('commentList.userId').populate('owner');
};

exports.getUserPosts = async (id) => {
     return await Photo.find({owner: id}).lean();
};