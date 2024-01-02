import { Locator, Page } from '@playwright/test';
import { testData } from '../utils/dataset';
import { signUpPageLocators } from './signUpPageLocators';

export class SignUpPage {
    page: Page;
    firstNameFieldLocator: Locator;
    lastNameFieldLocator: Locator;
    emailFieldLocator: Locator;
    phoneNumberFieldLocator: Locator;
    passwordFieldLocator: Locator;
    maleRarioButtonLocator: Locator;
    tosCheckmoxLocator: Locator;
    registrButtonLocator: Locator;
    occupationFiledLocator: Locator;
    confirmPasswordFieldLocator: Locator;

    constructor(page: Page) {
        this.page = page
        this.firstNameFieldLocator = page.locator(signUpPageLocators.firstNameFieldLocator)
        this.lastNameFieldLocator = page.locator(signUpPageLocators.lastNameFieldLocator)
        this.emailFieldLocator = page.locator(signUpPageLocators.emailFieldLocator)
        this.phoneNumberFieldLocator = page.locator(signUpPageLocators.phoneNumberFieldLocator)
        this.passwordFieldLocator = page.locator(signUpPageLocators.passwordFieldLocator)
        this.confirmPasswordFieldLocator = page.locator(signUpPageLocators.confirmPasswordFieldLocator)
        this.maleRarioButtonLocator = page.locator(signUpPageLocators.maleRarioButtonLocator)
        this.tosCheckmoxLocator = page.locator(signUpPageLocators.tosCheckmoxLocator)
        this.registrButtonLocator = page.locator(signUpPageLocators.registrButtonLocator)
        this.occupationFiledLocator = page.locator(signUpPageLocators.occupationFiledLocator)
  
    }

    async open() {
        await this.page.goto(`${testData.appUrl}/client/auth/register`)
    }

    async inputFirstNameField(firstName: string) {
        await this.firstNameFieldLocator.fill(firstName)
    }

    async inputLastNameField(lastName: string) {
        await this.lastNameFieldLocator.fill(lastName)
    }

    async inputEmailField(email: string) {
        await this.emailFieldLocator.fill(email)
    }

    async inputPhoneField(phone: string) {
        await this.phoneNumberFieldLocator.fill(phone)
    }

    async inputPasswordField(pass: string) {
        await this.passwordFieldLocator.fill(pass)
    }

    async inputConfirmPasswordField(pass: string) {
        await this.confirmPasswordFieldLocator.fill(pass)
    }

    async selectGenderMale() {
        await this.maleRarioButtonLocator.click()
    }

    async selectOccupation(option: '2: Student' | '1: Doctor' | '3: Engineer' | '4: Scientist') {
        await this.occupationFiledLocator.selectOption(option)
    }

    async acceptTOSCheckbox() {
        await this.tosCheckmoxLocator.click()
    }

    async clickRegistrButton() {
        await this.registrButtonLocator.click()
    }
}
