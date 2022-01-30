# Angular: Testes Unitários com Karma e Jasmine

No artigo anterior vimos como realizar configurações para rodar os testes unitários em diversos navegadores, dessa vez vamos descobrir como configurar a geração de relatórios dos testes unitários em alguns formatos.

## O que é o relatório e para que eu preciso?

Os relatórios dos testes unitários são muito úteis para você visualizar várias informações:
- Quanto da sua aplicação está coberta
- O que está coberto e o que falta cobrir
- Testes que estão passando e falhando

Por padrão a aplicação vem com dois relatórios, são eles "progress" e "kjhtml". 

![image](https://user-images.githubusercontent.com/73451858/151710163-ab787ac8-61ff-4d6c-abfb-6d6a65f409e2.png)

- "progress" é o que aparece no terminal quando você roda os testes e diz quanto tempo levou e quantos deram certo/errado.

![image](https://user-images.githubusercontent.com/73451858/151710125-9775e294-73d4-4ec4-a57e-24d6cb30b49d.png)

- "kjhtml" ou "karma-jasmine-html-reporter" é quando você abre o navegador na porta que está rodando os testes e aparece a seguinte tela.
> Você pode ver mais detalhes sobre o pacote [aqui](https://www.npmjs.com/package/karma-jasmine-html-reporter).

![image](https://user-images.githubusercontent.com/73451858/151710021-85b8aa8b-97b6-4d9d-9651-7061150f7510.png)

Também temos outro tipo de relatório que vem configurado por padrão, o relatório de cobertura de código que vem com o pacote "karma-coverage". 
> Você pode ver mais detalhes sobre o pacote [aqui](https://www.npmjs.com/package/karma-coverage).

Para gerar esse relatório precisamos apenas adicionar ele a lista de relatórios.

![image](https://user-images.githubusercontent.com/73451858/151710270-e62e53e3-ec5c-411b-85c3-b53b53d9ae3c.png)

Ao rodar os testes unitários será criada uma pasta chamada "coverage" na raiz do projeto, nela teremos todas as informações sobre cobertura de código, basta abrir o arquivo "index.html" para visualizar.

![image](https://user-images.githubusercontent.com/73451858/151710308-1f42ac5b-9eba-4f91-83f1-82aaef51e157.png)

### Setup relatório HTML

### Setup relatório JSON

### Setup relatório LCOV
