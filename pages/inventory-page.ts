// import {test, expect} from '../utilities/customFixtures';

import {BasePage} from './base-page';
import { Locator } from 'playwright';

export class InventoryPage extends BasePage {

    public readonly productSortContainer: Locator = this.page.locator("select.product_sort_container");

    public readonly inventoryItems: Locator = this.page.locator(".inventory_item");
    public readonly itemLabels: Locator = this.page.locator(".inventory_item_name");
   
    public async goto(): Promise<void>{
        await this.page.goto(`${process.env.INVENTORYPAGE_URL}`);
    }

    /**
     * Adds a product to the shopping cart.
     * 
     * @async
     * @param {string} productName - The name of the product to add to the cart.
     * @returns {Promise<void>} A promise that resolves when the product is successfully added to the cart.
     * @throws {Error} If the product cannot be found or added to the cart.
     */
    public async addProductToCart(productName: string): Promise<void>{
        const product = await this.selectProduct(productName);
        await product?.locator('text=Add to cart').click(); 
        await this.shoppingCard.locator('span').waitFor()
    }

    /**
     * Selects a product from the inventory based on its name.
     *
     * @async
     * @param {string} productName - The name of the product to select.
     * @returns {Promise<Locator|null>} A Promise that resolves to a Locator object for the selected product, or null if not found.
     * @throws {Error} If the product is not found in the inventory.
     */
    
    public async selectProduct(productName: string): Promise<null|Locator>{
        const count = await this.inventoryItems.count();
        for (let i = 0;  i < count ; i++) {
            const label = await this.inventoryItems.nth(i).locator('.inventory_item_label a').textContent()
            if (label?.trim() == productName.trim())
            {
                return this.inventoryItems.nth(i)
            }
        }
        throw new Error(`Product "${productName}" not found in the inventory.`);
    }
}

