/// <reference types="Cypress />


    describe('Central de Atendimento ao Cliente TAT', function (){
        it('verificare o titulo da aplicação', function (){
            cy.visit('./src/index.html')

            cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
        });
        it('preenche os campos obrigatórios e envia o formulário', () => {
            cy.get('#firstName').type('Test ')
            cy.get('#lastName').type('QA 001')
            cy.get('#email').type('qa.test@test.com')

            cy.get('#open-text-area').click().type('Realizando um test automatizado', {delay:0})
            cy.get('.button').click()

            cy.get('.success').should('be.visible')
        });
        it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
            cy.get('#firstName').type('Test ')
            cy.get('#lastName').type('QA 001')
            cy.get('#email').type('qa.test#test.com')

            cy.get('#open-text-area').click().type('Realizando um test automatizado')
            cy.get('.button').click()

            cy.get('.error ').should('be.visible')
        });
        it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
            cy.get('#firstName').type('Test ')
            cy.get('#lastName').type('QA 001')
            cy.get('#email').type('qa.test@test.com')
            cy.get('#phone').type('Numero de test')

            cy.get('#open-text-area').click().type('Realizando um test automatizado')
            cy.get('.button').click()

            cy.get('#phone').should('be.empty')
        })
    })

