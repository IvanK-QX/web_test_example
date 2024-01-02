import { Page } from '@playwright/test';
import { LoginPage } from './login_page';
import { MainPage } from './main_page';
import { SignUpPage } from './singUp_page';

//app manager
export class App {
    page: Page
    loginPage: LoginPage
    singUpPage: SignUpPage
    mainPage: MainPage

    constructor(page: Page) {
        this.page = page
        this.loginPage = new LoginPage(page)
        this.singUpPage = new SignUpPage(page)
        this.mainPage = new MainPage(page)
    }
}
