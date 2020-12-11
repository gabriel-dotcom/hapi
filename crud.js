/* ESTE ARQUIVO CONTÉM ALGUMAS MUDANÇAS PRÁTICAS CONFIGURAÇÃO DO SERVIDOR PARA UM CRUD */


/*  CRUD - HAPI, MONGOOSE */

/* SEM DESIGN PADRÃO MVC */

'use strict';

const Hapi = require('@hapi/hapi');
const Mongoose = require('mongoose');

const server = Hapi.Server({
    port: 3000,
    host: 'localhost'
});

Mongoose.connect("mongodb://localhost:27017/curso", { useNewUrlParser: true });
const alunoModel = Mongoose.model('aluno', {
    name: {
        type: String,
        require: true
    },
    
    curso: {
        type: String,
        require: true
    } 
});

/* Routes */
server.route([
    {
        path: '/curso',
        method: 'GET',
        handler: async (req, h) => {
            try{
                let result = await alunoModel.find();
                return h.response(result);
            } catch (err){
                return h.response(err).code(500);
            }
        }
    }, {
        path: '/curso/{id}',
        method: 'PUT',
        handler: async (req, h) => {
            try{
                let result = await alunoModel.findById(req.params.id);
                return h.response(result);
            } catch (err){
                return h.response(err).code(500);
            }
        }
    }, {
        path: '/curso',
        method: 'POST',
        handler: async (req, h) => {
            try{
                let aluno = new alunoModel(req.payload);
                let result = await aluno.save();
                return h.response(result);
            } catch (err){
                return h.response(err).code(500);
            }
        }
    }, {
        path: '/curso/{id}',
        method: 'PATCH',
        handler: async (req, h) => {
            try{
                let result = await alunoModel.findByIdAndUpdate(req.params.id, req.payload, { new: true });
                return h.response(result);
            } catch (err){
                return h.response(result);
            }
        }
    }, {
        path: '/curso/{id}',
        method: 'DELETE',
        handler: async (req, h) => {
            try {
                let result = await alunoModel.findByIdAndDelete(req.params.id);
                return h.response(result);
            } catch (err){ 
                return h.response(result);
            }
        }
    }
]);


const init = async () => {
    await server.start();
    console.log('rodando');
}

init();