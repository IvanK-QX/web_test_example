import { test, request } from '@playwright/test';
import { ApiUtils } from '../utils/apiUtils';
import { testData } from '../utils/dataset';
import { App } from '../pages/app';

test.describe('API Sign Up', () => {

    // create user from API and login from UI
    test('Create User From API', async({page}) => {
        const apiContext = await request.newContext()
        const app = new App(page)
        const apiUtils = new ApiUtils(apiContext)
        const createNewUser = await apiUtils.createUser(`${testData.appUrl}/${testData.signUpApiUrl}`, testData.email)

        await app.loginPage.loginToTheApp(createNewUser.email, testData.pass)
    })

    // token injection
    test('Login user from API', async({page}) => {
        const apiContext = await request.newContext()
        const apiUtils = new ApiUtils(apiContext)
        const createNewUser = await apiUtils.createUser(`${testData.appUrl}/${testData.signUpApiUrl}`, testData.secondEmail)
        const loginUser = await apiUtils.loginUser(`${testData.appUrl}/${testData.loginApiUrl}`, createNewUser.email)
        await page.goto(`${testData.appUrl}/client`)
        page.addInitScript(value => {
            window.localStorage.setItem('token', value)
        }, loginUser.token);

        await page.goto(`${testData.appUrl}/client`)
        await page.waitForTimeout(5000)
        await page.waitForLoadState('networkidle')
    })
})
