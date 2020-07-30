import {HolonetDashboardPage} from "./holonet-dashboard.page";

export class LoginPage {
    loginToHolonet(username: string, password: string): HolonetDashboardPage {
        cy.get('[data-test=username]').type(username)
        cy.get('[data-test=password]').type(password)
        cy.get('[data-test=sign-in]').click();
        return new HolonetDashboardPage();
    }
}
