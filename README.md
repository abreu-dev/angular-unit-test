# Angular: Testes Unitários com Karma e Jasmine

## Testando uma Service

Uma classe Service é a que irá realizar o envio de requisições a um servidor backend. Vamos realizar a criação de uma tela onde será feito gerenciamento de frutas, então primeiramente vamos criar a Service com os endpoints mais comuns.

Antes disso, necessário criar a model.

![image](https://user-images.githubusercontent.com/73451858/153768004-c3bcd5ab-68ae-4f33-8a6c-5cbbea6accd3.png)

Adicione a propriedade 'apiUrl' aos arquivos environment.

![image](https://user-images.githubusercontent.com/73451858/153768011-a3e3fb6e-259c-46af-8cab-51e6df6f92be.png)

![image](https://user-images.githubusercontent.com/73451858/153768018-8f93389f-24ae-4e61-8e40-256cd01bc6bf.png)

Criar a classe Service.

![image](https://user-images.githubusercontent.com/73451858/153768932-3508d4fd-40cd-4ae6-bc2b-8958b703b582.png)

Para realizar a criação dos testes unitários dessa classe, vamos inicializar o arquivo .spec.ts vazio.

![image](https://user-images.githubusercontent.com/73451858/153768061-317f5671-3ac5-471f-a081-d83fb83dd118.png)

Vamos precisar ter tanto a service quanto um 'mock' do HttpClient que ela recebe como parâmetro, 'mock' que será feito usando a biblioca do Jasmine.

![image](https://user-images.githubusercontent.com/73451858/153767717-4f3fcfbb-b2c0-461c-b7d2-5908dea84db3.png)

Após isso, precisamos criar um beforeEach para instanciar essas classes.

![image](https://user-images.githubusercontent.com/73451858/153768242-77088131-1867-4856-b900-2d215e344e33.png)

Agora o setup para podermos testar a classe está completo, podemos começar a criação dos testes de cada método. Assim ficam os testes sobre getAll/getById

![image](https://user-images.githubusercontent.com/73451858/153768874-ffd690a2-e0e8-4a42-a920-bde9bb31db03.png)

Percebe-se que no beforeEach, há necessidade de incluir no array ao mockar HttpClient o método dele que será chamado na classe Service, pois assim o método ficara sendo observado pelo Jasmine para poder mockar o seu retorno e validar se ele foi de fato executado e com quais parâmetros.

Finalizando, os testes dos demais métodos.

![image](https://user-images.githubusercontent.com/73451858/153769131-2279aa69-d75c-4529-948f-3aefced0bc1d.png)

Podemos validar no relatório de coverage quanto que conseguimos cobrir dessa classe.

![image](https://user-images.githubusercontent.com/73451858/153769221-143d86c7-f5a4-4721-89fe-29a6d332fcb6.png)


