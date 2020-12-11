/* ESTE É O ARQUIVO ONDE A APLICAÇÃO COMEÇA */

/* DIFERENTES DOS OUTROS ARQUIVOS FAZENDO REFERÊNCIA A CONFIGURAÇÃO DO SERVIDOR COM O HAPI, ESTE CODIGO É ONDE EU DEDICO A MINHA SIMPLES REST API
    AQUI EU COMEÇO A USAR UMA ORGANIZAÇÃO MVC SÓ QUE SEM OS CONTROLLERS.
*/

/*  CRUD - HAPI, MONGOOSE */
/* COM DESIGN PADRÃO MVC */

'use strict';

const Hapi = require('@hapi/hapi');
const Mongoose = require('mongoose');

const server = Hapi.Server({
    port: 3000,
    host: 'localhost'
});

Mongoose.connect("mongodb://localhost:27017/curso", { useNewUrlParser: true });

/* Routes */
const alunos = require('./src/routes/aluno');
server.route(alunos);

const init = async () => {
    await server.start();
    console.log('rodando');
}

init();

module.exports = server;