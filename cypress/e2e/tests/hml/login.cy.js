
const loginElements = require('../../../support/pageElements/loginElements');
const homeElements = require('../../../support/pageElements/homeElements');
const globalData = require('../../../support/data/globalData.json');
const globalAssertion = require('../../../support/data/globalAssertion.json');
describe('Login', () => {
    context('validação de acesso a login', () => {
        beforeEach(() => {
            const url = 'https://hml-avon-br.hml.naturacloud.com/login?redirect=%2F';
            // Usa a variável para visitar a URL
            cy.visit(url);
            // verifica que estamos na Url correta  
            cy.url().should('eq', url);

            cy.wait(5000)
            //Inserindo credencias para realizar login
            cy.get(loginElements.campoLogin).type(globalData.usuarioValido.email)
            cy.get(loginElements.campoSenha).type(globalData.usuarioValido.password)
    
            // click para entrar na conta do usuario
            cy.get(loginElements.btnEntrar).should('be.visible').click()
        })
        it('login com dados validos', () => {
            // Aguardando o texto estar visivel para fazer a validação correta do elemento
            cy.contains(homeElements.elementNameUser, 'Olá, Automation!', { timeout: 10000 }) // 10 segundos
                .should('be.visible');

            // Valida que realizei o login com sucesso 
            cy.get(homeElements.elementNameUser)
                .should('be.visible')
                .and('have.text', 'Olá, Automation!');
        });
        it('Logout', () => {
            // Aguardando o texto estar visivel para fazer a validação correta do elemento
            cy.contains(homeElements.elementNameUser, 'Olá, Automation!', { timeout: 10000 }) // 10 segundos
                .should('be.visible');

            // Valida que realizei o login com sucesso 
            cy.get(homeElements.elementNameUser)
                .should('be.visible')
                .and('have.text', 'Olá, Automation!'); 

            //click no menu usuario
            cy.get(loginElements.btnMenuUser).should('be.visible').click()
            
            cy.wait(5000)
            // click em sair
            cy.contains('Sair').should('be.visible').click();

            // Aguardando o texto estar visivel para fazer a validação correta do elemento
            cy.contains(homeElements.elementNameUser, 'Minha conta', { timeout: 10000 }) // 10 segundos
                .should('be.visible');

            // Valida que realizei o login com sucesso 
            cy.get(homeElements.elementNameUser)
                .should('be.visible')
                .and('have.text', 'Minha conta');
        });
    })
    it('login com dados invalidos', () => {
        const url = 'https://www.avon.com.br/login?redirect=%2F';
            // Usa a variável para visitar a URL
            cy.visit(url);
            // verifica que estamos na Url correta  
            cy.url().should('eq', url);

            cy.wait(5000)
        //Inserindo credencias invalidas para realizar login
        cy.get(loginElements.campoLogin).type(globalData.usuarioInexistente.email)
        cy.get(loginElements.campoSenha).type(globalData.usuarioInexistente.password)

        // click para entrar na conta do usuario
        cy.get(loginElements.btnEntrar).should('be.visible').click()

        // Aguardando o texto estar visivel para fazer a validação correta do elemento
        cy.contains(loginElements.textLoginInvalid, 'Informe um login válido', { timeout: 10000 }) // 10 segundos
            .should('be.visible');

        // Valida que realizei o login com sucesso 
        cy.get(loginElements.textLoginInvalid2)
            .should('exist')
            .and('have.text', globalAssertion.loginAssertion.textMessageLoginInvalid);
    });
    it.only('Favoritar produto sem estar logado', () => {
      const url = 'https://hml-avon-br.hml.naturacloud.com/';
      cy.visit(url);
      cy.url().should('eq', url);
      cy.wait(5000);

      // favoritar primeiro produto da home
      cy.get(homeElements.btnAddProduct).first().should('exist').and('be.visible').scrollIntoView();
      cy.get(loginElements.btnIconFavorito).first().should('exist').click()

      // realiza login
      cy.get(loginElements.campoLogin).type(globalData.usuarioValido.email)
      cy.get(loginElements.campoSenha).type(globalData.usuarioValido.password)
    
       // click para entrar na conta do usuario
       cy.get(loginElements.btnEntrar).should('be.visible').click()

       // Aguardando que o login foi efetuado com sucesso
       cy.contains(homeElements.elementNameUser, 'Olá, Automation!', { timeout: 10000 }) // 10 segundos
       .should('be.visible');
       
       // acessar area de favoritos
       cy.get(loginElements.btnAreaFavoritos).first().should('be.visible').click()

       // verifica que a area de favoritos não contem nenhum produto favoritado
       cy.get(loginElements.textListaFavoritosVazia).eq(1)
       .should('exist').and('have.text', globalAssertion.favoritosAssertion.listaFavoritos)
    });
})