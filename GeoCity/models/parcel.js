const mongoose = require ('mongoose');
const { Schema } = mongoose;

const parcelSchema = new Schema({
    owner: String,
    location: {
        type: String,
        coordinates: Number[],
    },
    SN: String,
    landuse: String,
    status: Boolean,
    area: Number,
    floors: Number,
    district: String,
    type: String
})