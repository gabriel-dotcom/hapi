// SCHEMA
const mongoose = require('mongoose');

const alunoModel = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    
    curso: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('aluno', alunoModel);