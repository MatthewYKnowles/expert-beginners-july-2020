import {AccountSummaryPage} from "./account-summary.page";

export class CreateAdminPage {

    createAdmin(firstName: string, lastName: string, email: string, password: string) {
        cy.get('#givenName').type(firstName);
        cy.get('#surName').type(lastName);
        cy.get('#username').type(email)
        cy.get('#userEmail').type(email)
        cy.get('#password').type(password)
        cy.get('#passwordConfirmation').type(password)
        cy.get('.btn-primary').click();
        return new AccountSummaryPage()
    }
}
