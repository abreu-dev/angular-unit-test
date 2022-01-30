# Angular: Testes Unitários com Karma e Jasmine

Em um projeto recém criado do Angular, temos algumas configurações padrões para o funcionamento dos testes unitários, tais como arquivos que devem ser considerados para testes, relatórios e navegadores.

## O que é Jasmine e Karma?

Jasmine é o framework que vamos usar para escrever os testes unitários, ele contém diversas funcionalidades para escrevermos os testes, já o Karma é quem de fato roda os testes unitários a partir de algumas configurações.

## Arquivo Karma.config.js

Vamos analisar o arquivo de configuração do Karma.

![image](https://user-images.githubusercontent.com/73451858/151667459-022894fc-948c-4301-ac15-9743fb9e680f.png)

Maior parte das configurações podem ser compreendidas com facilidade, vamos focar nas mais importantes:

- basePath: caminho base que será usado para referência sobre os arquivos do projeto.
- frameworks: lista dos frameworks que iremos utilizar, por padrão é o Jasmine.
- reporters: relatórios que o karma irá gerar com os testes unitários.
- port: porta que irá rodar o servidor.
- colors: habilita/desabilita as cores no output dos testes nos relatórios/logs.
- logLevel: nivel de log que o terminal deve apresentar, podendo ser config.LOG_DISABLE, config.LOG_ERROR, config.LOG_WARN, config.LOG_INFO ou config.LOG_DEBUG.
- autoWatch: habilita/desabilita que os testes rodem novamente caso tenham alterações.
- browsers: navegador que o teste será rodado, por padrão é o Chrome.

## Arquivo Tests.ts

Esse é o arquivo de entrada dos testes da aplicação.

![image](https://user-images.githubusercontent.com/73451858/151667484-8c40d042-2f56-48d3-85de-a2bbc8e8e4bf.png)

Dificilmente vamos alterar alguma configuração deste arquivo, então o que importa saber é que aqui é inicializado o ambiente dos testes e configurado quais arquivos são considerados como teste unitário (por padrão são todos os arquivos que terminam com "spec.ts").

## Rodando o primeiro teste unitário da aplicação

Para passar uma ideia inicial de como os testes são rodados, vamos utilizar o teste padrão que vem ao gerar o projeto angular.

![image](https://user-images.githubusercontent.com/73451858/151667084-c729d97f-b8c3-4481-96aa-98034c82533a.png)

Vamos analisar alguns pontos importantes:

- describe: a descrição do teste que está sendo realizado, normalmente o nome do componente.
- beforeEach: essa função irá rodar antes de cada teste unitário, nela temos o setup do componente, podendo criar variáveis e instanciar classes.
- TestBed: é uma ferramenta muito importante para os testes, com ela configuramos o módulo de teste (quais imports/declarations/providers precisamos ter para testar o componente), obtemos o componente que queremos testar, dentre outros pontos que iremos ver mais para frente.
- it: é o teste unitário, nele teremos a declaração do título do teste e seu arrange/act/assert.
- expect: é o assert do teste, devemos ter pelo menos um em cada teste.

Para rodar os testes unitários com essa configuração padrão é necessário ter o Chrome instalado. Caso você não tenha e não queria instalar, no próximo artigo vou demonstrar como configurar outras opções de navegador.

Abra o terminal e execute "ng test". O output será mais ou menos esse:

![image](https://user-images.githubusercontent.com/73451858/151676291-88ce683e-3efa-45fb-9b90-4c60517776da.png)

![image](https://user-images.githubusercontent.com/73451858/151676302-f93e06df-9de4-401f-a428-3e99b35cada8.png)



