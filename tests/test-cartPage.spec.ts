import {test, expect} from '../utilities/custom-fixtures';

test.describe('Cart Page', () => {
    test('Cart page should have "Swag Labs" as header', async ({inventoryPage, cartPage}) => {
        await inventoryPage.goto();
        await cartPage.goto();
        const header = await cartPage.primaryHeaderLabel.innerText();
        await expect(cartPage.primaryHeaderLabel).toBeVisible();
        expect(header.trim()).toEqual('Swag Labs');
    });

    test('Cart page should have "Continue Shopping" button', async ({inventoryPage, cartPage}) => {
        await inventoryPage.goto();
        await cartPage.goto();
        await expect(cartPage.continueShoppingButton).toBeVisible();
        await expect(cartPage.continueShoppingButton).toHaveText('Continue Shopping')
    });

    test('Cart page should have "Checkout" button in GREEN', async ({inventoryPage, cartPage}) => {
        await inventoryPage.goto();
        await inventoryPage.shoppingCard.click();
        // await cartPage.goto();
        await expect(cartPage.checkoutButton).toBeVisible();
        await expect(cartPage.checkoutButton).toHaveText('Checkout');

        await expect(cartPage.checkoutButton).toHaveCSS('background-color', 'rgb(61, 220, 145)')
    });


});