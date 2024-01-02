import { Locator, Page } from '@playwright/test';
import { mainPageLocators } from './mainPageLocators';

export class MainPage {
    page: Page;
    addToCardAddidasButtonLocator: Locator;
    tostContainerLocator: Locator;
    cartButtonLocator: Locator;
    checkoutButtonLocator: Locator;
    countryFieldLocator: Locator;
    searchCountryLocator: Locator;
    placeOrderButtonLocator: Locator;

    constructor(page: Page) {
        this.page = page
        this.addToCardAddidasButtonLocator = page.locator(mainPageLocators.addToCartAddidas)
        this.tostContainerLocator = page.locator(mainPageLocators.tostContainerLocator)
        this.cartButtonLocator = page.locator(mainPageLocators.cartBtnLocator)
        this.checkoutButtonLocator = page.locator('.btn-primary' , {hasText: 'Checkout'})
        this.countryFieldLocator = page.locator(mainPageLocators.contryFieldLocator)
        this.searchCountryLocator = page.locator(mainPageLocators.searchCountryResultLocator)
        this.placeOrderButtonLocator = page.locator(mainPageLocators.placeOrderbtnlocator)
    }

    async clickAddToCardAddidas() {
        await this.addToCardAddidasButtonLocator.click()
        await this.page.waitForLoadState()
        await this.tostContainerLocator.waitFor()
    }
    
    async clickCartButton() {
        await this.cartButtonLocator.click()
        await this.page.waitForLoadState('networkidle')
    }

    async clickCheckoutBtn() {
        await this.checkoutButtonLocator.click()
        await this.page.waitForLoadState('networkidle')
    }

    async fillCountryFiled(contry = 'Ukraine') {
        await this.countryFieldLocator.type(contry)
        await this.searchCountryLocator.click()
    }

    async clickPlaceOrderButton() {
        await this.placeOrderButtonLocator.click()
        await this.page.waitForNavigation()
    }
}
