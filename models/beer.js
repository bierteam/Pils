const mongoose = require('mongoose')

const beerSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  brand: {
    type: String,
    required: true
  },
  store: {
    type: String,
    required: true
  },
  rawStore: {
    type: String,
    required: false
  },
  pricing: {
    rawOldPrice: {
      type: String,
      required: true
    },
    rawNewPrice: {
      type: String,
      required: true
    },
    rawLiterPrice: {
      type: String,
      required: true
    },
    oldPrice: {
      type: Number,
      required: true
    },
    newPrice: {
      type: Number,
      required: true
    },
    literPrice: {
      type: Number,
      required: true
    }
  },
  volume: {
    type: String,
    required: true
  },
  rawUri: {
    type: String,
    required: false
  },
  uri: {
    type: String,
    required: false
  },
  rawValidity: {
    type: String,
    required: true
  },
  validity: {
    type: Date,
    required: false
  },
  importDate: {
    type: Date,
    required: true
  },
  batch: {
    type: Number,
    required: true
  }
})

const beer = mongoose.model('beer', beerSchema)
module.exports = beer
