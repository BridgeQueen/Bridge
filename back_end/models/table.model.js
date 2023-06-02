const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tableSchema = new Schema({
    bids: {
        type: Array,
        required: true,
    },
    
    cards: {
        type: Array,
        required: true,
    },
    
    seats: {
        type: Array,
        required: true,
    },
},{ collection : 'tables' })

const Table =  mongoose.model('Table', tableSchema);

module.exports = Table;