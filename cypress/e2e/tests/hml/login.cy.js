
const loginElements = require('../../../support/pageElements/loginElements');
const homeElements = require('../../../support/pageElements/homeElements');
const globalData = require('../../../support/data/globalData.json')
describe('Login', () => {
    context('validação de acesso a login', () => {
        beforeEach(() => {
            const url = 'https://hml-avon-br.hml.naturacloud.com/login?redirect=%2F';
            // Usa a variável para visitar a URL
            cy.visit(url);
            // verifica que estamos na Url correta  
            cy.url().should('eq', url);

            cy.wait(5000)
        })
        it('login com dados validos', () => {
            //Inserindo credencias para realizar login
            cy.get(loginElements.campoLogin).type(globalData.usuarioValido.email)
            cy.get(loginElements.campoSenha).type(globalData.usuarioValido.password)

            // click para entrar na conta do usuario
            cy.get(loginElements.btnEntrar).should('be.visible').click()

            // Aguardando o texto estar visivel para fazer a validação correta do elemento
            cy.contains(homeElements.elementNameUser, 'Olá, Automation!', { timeout: 10000 }) // 10 segundos
              .should('be.visible');

            // Valida que realizei o login com sucesso 
            cy.get(homeElements.elementNameUser)
                .should('be.visible')
                .and('have.text', 'Olá, Automation!');
        });
    })
})