const Hotel = require("../models/hotel");

exports.getAll = () => {
    return Hotel.find({}).lean();
};

exports.getById = (id) => {
    return Hotel.findById(id).lean();
};

exports.getByUserBooking = async(userId) => {
  return (await Hotel.find({ bookings: userId}).lean()).map(h => h.name);
}

exports.create = async (hotel) => {
  return await Hotel.create(hotel);
};

exports.update = async(id, hotel) => {
  const existing = await Hotel.findById(id);

  existing.name = hotel.name;
  existing.city = hotel.city;
  existing.imageUrl = hotel.imageUrl;
  existing.rooms = hotel.rooms;

  await existing.save();
};

exports.deleteById = async (id) => {
  await Hotel.findByIdAndDelete(id);
  
};

exports.bookRoom = async(hotelId, userId) => {
  const hotel = await Hotel.findById(hotelId);

  if (hotel.bookings.includes(userId)) {
    throw new Error('Cannot book twice');
  }
  hotel.bookings.push(userId);
  await hotel.save();
};