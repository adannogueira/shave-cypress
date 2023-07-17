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

Obs: Para utilizar o script "test" é necessário criar uma conta no [Tesults](https://www.tesults.com/), e adicionar o Target Token ao arquivo env, caso contrário, não será possível fazer o upload dos resultados.

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

#### Utilização de checkpoints durante a navegação
Alguns cenários podem exigir uma navegação longa até atingirem o objetivo final, ter que esperar o final do cenário para então receber um aviso de erro pode ser demorado e custoso. Para evitar este tipo de problema, é aconselhável realizar checkpoints durante o processo.

Checkpoints nada mais são do que verificações em determinados pontos da execução do cenário, afim de garantir que o caminho está dentro do esperado, um bug pode ser encontrado mais cedo na execução, fazendo o cenário falhar mais rápido.

Por exemplo:
```typescript
static open() {
  // navegação executada
  cy.visit(ForgotPasswordPage.url)

  // checkpoint que verifica se a página visitada acima é a esperada
  cy.get('form h1')
    .should('have.text', 'Recuperar senha')
}
```

#### Executando acesso direto ao backend pra ganhar performance
Existem etapas que precisam ser executadas como preparação em diversos cenários, como login do usuário por exemplo.
Uma vez que o login tenha sido testado em sua própria suite, não há necessidade de executar toda vez o processo inteiro, isso deixa seus testes lentos e repetitivos.
Pra evitar esse problema, podemos criar comandos que fazem a chamada direta ao backend e nos devolve apenas os dados necessários, pulando todo o processo de login padrão:

```typescript
export const apiLogin = ({ email, password }: application.User) => {
  cy.request({
    method: 'POST',
    url: `${Cypress.env('APP_API_URL')}/sessions`,
    body: { email, password }
  }).then(response => {
    expect(response.status).to.eql(200)
    const { user, token } = response.body
    window.localStorage.setItem('@ShaveXP:user', JSON.stringify(user))
    window.localStorage.setItem('@ShaveXP:token', token)
  })
}
```
No exemplo acima, criamos um `Cypress.Command` que executa login via api, o que ele faz é chamar o backend na rota de sessão do usuário e depois atribuir os dados recebido ao `localStorage`, tudo isso sem nenhuma interação com os elementos da tela.

## Tech

Este projeto utiliza as seguintes tecnologias:

- [Docker] - Virtualizador de contêiners utilizado para execução da aplicação
- [NodeJS] - Ambiente de tempo de execução Javascript utilizado pelo Cypress
- [Typescript] - Superset do Javascript que aumenta a segurança com tipagem estática
- [FakerJS] - Gerador de dados fictícios para ambiente de testes