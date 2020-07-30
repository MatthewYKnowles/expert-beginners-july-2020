import {LogoutPage} from "./logout.page";

export class NavigationBar {
    logout(): LogoutPage {
        cy.get('.dropdown-toggle').click();
        cy.get('#Logout').click();
        return new LogoutPage();
    }
}
