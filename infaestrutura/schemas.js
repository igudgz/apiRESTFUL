const moment = require("moment");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  customer: String,
  pet: String,
  service: String,
  status: String,
  date: { type: Date },
  create_date: {
    type: Date,
    default: Date.now,
  },
  obs: String,
});

module.exports = { serviceSchema: serviceSchema };
