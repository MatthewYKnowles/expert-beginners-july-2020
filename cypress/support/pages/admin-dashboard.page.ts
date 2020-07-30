import {AccountSettingsPage} from "./account-settings.page";

export class AdminDashboardPage {

    confirmAnnouncement(): void {
        cy.get('[data-test=confirm-announcement]').click();
    }

    goToAccountSettings(): AccountSettingsPage {
        cy.get('#AdminSettings > .nav-item-s').click();
        return new AccountSettingsPage();
    }
}
