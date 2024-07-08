

Cypress.Commands.add('clickButton', (button) => {
    cy.get(button).should('be.visible').click()
})

// Cypress.Commands.add('clickButtonCustomPosition', (button, position) => {
//     cy.get(button).eq(position).scrollIntoView().should('be.visible').click()
// })

// Cypress.Commands.add('clickMenuOption', (button) => {
//     cy.get(button).should('be.visible').click({ scrollBehavior: false, force: true }).trigger('mouseover')
// })

// Cypress.Commands.add('checkQuantity', (selector, position) => {
//     cy.get(selector).eq(position).should('be.visible')
// })

// Cypress.Commands.add('clearAndType', (button, text) => {
//     cy.get(button).should('be.visible').clear().type(text)
// })

// Cypress.Commands.add('clearAndTypeLate', (button, text, time) => {
//     cy.get(button).should('be.visible').clear().type(text, { delay: time })
// })

// Cypress.Commands.add('scrollAndClickButton', (button) => {
//     cy.get(button).scrollIntoView().should('be.visible').click()
// })

// Cypress.Commands.add('checkPathname', (pathname) => {
//     cy.location('pathname').should('contain', pathname)
// })

// Cypress.Commands.add('checkInterceptStatusCode', (request, statusCode) => {
//     cy.wait(request, { timeout: 45000 }).its('response.statusCode').should('eq', statusCode)
// })

// Cypress.Commands.add('waitJsLoad', () => {
//     cy.wait(2000)
// })

// Cypress.Commands.add('reloadAndLoadStyles', () => {
//     cy.intercept(element.common.requests.styles.method, element.common.requests.styles.url).as('loadingStyles')
//     cy.reload()
//     cy.checkInterceptStatusCode('@loadingStyles', 200)
// })

// Cypress.Commands.add('customScreenshot', (typeScreenshot, menu) => {
//     if (menu === false) {
//         cy.get(element.common.header).invoke('remove')
//     }

//     cy.screenshot(
//         Cypress.currentTest.title, {
//         capture: typeScreenshot,
//         timeout: 120000
//     })
// })

// Cypress.Commands.add('forceClear', () => {
//     cy.clearAllCookies()
//     cy.clearAllLocalStorage()
//     cy.clearAllSessionStorage()
//     cy.clearCookies()
// })

// Cypress.Commands.add('clicksMultiple', (seletor, quantidade) => {
//     if (quantidade < 1) {
//       throw new Error('A quantidade deve ser maior que zero.');
//     }
  
//     if (quantidade === 1) {
//       cy.get(seletor).click();
//     } else {
//       cy.get(seletor).then($elemento => {
//         for (let i = 0; i < quantidade; i++) {
//           cy.wrap($elemento).click();
//         }
//       });
//     }
//   });
 