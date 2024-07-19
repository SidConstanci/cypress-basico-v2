
Cypress.Commands.add('Acessar_CAC_TAT',() => {
    cy.visit('./src/index.html')
})

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () =>{
    cy.get('#firstName').type('Test ')
    cy.get('#lastName').type('QA 001')
    cy.get('#email').type('qa.test@test.com')

    cy.get('#open-text-area').click().type('Realizando um test automatizado', {delay:0})
    cy.get('.button').click()
})