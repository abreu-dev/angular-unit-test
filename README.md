# Angular: Testes Unitários com Karma e Jasmine

## Testando um Component

Um Component irá ser uma tela, terá um arquivo typescript, html e (normalmente) css. Para prosseguir no passo-a-passo de como testa-lo, sugiro dar uma olhada no setup que foi feito do componente nesse [commit](https://github.com/abreu-dev/angular-unit-test/commit/b44e4246050dce7719366cf05196a8b1b0f539c9). A ideia é um componente que lista as frutas cadastradas em um sistema, onde as obtém por um serviço backend.

Para rodar o backend, utilize o arquivo db.json com [json-server](https://github.com/typicode/json-server).

Há duas formas de se testar um componente:
- Instanciando-o diretamente, como um service, onde só será possível testar o código typescript.
- Instanciando o modulo, dessa forma é possível testar tanto a parte typescript quanto html e css.

Abaixo irei demonstrar como testar das duas formas.

### Testando utilizando instância direta

Com o arquivo .spec.ts criado, iremos realizar o setup necessário para instanciar a classe FruitListComponent. Vamos precisar criar um 'mock' da classe FruitService que o componente recebe como parâmetro para instancia-lo

![image](https://user-images.githubusercontent.com/73451858/153770682-bb907087-5ef4-4a27-95c3-738714f11877.png)

Feito isso, podemos criar os primeiros testes unitários sobre o componente.

![image](https://user-images.githubusercontent.com/73451858/153770669-ad8d3ecc-5fd7-4024-b175-9cceae8eeaa7.png)

Pode-se notar que no teste unitário do método 'ngOnInit', realizamos o spyOn de um método do próprio componente com um callFake, pois como o método apenas executa outro, só precisamos validar se ele está sendo chamado, não nos importa o que ele irá fazer lá.

Por último, o teste sobre o método 'loadFruits'. Aqui vamos criar algumas frutas para o getAll da service retornar e validar se nosso componente realizou a chamada e as guardou na propriedade 'fruits'.

![image](https://user-images.githubusercontent.com/73451858/153770884-b454263d-3d9a-46b1-93fe-78e6cb59ecd8.png)

Nosso componente está 100% testado!

![image](https://user-images.githubusercontent.com/73451858/153770970-786fb2af-6e48-4414-a463-c47133c74d11.png)

Beneficios:
- Consegue testar componente;
- Execução mais rápida, visto que o setup do teste é somente inicializar o componente passando como parâmetro objetos fake com jasmine;
- Mais prático de mockar o retorno de um método;

Maleficios:
- Não consegue testar interface;

### Testando utilizando TestBed

Com o arquivo .spec.ts criado, iremos realizar o setup necessário para testar a classe FruitListComponent. Aqui, não será criado um 'mock' para suas injeções de dependência, iremos usar a classe real mesmo. 

![image](https://user-images.githubusercontent.com/73451858/153771208-8e3b555d-4bb1-45b1-8ca7-82c7c0eda721.png)

Diferente de instânciar diretamente, aqui temos o TestBed, ele será responsável por criar um ambiente de teste para rodar o componente como se estivesse rodando a aplicação normalmente, logo, precisará de todos os imports, declarations e providers.

Outro ponto importante é a Fixture, ela será nosso objeto que terá acesso total ao componente e a sua interface, podendo chamar métodos do componente e validar atributos do HTML.

Vamos recriar os testes unitários feitos anteriormente sobre o 'ngOnInit' e 'loadFruits'.

![image](https://user-images.githubusercontent.com/73451858/153771354-0e645407-69ef-46a9-95d4-2d445809f8d4.png)

A única diferença fica no mock do retorno do FruitService, aqui precisamos criar o spyOn em cima do método que queremos mockar. Agora, vamos criar alguns testes sobre o HTML do componente.

![image](https://user-images.githubusercontent.com/73451858/153772097-3febd5ea-9d86-4a2a-a588-2b12ce43b167.png)

O primeiro teste basicamente faz uma busca no HTML por uma propriedade que esteja usando o id 'title' e depois valida o valor dele.

O segundo teste é a mesma ideia, buscamos no HTML pela table usando o id, validamos o cabeçalho e se existem três linhas no corpo da tabela (que são referentes as três frutas que adicionamos na lista). Ponto importante, quando inicializamos o componente ele não tinha nenhuma fruta, logo a tabela estava vazia, apenas cabeçalho, então, nesse teste adicionamos três frutas (maça, uva e banana), porém, o HTML não identifica essa alteração de forma automatica, por isso precisamos realizar a chamada 'fixture.detectChanges()' para que a tabela seja redesenhada agora com essas três frutas.

Nosso componente está 100% testado!

![image](https://user-images.githubusercontent.com/73451858/153772313-dfc0af4d-ef93-4608-9d16-1c93410c4823.png)

Beneficios:
- Consegue testar componente;
- Consegue testar interface;

Maleficios:
- Execução mais lenta, visto que o setup do teste é necessário inicializar todos os modulos/providers/declarations para funcionar;
- Para mockar o retorno de um metódo é necessário ficar criando o spyOn;
- Como está testando interface, pode ser que esteja saindo da ideia de teste unitário e indo para teste funcional, que normalmente é feito utilizando outra biblioteca de teste, como o protactor, cypress, etc.

