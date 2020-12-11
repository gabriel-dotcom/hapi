"use strict";

const Joi = require('@hapi/joi');

// BUSCANDO O SCHEMA
const alunoModel = require('../model/alunoS');

module.exports = [
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
        config: {
            validation: {
                payload: {
                    name: Joi.string().require(),
                    curso: Joi.string().required()
                }
            }
        },
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
        cofig: {
            validation: {
                payload: {
                    nome: Joi.string().required(),
                    curso: Joi.string().require()
                }
            }
        },
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
]