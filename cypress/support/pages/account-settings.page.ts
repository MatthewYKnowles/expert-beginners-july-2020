export class AccountSettingsPage {

    viewAdminManagement() {
        cy.get('#assessmentsId').click({force: true})
        cy.get('#admin-listId').click({force: true})
    }
}
