const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/* 
{
    "NameArabic": "ابراهيم حاقظ ابراهيم أحمد", 
    "Index": "131001", 
    "UnivNo": "15925313", 
    "Courses": ["C", "B", "C", "F", "C", "B+", "B+", "B", "F", "F", "F", "B", "B", "B"], 
    "GPA": "4.71", 
    "REC": "S4", 
    "CGPA": "N/A", 
    "Region": [48, 2856, 396, 238]}

    NameArabic: {
        type: String,
        required: true,
        //unique: true,
        //trim: true,
    },
    Index: {
        type: String,
        required: true,
    },
    UnivNo: {
        type: String,
        required: true,
    },
    Courses: {
        type: Array,
        required: true,
    },
    GPA: {
        type: String,
        required: true,
    },
    CGPA: {
        type: String,
        required: true,
    },
    REC: {
        type: String,
        required: true,
    },
    Region: {
        type: Array,
        required: true,
    }
*/
const recordSchema = new Schema({
    
    year: {
        type: String,
        required: true,
    },
    
    grade: {
        type: String,
        required: true,
    },
    
    dept: {
        type: String,
        required: true,
    },
    
    courses: {
        type: Array,
        required: true,
    },
    
    records: {
        type: Array,
        required: true,
    },
},{ collection : 'RecordsSpread' })

const Record =  mongoose.model('Record', recordSchema);

module.exports = Record;