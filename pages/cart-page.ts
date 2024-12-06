import {BasePage} from './base-page';
import { Locator } from 'playwright';


export class CartPage extends BasePage {
    public readonly continueShoppingButton: Locator = this.page.locator('#continue-shopping');
    public readonly checkoutButton: Locator = this.page.locator('#checkout');

    /**
     * Navigates to the shopping cart page.
     * @async
     * @returns {Promise<void>} A promise that resolves when the navigation is complete.
     * @throws {Error} If the navigation fails or the expected URL is not reached.
     */
    public async goto(): Promise<void>{
        await this.shoppingCard.click();
        await this.page.waitForURL('https://www.saucedemo.com/cart.html');

    }

}