# Angular: Testes Unitários com Karma e Jasmine

## Algumas dicas para facilitar a execução dos testes

### Rodar os testes unitários de uma classe específica/describe

Basta adicionar um 'f' ao describe (irá ficar 'fdescribe'), assim o Karma irá rodar os testes apenas desse describe, ignorando os outros.

![image](https://user-images.githubusercontent.com/73451858/153773315-66a75aef-8d5b-4373-87c1-5a20e19fe43e.png)

### Rodar um teste unitário/it específico

Basta adicionar um 'f' ao it (irá ficar 'fit'), assim o Karma irá rodar apenas esse teste, ignorando os outros.

![image](https://user-images.githubusercontent.com/73451858/153773279-52b29066-7ad3-4490-9988-b90523443d2d.png)

### Ignorar os testes de uma classe/describe específica

Basta adicionar um 'x' ao describe (irá ficar 'xdescribe'), assim o Karma irá rodar os testes de todos os outros describes.

![image](https://user-images.githubusercontent.com/73451858/153773257-d1c44419-187d-4ed9-ab51-17353a1e91bb.png)

### Ignorar um teste unitário/it  específico

Basta adicionar um 'x' ao it (irá ficar 'xit'), assim o Karma irá rodar todos os outros testes.

![image](https://user-images.githubusercontent.com/73451858/153773217-f47a5caf-294a-416d-b180-a86ea3fc95f7.png)

