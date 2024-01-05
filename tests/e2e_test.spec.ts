import { test } from '@playwright/test';
import { App } from '../pages/app';
import { testData } from '../utils/dataset';

// simple trainig flow 
test('Registration flow', async ({page}) => {
  const app = new App(page)
  const email = testData.email

  await page.goto('https://rahulshettyacademy.com/client')
  await page.locator('[href="/client/auth/register"]').click()
  await page.locator('#firstName').fill(testData.firstName)
  await page.locator('#lastName').fill(testData.lastName)
  await page.locator('#userEmail').fill(email)
  await page.locator('#userMobile').fill(testData.phone)
  await page.locator('#userPassword').fill(testData.pass)
  await page.locator('#confirmPassword').fill(testData.pass)
  await page.locator('[formcontrolname="gender"][value="Male"]').click()
  await page.locator('[formcontrolname="occupation"]').selectOption('2: Student')
  await page.locator('[type="checkbox"]').click()
  await page.locator('[value="Register"]').click()
  await page.locator('[routerlink="/auth"]').click()
  await page.locator('#userEmail').fill(email)
  await page.locator('#userPassword').fill(testData.pass)
  await page.locator('#login').click()
  await page.locator('#products').waitFor()
})


// e2e payment flow > PageObject
test('e2e flow', async ({page}) => {
  const app = new App(page)

  await app.loginPage.open()
  await app.loginPage.clickRegistrationButton()
  await app.singUpPage.inputFirstNameField(testData.firstName)
  await app.singUpPage.inputLastNameField(testData.lastName)
  const email = await app.singUpPage.inputEmailField(testData.email)
  await app.singUpPage.inputPhoneField(testData.phone)
  await app.singUpPage.inputPasswordField(testData.pass)
  await app.singUpPage.inputConfirmPasswordField(testData.pass)
  await app.singUpPage.selectOccupation('2: Student')
  await app.singUpPage.selectGenderMale()
  await app.singUpPage.acceptTOSCheckbox()
  await app.singUpPage.clickRegistrButton()
  await app.loginPage.open()
  await app.loginPage.inpuEmailField(email)
  await app.loginPage.inpuPasswordField(testData.pass)
  await app.loginPage.clickLoginButton()
  await app.mainPage.clickAddToCardAddidas()
  await app.mainPage.clickCartButton()
  await app.mainPage.clickCheckoutBtn()
  await app.mainPage.fillCountryFiled()
  await app.mainPage.clickPlaceOrderButton()
})