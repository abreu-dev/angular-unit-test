# Angular: Testes Unitários com Karma e Jasmine

## Testando um Component

Um Component irá ser uma tela, terá um arquivo typescript, html e (normalmente) css. Para prosseguir no passo-a-passo de como testa-lo, sugiro dar uma olhada no setup que foi feito do componente nesse [commit](https://github.com/abreu-dev/angular-unit-test/commit/b44e4246050dce7719366cf05196a8b1b0f539c9). A ideia é um componente que lista as frutas cadastradas em um sistema, onde as obtém por um serviço backend.

Para rodar o backend, utilize o arquivo db.json com [json-server](https://github.com/typicode/json-server).

Há duas formas de se testar um componente:
- Instanciando-o diretamente, como um service, onde só será possível testar o código typescript.
- Instanciando o modulo, dessa forma é possível testar tanto a parte typescript quanto html e css.

Abaixo irei demonstrar como testar das duas formas.

### Testando apenas o código typescript.

Com o arquivo .spec.ts criado, iremos realizar o setup necessário para instanciar a classe FruitListComponent. Vamos precisar criar um 'mock' da classe FruitService que o componente recebe como parâmetro para instancia-lo

![image](https://user-images.githubusercontent.com/73451858/153770682-bb907087-5ef4-4a27-95c3-738714f11877.png)

Feito isso, podemos criar os primeiros testes unitários sobre o componente.

![image](https://user-images.githubusercontent.com/73451858/153770669-ad8d3ecc-5fd7-4024-b175-9cceae8eeaa7.png)

Pode-se notar que no teste unitário do método 'ngOnInit', realizamos o spyOn de um método do próprio componente com um callFake, pois como o método apenas executa outro, só precisamos validar se ele está sendo chamado, não nos importa o que ele irá fazer lá.

Por último, o teste sobre o método 'loadFruits'. Aqui vamos criar algumas frutas para o getAll da service retornar e validar se nosso componente realizou a chamada e as guardou na propriedade 'fruits'.

![image](https://user-images.githubusercontent.com/73451858/153770884-b454263d-3d9a-46b1-93fe-78e6cb59ecd8.png)

