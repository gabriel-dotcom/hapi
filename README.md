
# COMO TUDO ACONTECEU

Quando começei meus estudos em App REST com Node.js, eu me deparei com o Express e em seguida observei discurssões em blogs sobre a diferença entre essas duas ferramentas para App Web.
Então querendo saber o que acontece debaixo dos panos eu iniciei meus estudos no HAPI com base na documentação e não em tutoriais mastigados.

# HAPI 
HAPI é um Framework desenvolvido pela equipe de devs do Walmart, tendo como focu uma aplicação corporativa com muitos desenvolvedores. HAPI tem um código bastante enxuto por trabalhar com a organização Chave-Valor.

# CARACTERÍSTICAS 
Como disse acima, o HAPI trabalha com Chave-Valor, principalmente em suas rotas. Ao meu ver a declaração das rotas tem uma organização e especificação muito compreensível e de fácil leitura.

Essas características foram levantadas com essa pequena aplicação de CRUD com Mongoose a qual eu não usei todo o poder do HAPI, foi um pequeno projeto para ver como funciona na prática.

# ROUTES
Como HAPI escolhes um caminho? Todas as rotas que você adiciona usando server.route() são adicionadas internamente a algo chamado de tabela de roteamento. Cada conexão de servidor possui sua própria cópia da tabela de roteamento.
A possibilidade de definir em uma rota a mesma resposta para diferentes métodos HTTP me encantou.

# Markdown
```
server.route({
			method: ['GET', 'POST'],
			path: '/',
    			handler: function (request, h) {
				return 'I did something!';
    			}
		})
```   
Podemos também nomear um parâmetro em um caminho

# COMO USAR
# Markdown
```
npm install
npm start

http://localhost:3000
```  

#### FIM
Esse pequeno artigo foi um estudo de uma semana frustrante por conseguir pensar em nada para sair do cotidiano. O artigo não contém todas as funcionalidades do HAPI mas tem a minha visão depois de um estudo da documentação e não de tutoriais já prontos
