/* UM PEQUENO ESTUDO SOBRE HAPI PARA TENTAR DIFENCIAR DAS OUTRAS DAS OUTRAS OPÇÕES NO MERCADO */

/* SIMPLES CONDIGO DE CONFIGURAÇÃO DO SERVIDOR */

'use strict';

/* Requisitando Hapi */
const Hapi = require('@hapi/hapi');

/* A variavel init irá receber a inicialização do server em forma de uma função assincrona */
const init = async () => {
    
    /* Instanciando a classe server com a porta e o host para a criação do server */
    const server = Hapi.Server({
        port: 3000,
        host: 'localhost'
    });

    /* Adicionando Routers */
    server.route({
        method: 'GET', /* Pode ser qualquer HTTP method valido */
        path: '/', /* O caminho que o user acessar */
        handler: (req, h) => { /* Essa função define a resposta da requisição */
            return 'Hello hapi';
        }
    });

    /* Digamos que você queremos a mesma resposta para diferentes metodos HTTP */
    server.route({
        method: ['GET', 'POST'],
        path: '/teste',
        handler: (req, h) => {
            return 'Hello teste';
        }
    });


    
    /* Iniciando o server */
    await server.start();
    /* Só dará o console.log se o server startar */
    console.log('Server running', server.info.uri);
};

/* Caso tenha erro, printe esse erro */
process.on('uncaughtException', (err) => {
    console.log(err);
    process.exit(1);
});

/* Chamando todo o processo do server */
init();