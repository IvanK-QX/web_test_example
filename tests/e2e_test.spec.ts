import { test } from '@playwright/test';
import { App } from '../pages/app';
import { testData } from '../utils/dataset';


test('e2e flow', async ({page}) => {
  const app = new App(page),
  email = testData.email

  await app.loginPage.open()
  await app.loginPage.clickRegistrationButton()
  await app.singUpPage.inputFirstNameField(testData.firstName)
  await app.singUpPage.inputLastNameField(testData.lastName)
  await app.singUpPage.inputEmailField(email)
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