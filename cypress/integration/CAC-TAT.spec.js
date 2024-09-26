/// <reference types="Cypress />

import '../support/cac_tat_commands'

    describe('Central de Atendimento ao Cliente TAT', function (){
        beforeEach(() => cy.Acessar_CAC_TAT())

        it('verificare o titulo da aplicação', function (){
            cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
        });
        //Exercicio 001
        it('preenche os campos obrigatórios e envia o formulário', () => {
            cy.get('#firstName').type('Test ')
            cy.get('#lastName').type('QA 001')
            cy.get('#email').type('qa.test@test.com')

            cy.get('#open-text-area').click().type('Realizando um test automatizado', {delay:0})
            cy.get('.button').click()

            cy.get('.success').should('be.visible')
        });
        //Exercicio 002
        it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
            cy.get('#firstName').type('Test ')
            cy.get('#lastName').type('QA 001')
            cy.get('#email').type('qa.test#test.com')

            cy.get('#open-text-area').click().type('Realizando um test automatizado')
            cy.get('.button').click()

            cy.get('.error ').should('be.visible')
        });
        //Exercicio 003
        it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
            cy.get('#firstName').type('Test ')
            cy.get('#lastName').type('QA 001')
            cy.get('#email').type('qa.test@test.com')
            cy.get('#phone').type('Numero de test')

            cy.get('#open-text-area').click().type('Realizando um test automatizado')
            cy.get('.button').click()

            cy.get('#phone').should('be.empty')
        })
        //Exercicio 004
        it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
            cy.get('#firstName').type('Test ')
            cy.get('#lastName').type('QA 001')
            cy.get('#email').type('qa.test@test.com')

            cy.get('#phone-checkbox').click()

            cy.get('#open-text-area').click().type('Realizando um test automatizado')
            cy.get('.button').click()

            cy.get('.error ').should('be.visible')
        })
        //Exercicio 005
        it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
         cy.get('#firstName').type('Test').should('have.value', 'Test')
            cy.get('#firstName').clear().should('have.value', '')
        })
        //Exercicio 006
        it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
            cy.get('.button').click()

            cy.get('.error ').should('be.visible')
        })
        //Exercicio 007
        it('envia o formuário com sucesso usando um comando customizado', () => {
            cy.fillMandatoryFieldsAndSubmit()

            cy.get('.success').should('be.visible')
        });
        //Exercicio 008
        it('preenche os campos obrigatórios e envia o formulário usando contains', () => {
            cy.get('#firstName').type('Test ')
            cy.get('#lastName').type('QA 002')
            cy.get('#email').type('qa.002.test@test.com')

            cy.contains('#product', 'Curso').select([2]).should('contain.text', 'Curso')

            cy.contains('#support-type > :nth-child(3)', 'Elogio').click()

            cy.get('#open-text-area').click().type('Realizando um test automatizado')

            cy.contains('.button','Enviar').click()

            cy.get('.success').should('be.visible')
        });
        //Exercicio 009
        it.only('seleciona um produto (YouTube) por seu texto', () => {
            cy.contains('YouTube').should('contain.text', 'YouTube')
        });
        //Exercicio 009/001
        it.only('seleciona um produto (Mentoria) por seu valor (value)', () => {
            cy.get('#product').select('mentoria').should('have.value', 'mentoria')
        })
        //Exercicio 009/002
        it.only('seleciona um produto (Blog) por seu índice', () => {
            cy.contains('#product', 'Blog').select([1]).should('contain.text', 'Blog')
        })
    })

