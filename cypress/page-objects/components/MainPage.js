export default class MainPage {

    static GoToCreateAccount(){
        
        cy.get(`li:nth-of-type(6) > a[role='button']`).click()
        //
        cy.findByText('Continue').click()

    }

    static FindByTextAll(El1, qty){

        cy.findAllByText(El1)
            .should('have.length', qty)

    }

    static findPlaceholders(){

        //cy.findByPlaceholderText(El1).click().type(PlaceText)

        cy.findByPlaceholderText('First Name').click().type('Hello Placeholder')
        cy.findByPlaceholderText('Last Name').click().type('Hello Last Name')
        cy.findByPlaceholderText('E-Mail').click().type('Hello E-Mail')
        cy.findByPlaceholderText('Telephone').click().type('Hello Telephone')
        cy.findByPlaceholderText('Password').click().type('Hello Password')
        cy.findByPlaceholderText('Password Confirm').click().type('Hello Password Confirm')
        
    }

}