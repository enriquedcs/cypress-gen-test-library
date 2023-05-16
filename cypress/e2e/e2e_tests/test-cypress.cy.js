import config from './config.json'
import MainPage from '../../page-objects/components/MainPage'

describe('Testing Cypress Library', () => {
    beforeEach(() => {
        cy.visit(`${config.URL2}`) 

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        })
    })
   
    // Test each of the types of queries: LabelText, PlaceholderText, Text, DisplayValue, AltText, Title, Role, TestId

    it('findAllByText', () => {

        MainPage.FindByTextAll('Search', 1)
        //cy.findAllByText('Search')
        //    .should('have.length', 1)
    })

    it('findAllByText', () => {

        MainPage.FindByTextAll('Shop Now', 1)
        //cy.findAllByText('Shop Now')
        //  .should('have.length', 1)
    })

    it('findAllByText Second', () => {

        MainPage.FindByTextAll('SHOP NOW', 2)
        //cy.findAllByText('SHOP NOW')
        //    .should('have.length', 2)
    })

    it('findPlaceholders', () => {

        MainPage.GoToCreateAccount()
        //
        MainPage.findPlaceholders()

    })

})