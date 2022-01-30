# Angular: Testes Unitários com Jasmine e Karma

No final do artigo anterior realizamos a execução dos testes unitários rodando com o Chrome, porém, há diversas opções para navegador diferentes para cada situação e cada um tem sua vantagem e desvantagem.

## Por que é necessário um navegador para rodar os testes?

### Setup com Chrome

Esse é o setup padrão que vem ao inicializar o projeto Angular. 

Conta com o pacote "karma-chrome-launcher" instalado nas dependências de desenvolvimento.

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

### Setup com ChromeHeadless

### Setup com PhantomJS
