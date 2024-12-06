import {test, expect} from '../utilities/custom-fixtures';

test.describe('Cart Page', () => {
    test('Cart page should have "Swag Labs" as header', async ({inventoryPage, cartPage}) => {
        await inventoryPage.goto();
        await cartPage.goto();
        const header = await cartPage.primaryHeaderLabel.innerText();
        await expect(cartPage.primaryHeaderLabel).toBeVisible();
        await expect(header.trim()).toEqual('Swag Labs');
        await inventoryPage.page.screenshot({path:'shots1/screenshot.png'});
    });

    test('Cart page should have "Continue Shopping" button ', async ({inventoryPage, cartPage}) => {
        await inventoryPage.goto();
        await cartPage.goto();
        await expect(cartPage.continueShoppingButton).toBeVisible();
        expect(await cartPage.continueShoppingButton.textContent()).toEqual('Continue Shopping')
    });

    test('Cart page should have "Checkout" button in GREEN', async ({inventoryPage, cartPage}) => {
        await inventoryPage.goto();
        await inventoryPage.shoppingCard.click();
        // await cartPage.goto();
        await expect(cartPage.checkoutButton).toBeVisible();
        expect(await cartPage.checkoutButton.textContent()).toEqual('Checkout');

        await expect(cartPage.checkoutButton).toHaveCSS('background-color', 'rgb(61, 220, 145)')
    });


});