import {CreateAdminPage} from "./create-admin.page";
import {AdminDashboardPage} from "./admin-dashboard.page";

export class AccountSummaryPage {

    goToCreateAdminPage() {
        cy.get('#addUserGroupFormModal > .fa').click();
        cy.get('ul > :nth-child(2) > label').click();
        return new CreateAdminPage();
    }

    loginAsAdmin() {
        cy.get('.sub-header-action > :nth-child(3)').click();
        return new AdminDashboardPage();
    }

    deleteAdmin(name: string) {
        cy.contains(name).parent().find('.fa-trash').click()
        cy.get('.cancel-btn').click()
    }
}
