export default {
  symbol: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  close: {
    type: Number,
    required: true
  },
  volume: Number,
  transaction_count: Number,
  transaction_amount: Number,
  maximum: Number,
  minimum: Number,
  previous_close: Number
};
