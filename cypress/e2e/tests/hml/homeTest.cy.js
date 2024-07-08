// /cypress/e2e/homeTest.cy.js
const homeElements = require('../../../support/pageElements/homeElements');

describe('validação da página de home', () => {
  context('validação da page home', () => {
    beforeEach(() => {
      const url = 'https://hml-avon-br.hml.naturacloud.com/';
      cy.visit(url);
      cy.url().should('eq', url);
      cy.wait(5000);
    });

    it.only('Categoria Lançamentos', () => {
      cy.contains('Lançamentos').should('be.visible');
      cy.clickButton(homeElements.lancamentosLink);
      cy.contains('Home').should('be.visible');
      cy.contains('Lançamentos').should('be.visible');
      cy.url().should('include', 'c/lancamentos');
    });

    it('Categoria Presentes e Kits', () => {
      cy.contains('Presentes e Kits').should('be.visible');
      cy.clickButton(homeElements.presentesKitsLink);
      cy.contains('Home').should('be.visible');
      cy.contains('Presentes e Kits').should('be.visible');
      cy.url().should('include', 'c/kits-e-presentes');
    });

    it('Categoria Maquiagem', () => {
      cy.contains('Maquiagem').should('be.visible');
      cy.clickButton(homeElements.maquiagemLink);
      cy.contains('Home').should('be.visible');
      cy.contains('Maquiagem').should('be.visible');
      cy.url().should('include', 'c/maquiagem');
    });

    it('Categoria Rosto', () => {
      cy.contains('Rosto').should('be.visible');
      cy.clickButton(homeElements.rostoLink);
      cy.contains('Home').should('be.visible');
      cy.contains('Rosto').should('be.visible');
      cy.url().should('include', 'c/rosto');
    });

    it('Categoria Cuidados Diários', () => {
      cy.contains('Cuidados Diários').should('be.visible');
      cy.clickButton(homeElements.cuidadosDiariosLink);
      cy.contains('Home').should('be.visible');
      cy.contains('Cuidados Diários').should('be.visible');
      cy.url().should('include', 'c/cuidados-diarios');
    });

    it('Categoria Perfumaria', () => {
      cy.contains('Perfumaria').should('be.visible');
      cy.clickButton(homeElements.perfumariaLink);
      cy.contains('Home').should('be.visible');
      cy.contains('Perfumaria').should('be.visible');
      cy.url().should('include', 'c/perfumaria');
    });

    it('Categoria Cabelos', () => {
      cy.contains('Cabelos').should('be.visible');
      cy.clickButton(homeElements.cabelosLink);
      cy.contains('Home').should('be.visible');
      cy.contains('Cabelos').should('be.visible');
      cy.url().should('include', 'c/cabelos');
    });

    it('Categoria Casa & Estilo', () => {
      cy.contains('Casa & Estilo').should('be.visible');
      cy.clickButton(homeElements.casaEstiloLink);
      cy.contains('Home').should('be.visible');
      cy.contains('Casa & Estilo').should('be.visible');
      cy.url().should('include', 'c/casa-estilo');
    });

    it('Categoria Promoções', () => {
      cy.contains('Promoções').should('be.visible');
      cy.clickButton(homeElements.promocoesLink);
      cy.contains('Home').should('be.visible');
      cy.contains('Promoções').should('be.visible');
      cy.url().should('include', 'c/promocoes');
    });

    it('Interação com carrossel', () => {
      cy.get(homeElements.carouselSlide).should('be.visible');
      cy.get(homeElements.carouselNextButton).eq(3).click();
      cy.get(homeElements.carouselNextButton).eq(2).click();
    });

    it('campo busca', () => {
      cy.get(homeElements.searchInput).type('Bat');
      cy.wait(5000);
      cy.contains(homeElements.searchResults).should('be.visible');
      cy.contains(homeElements.viewMoreResults).should('be.visible');
    });
  });
});
