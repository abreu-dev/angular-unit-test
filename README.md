# Angular: Testes Unitários com Jasmine e Karma

No final do artigo anterior realizamos a execução dos testes unitários rodando com o Chrome, porém, há diversas opções para navegador diferentes para cada situação e cada um tem sua vantagem e desvantagem.

## Por que é necessário um navegador para rodar os testes?

### Setup com Chrome

Esse é o setup padrão que vem ao inicializar o projeto Angular. 

Conta com o pacote "karma-chrome-launcher" instalado nas dependências de desenvolvimento.
NPM: https://www.npmjs.com/package/karma-chrome-launcher

![image](https://user-images.githubusercontent.com/73451858/151708299-826d8ceb-8493-42bd-b7c8-46932ecd964b.png)

Nas configurações do Karma solicitado como plugin e browser.

![image](https://user-images.githubusercontent.com/73451858/151708345-733a4dfb-1662-4d61-9d0d-13e5159e8def.png)

### Setup com Opera

Necessário instalar o pacote "karma-opera-launcher" como dependência de desenvolvimento.
NPM: https://www.npmjs.com/package/karma-opera-launcher

![image](https://user-images.githubusercontent.com/73451858/151708554-abfefa4c-12db-41ea-ad06-dd922bf24c2d.png)

Realizar configuração no Karma. 

![image](https://user-images.githubusercontent.com/73451858/151708586-e883793b-30fc-4323-8956-98fc60b031a2.png)

### Setup com Firefox

Necessário instalar o pacote "karma-firefox-launcher" como dependência de desenvolvimento.
NPM: https://www.npmjs.com/package/karma-firefox-launcher

![image](https://user-images.githubusercontent.com/73451858/151708654-11d44b9b-c40e-4375-bfd5-c951960250e7.png)

Realizar configuração no Karma.

![image](https://user-images.githubusercontent.com/73451858/151708705-0e357b09-681c-4685-a18f-59ca59f6f9ed.png)

### Setup com Microsoft Edge

Necessário instalar o pacote "karma-edge-launcher" como dependência de desenvolvimento.
NPM: https://www.npmjs.com/package/karma-edge-launcher

![image](https://user-images.githubusercontent.com/73451858/151708762-dedb5b36-3969-46e6-8475-cc004c323c68.png)

Realizar configuração no Karma.

![image](https://user-images.githubusercontent.com/73451858/151708784-60fa2a7c-948c-4f3d-8a0b-e65e86058786.png)

### Setup com ChromeHeadless com Chrome instalado

A ideia desse setup é caso você não queira abrir em um navegador, apenas rodar os testes pelo terminal.
Por mais que vá rodar somente no terminal, ainda é necessário ter o navegador instalado. Portanto, siga o passo-a-passo anterior do "Setup com Chrome" e apenas troque o browser do Karma para "ChromeHeadless".

![image](https://user-images.githubusercontent.com/73451858/151709083-2b65f37c-fc1e-433e-bb7c-3f6633cb3687.png)

### Setup com ChromeHeadless sem Chrome instalado

Caso você queria rodar com ChromeHeadless, mas não deseja instalar o navegador ou vá rodar por meio de uma Pipeline, precisamos configurar um outro pacote chamado "Puppeteer".

Necessário ter instalado os pacotes "karma-chrome-launcher" e "puppeter" como dependência de desenvolvimento.
NPM Puppeter: https://www.npmjs.com/package/puppeteer

![image](https://user-images.githubusercontent.com/73451858/151709245-9a642ce6-4b25-474c-afe0-9268bbb776e6.png)

Realizar configuração no Karma.

![image](https://user-images.githubusercontent.com/73451858/151709285-3615e15c-5e18-441b-96b7-cad6da26df03.png)

Pessoalmente esse é o setup que mais utilizado, visto que roda normalmente em Pipelines e em qualquer computador independemente do navegador que use.
