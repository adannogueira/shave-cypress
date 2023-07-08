# Projeto Shave eXperience QA
## Automatização de testes com Cypress

[![Cypress](https://upload.wikimedia.org/wikipedia/commons/a/a4/Cypress.png)](https://www.cypress.io/)

## Instalação

1. Visite o [Ethereal Mail](https://ethereal.email/) e crie uma conta gratuita
2. Modifique o arquivo `.env.example` para `.env`
3. Nos campos `MAIL_USER` e `MAIL_PASS` do arquivo `.env` informe os dados obtidos no passo 1
4. Instale as dependências do projeto com o comando `npm install`
5. Digite `npm run start` para iniciar

O foco do projeto é automatização de testes utilizando o Cypress, para tanto, é necessária a execução de uma aplicação web, alvo dos testes. Todo o conteúdo necessário para execução correta da aplicação está contido neste repositório.

## Dicas

#### Expressões regulares na captura de elementos:
Para localizar o elemento: `<input type="password" placeholder="Sua senha secreta">`
Além de usar o valor inteiro -> input[placeholder="Sua senha secreta"], que fica muito verboso,
podemos usar qualquer uma das expressões regulares abaixo:
\* -> a expressão contém o valor indicado
  Ex: `input[placeholder*=senha]`

$ -> a expressão termina com o valor indicado
  Ex: `input[placeholder$=secreta]`

^ -> a expressão começa com o valor indicado
  Ex: `input[placeholder^=Sua]`

Para localizar classes, podemos usar o seletor css ".":
`<div class="minha-classe">` -> `.minha-classe`

Apesar de ser possível usar classes para localizar elementos, não é recomendável o uso destas quando geradas pelo framework, já que os nomes são randômicos e podem ser alterados a qualquer momento, quebrando os testes.

Para localizar elementos que não possuem identificação própria, é possível usar a versão Cypress para o xPath:
`button[text()="Entrar"]` -> `cy.contains('button', 'Entrar').click()`

Outra forma de localizar estes elementos é buscar identificadores nos parents, depois, descer até o elemento alvo:
`.logged-user div a`

Para testar cenários muito parecidos com modificação apenas de valor de entrada, é possível usar o `Array.forEach` como no exemplo:

```typescript
emails.forEach(email => {
  it(`case: ${email}`, () => {
    LoginPage.submit({ email, password: correctPassword })
    LoginPage.assertAlertErrorMessage({ error })
  })
})      
```

## Tech

Este projeto utiliza as seguintes tecnologias:

- [Docker] - Virtualizador de contêiners utilizado para execução da aplicação
- [NodeJS] - Ambiente de tempo de execução Javascript utilizado pelo Cypress
- [Typescript] - Superset do Javascript que aumenta a segurança com tipagem estática
- [FakerJS] - Gerador de dados fictícios para ambiente de testes