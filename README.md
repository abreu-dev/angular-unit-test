# Angular: Testes Unitários com Karma e Jasmine

No artigo anterior vimos como realizar configurações para rodar os testes unitários em diversos navegadores, dessa vez vamos descobrir como configurar a geração de relatórios dos testes unitários em alguns formatos.

## O que é o relatório e para que eu preciso?

Os relatórios dos testes unitários são muito úteis para você visualizar várias informações:
- Quanto da sua aplicação está coberta.
- O que está coberto e o que falta cobrir.
- Testes que estão passando e falhando.

Por padrão a aplicação vem com dois relatórios, são eles "progress" e "kjhtml". 

![image](https://user-images.githubusercontent.com/73451858/151710163-ab787ac8-61ff-4d6c-abfb-6d6a65f409e2.png)

- "progress" é o que aparece no terminal quando você roda os testes e diz quanto tempo levou e quantos deram certo/errado.

![image](https://user-images.githubusercontent.com/73451858/151710125-9775e294-73d4-4ec4-a57e-24d6cb30b49d.png)

- "kjhtml" ou "karma-jasmine-html-reporter" é quando você abre o navegador na porta que está rodando os testes e aparece a seguinte tela.
> Você pode ver mais detalhes sobre o pacote [aqui](https://www.npmjs.com/package/karma-jasmine-html-reporter).

![image](https://user-images.githubusercontent.com/73451858/151710021-85b8aa8b-97b6-4d9d-9651-7061150f7510.png)

### Relatório de cobertura de código

Também temos outro tipo de relatório que vem configurado por padrão, o relatório de cobertura de código que vem com o pacote "karma-coverage". 
> Você pode ver mais detalhes sobre o pacote [aqui](https://www.npmjs.com/package/karma-coverage).

![image](https://user-images.githubusercontent.com/73451858/151711004-8e1e10ef-88cb-4fda-97f8-1b8091cf9ad8.png)

Temos algumas configurações para gerar esse relatório de cobertura em "coverageReporter".
- dir: pasta onde serão criados todos os arquivos de cobertura de código, a partir da raiz.
- subir: caso queria configurar uma pasta dentro da pasta principal.
- reporters: formatos de relatórios de serão criados, também é possível definir uma subdir para cada relatório. Temos as seguintes opções:
  - "html": opção padrão, gera o index.html com as informações sobre cobertura.
  - "lcov": gera tanto o html quanto o lcov que é um arquivo utilizado por ferramentas de análise de cobertura, como o Sonarqube.
  - "lcovonly": gera apenas o arquivo lcov.
  - "text": não gera um arquivo, aparece informação de cobertura de cada arquivo direto no terminal.
  - "text-summary": não gera um arquivo, apenas aparece um resumo sobre cobertura no terminal.
  - "cobertura": relatório em xml suportado pelo Jenkins.

Para gerar esse relatório precisamos rodar os testes adicionando o argumento para coletar cobertura "ng test --code-coverage true". Assim será criada uma pasta chamada "coverage" na raiz do projeto, nela teremos todas as informações sobre cobertura de código, basta abrir o arquivo "index.html" para visualizar.

![image](https://user-images.githubusercontent.com/73451858/151710901-9e2d2c6f-e2a6-4406-8637-d0d906ebd29d.png)

![image](https://user-images.githubusercontent.com/73451858/151710857-b22477dd-2001-4de2-9d9b-48208a42664d.png)
