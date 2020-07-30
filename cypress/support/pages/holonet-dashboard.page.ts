import {AccountSummaryPage} from "./account-summary.page";

export class HolonetDashboardPage {

    goToAccountSummary(accountName: string) {
        cy.get('[data-test=search]').type(accountName);
        cy.get(`[data-test="${accountName}"]`).click();
        return new AccountSummaryPage();
    }
}
