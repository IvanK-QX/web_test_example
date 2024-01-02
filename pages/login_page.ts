import { Locator, Page } from '@playwright/test';
import { testData } from '../utils/dataset';
import { loginPageLocators } from './loginPageLocators';

export class LoginPage {
    page: Page;
    registrationButtonLocator: Locator;
    emailFiledLocator: Locator;
    passwordFiledLocator: Locator;
    loginButtonLocator: Locator;

    constructor(page: Page) {
        this.page = page
        this.registrationButtonLocator = page.locator(loginPageLocators.registrationBtn)
        this.emailFiledLocator = page.locator(loginPageLocators.emailField)
        this.passwordFiledLocator = page.locator(loginPageLocators.passwordField)
        this.loginButtonLocator = page.locator(loginPageLocators.loginButton)
    }

    async open() {
        await this.page.goto(`${testData.appUrl}/client`)
    }

    async clickRegistrationButton() {
        await this.registrationButtonLocator.click()
    }

    async inpuEmailField(email: string) {
        await this.emailFiledLocator.fill(email)
    }

    async inpuPasswordField(pass: string) {
        await this.passwordFiledLocator.fill(pass)
    }

    async clickLoginButton() {
        await this.page.waitForTimeout(500)
        await this.loginButtonLocator.click()
        await this.page.waitForLoadState('networkidle')
    }

    async loginToTheApp(email: string, password: string) {
        await this.open()
        await this.inpuEmailField(email)
        await this.inpuPasswordField(password)
        await this.clickLoginButton()
    }
    
}
