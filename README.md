# Angular: Testes Unitários com Jasmine e Karma

Em um projeto recém criado do Angular, temos algumas configurações padrões para o funcionamento dos testes unitários, tais como arquivos que devem ser considerados para testes, relatórios e navegadores.

## O que é Jasmine e Karma?

Jasmine é o framework que vamos usar para escrever os testes unitários, ele contém diversas funcionalidades para escrevermos os testes, já o Karma é quem de fato roda os testes unitários a partir de algumas configurações.

## Arquivo Karma.config.js

Vamos analisar o arquivo de configuração do Karma.

![image](https://user-images.githubusercontent.com/73451858/151666406-ebfd671e-7876-41e6-a76a-36c7b2fb94da.png)

Maior parte das configurações podem ser compreendidas com facilidade, vamos focar nas mais importantes:

- basePath: caminho base que será usado para referência sobre os arquivos do projeto
- frameworks: lista dos frameworks que iremos utilizar, por padrão é o Jasmine
- reporters: relatórios que o karma irá gerar com os testes unitários
- port: porta que irá rodar o servidor
- colors: habilita/desabilita as cores no output dos testes nos relatórios/logs
- logLevel: nivel de log que o console deve apresentar, podendo ser config.LOG_DISABLE, config.LOG_ERROR, config.LOG_WARN, config.LOG_INFO ou config.LOG_DEBUG
- autoWatch: habilita/desabilita que os testes rodem novamente caso tenham alterações
- browsers: navegador que o teste será rodado, por padrão é o Chrome

## Arquivo Tests.ts

Esse é o arquivo de entrada dos testes da aplicação.

![image](https://user-images.githubusercontent.com/73451858/151666813-5231f0c8-8dfe-47ea-af08-6277efc54c32.png)

Dificilmente vamos alterar alguma configuração deste arquivo, então o que importa saber é que aqui é inicializado o ambiente dos testes e configurado quais arquivos são considerados como teste unitário (por padrão são todos os arquivos que terminam com "spec.ts").
