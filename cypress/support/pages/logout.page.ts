import {LoginPage} from "./login.page";

export class LogoutPage {

    goToLoginPage(): LoginPage {
        cy.get('#sign-in').click();
        return new LoginPage();
    }
}
