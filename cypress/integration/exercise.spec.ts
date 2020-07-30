import {LoginPage} from "../support/pages/login.page";
import {HolonetDashboardPage} from "../support/pages/holonet-dashboard.page";

describe("", () => {
    it("should create a new account, create admin on account, and verify admin shows up on new admin list - brody", ()=> {
        const username = 'local-holonet';
        const password = 'Testing1!'
        const randomNumber = Math.floor(Math.random() * 1000);
        cy.visit('/')
        let loginPage = new LoginPage();
        let holonetDashboardPage: HolonetDashboardPage = loginPage.loginToHolonet(username, password);
        cy.get('#showCreateModal').click();
        cy.viewport(1920, 1080);
        cy.get('#accountName').type(`test${randomNumber}`);
        cy.get('#membershipLevelId').select('Standard');
        cy.get('.email-domain-restriction > label').click();
    });
})
