import {LoginPage} from "../support/pages/login.page";
import {HolonetDashboardPage} from "../support/pages/holonet-dashboard.page";
import {AccountSummaryPage} from "../support/pages/account-summary.page";
import {CreateAdminPage} from "../support/pages/create-admin.page";
import {AdminDashboardPage} from "../support/pages/admin-dashboard.page";
import {AccountSettingsPage} from "../support/pages/account-settings.page";
import {NavigationBar} from "../support/pages/navigation-bar";
import {LogoutPage} from "../support/pages/logout.page";


describe("Emmersion End to End Tests", () => {
    let navigationBar: NavigationBar;

    beforeEach(() => {
        navigationBar = new NavigationBar();
    })

    it.skip('not using page object: should create admin and see it in the admin list', () => {
        const username = 'local-holonet';
        const password = 'Testing1!'
        let accountName = 'Local TN + WC-account';

        const randomNumber = Math.floor(Math.random() * 1000);
        const firstName = `TestFirst${randomNumber}`;
        const lastName = `TestLast${randomNumber}`;
        const email = `${firstName}@emmersion.ai`;

        cy.visit('/')
        cy.get('[data-test=username]').type(username)
        cy.get('[data-test=password]').type(password)
        cy.get('[data-test=sign-in]').click();
        cy.get('[data-test=search]').type(accountName);
        cy.get(`[data-test="${accountName}"]`).click();
        cy.get('#addUserGroupFormModal > .fa').click();
        cy.get('ul > :nth-child(2) > label').click();
        cy.get('#givenName').type(firstName);
        cy.get('#surName').type(lastName);
        cy.get('#username').type(email)
        cy.get('#userEmail').type(email)
        cy.get('#password').type('Testing1!')
        cy.get('#passwordConfirmation').type('Testing1!')
        cy.get('.btn-primary').click();
        cy.get('.sub-header-action > :nth-child(3)').click();
        cy.get('[data-test=confirm-announcement]').click();
        cy.get('#AdminSettings > .nav-item-s').click();
        cy.get('#assessmentsId').click({force: true})
        cy.get('#admin-listId').click({force: true})
        cy.contains(`${lastName}, ${firstName}`).should('be.visible');
        cy.get('.dropdown-toggle').click();
        cy.get('#Logout').click();
        cy.get('#sign-in').click();
        cy.get('[data-test=username]').type(username)
        cy.get('[data-test=password]').type(password)
        cy.get('[data-test=sign-in]').click();
        cy.get('[data-test=search]').type(accountName);
        cy.get(`[data-test="${accountName}"]`).click();
        cy.contains(`${firstName} ${lastName}`).parent().find('.fa-trash').click()
        cy.get('.cancel-btn').click()
        cy.contains(`${firstName} ${lastName}`).should('not.be.visible');
    })

    it.skip('using page object: should create admin and see it in the admin list', () => {
        const username = 'local-holonet';
        const password = 'Testing1!'
        let accountName = 'Local TN + WC-account';

        const randomNumber = Math.floor(Math.random() * 1000);
        const firstName = `TestFirst${randomNumber}`;
        const lastName = `TestLast${randomNumber}`;
        const email = `${firstName}@emmersion.ai`;

        cy.visit('/')
        let loginPage = new LoginPage();
        let holonetDashboardPage: HolonetDashboardPage = loginPage.loginToHolonet(username, password);
        let accountSummaryPage: AccountSummaryPage = holonetDashboardPage.goToAccountSummary(accountName)
        let createAdminPage: CreateAdminPage = accountSummaryPage.goToCreateAdminPage()
        accountSummaryPage = createAdminPage.createAdmin(firstName, lastName, email, password)
        cy.contains(`${firstName} ${lastName}`).should('be.visible');
        let adminDashboard: AdminDashboardPage = accountSummaryPage.loginAsAdmin();
        adminDashboard.confirmAnnouncement();
        let accountSettingsPage: AccountSettingsPage = adminDashboard.goToAccountSettings();
        accountSettingsPage.viewAdminManagement()
        cy.contains(`${lastName}, ${firstName}`).should('be.visible');
        let logoutPage: LogoutPage = navigationBar.logout();
        loginPage = logoutPage.goToLoginPage();
        loginPage.loginToHolonet(username, password);
        accountSummaryPage = holonetDashboardPage.goToAccountSummary(accountName)
        accountSummaryPage.deleteAdmin(`${firstName} ${lastName}`);
        cy.contains(`${firstName} ${lastName}`).should('not.be.visible');
    })
})
