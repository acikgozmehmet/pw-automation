import {test, expect} from '../utilities/custom-fixtures';

test.describe('Inventory Page', () => {
    test('Inventory page should have "Swag Labs" as header', async ({inventoryPage, page}) => {
        await inventoryPage.goto();
        const header = await inventoryPage.primaryHeaderLabel.innerText();
        await expect(inventoryPage.primaryHeaderLabel).toBeVisible();
        await expect(header.trim()).toEqual('Swag Labs');
    });

    test('Should have 6 items on Inventory page', async ({inventoryPage}) => {
        await inventoryPage.goto();
        await expect(inventoryPage.inventoryItems).toHaveCount(6);
    });    

    test('Should have Backpack on Inventory page', async ({inventoryPage}) => {
        await inventoryPage.goto();
        const element = inventoryPage.inventoryItems.filter({ hasText: 'Backpack' });
    });    

    test('Inventory page footer should have "twitter" icon ', async ({inventoryPage}) => {
        await inventoryPage.goto();
        const icon = await inventoryPage.twitterIcon;
        await expect(icon).toBeVisible();
    });

    test('Inventory page footer should have "facebook" icon ', async ({inventoryPage}) => {
        await inventoryPage.goto();
        const icon = await inventoryPage.facebookIcon;
        expect(await icon.isVisible()).toBeTruthy();
    });

    test('Inventory page footer should have "linkedin" icon ', async ({inventoryPage}) => {
        await inventoryPage.goto();
        const icon = await inventoryPage.linkedinIcon;
        expect(await icon.isVisible()).toBeTruthy();
    });

    test('Inventory page should have "note" in the footer', async ({inventoryPage}) => {
        await inventoryPage.goto();
        const note = await inventoryPage.footerNote.innerText();
        await expect(inventoryPage.footerNote).toBeVisible();
        const expected = "© 2024 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy"
        await expect(note.trim()).toContain(expected)
    });

    test('footer should have dark background color @tag', async ({inventoryPage}) => {
        await inventoryPage.goto();
        await expect(inventoryPage.footer).toHaveCSS('background-color','rgb(19, 35, 34)');
    });

    test('Invetory page should have burger menu', async ({inventoryPage}) => {
        await inventoryPage.goto();
        await expect(inventoryPage.burgerMenu).toBeVisible();
    });

    test('Invetory page should have "Products" label', async ({inventoryPage}) => {
        await inventoryPage.goto();
        const label = await inventoryPage.secondaryHeaderTitle.innerText()
        expect(label).toContain('Products');
    });   

    test('Invetory page should have ShoppingCart visible', async ({inventoryPage}) => {
        await inventoryPage.goto();
        const shoppingCartVisible = await inventoryPage.shoppingCard.isVisible();
        expect(shoppingCartVisible).toBeTruthy();
    });   


    test('Invetory page should have Product Sort visible', async ({inventoryPage}) => {
        await inventoryPage.goto();
        const shoppingCartVisible = await inventoryPage.productSortContainer.isVisible();
        expect(shoppingCartVisible).toBeTruthy();
    });   

    test('Should select "Name (Z to A)" in Product Sort', async ({inventoryPage}) => {
        await inventoryPage.goto();
        let expectedLabelsInDescendingOrder: string[] = await inventoryPage.itemLabels.allTextContents()
        expectedLabelsInDescendingOrder.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()));

        await inventoryPage.productSortContainer.selectOption('Name (Z to A)');
        const labelsInDescendingOrder: string[] = await inventoryPage.itemLabels.allTextContents()

        expect(expectedLabelsInDescendingOrder).toEqual(labelsInDescendingOrder);
    });   


    test('Should select "Name (A to Z)" in Product Sort', async ({inventoryPage}) => {
        await inventoryPage.goto();
        let expectedLabelsInAscendingOrder: string[] = await inventoryPage.itemLabels.allTextContents()
        expectedLabelsInAscendingOrder.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

        await inventoryPage.productSortContainer.selectOption('Name (A to Z)');
        const labelsInAscendingOrder: string[] = await inventoryPage.itemLabels.allTextContents()

        expect(expectedLabelsInAscendingOrder).toEqual(labelsInAscendingOrder);
    });   


    test('Should sort porducts in ascending prices when "Price (low to high)" in Product Sort is selected', async ({inventoryPage}) => {
        await inventoryPage.goto();
        let pricesWithDollarSign: string[] = await inventoryPage.inventoryItems.locator('.inventory_item_price').allTextContents();
        const prices: number[] = pricesWithDollarSign.map(p => Number(p.replace('$','')))
        const expectedAscendingPrices = prices.sort((a,b) => a-b); 

        await inventoryPage.productSortContainer.selectOption('Price (low to high)');
        let actualPricesWithDollarSign: string[] = await inventoryPage.inventoryItems.locator('.inventory_item_price').allTextContents()
        const actualAscendingPrices: number[] = actualPricesWithDollarSign.map(p => Number(p.replace('$','')));

        expect(actualAscendingPrices).toEqual(expectedAscendingPrices);
    });   


    test('Should sort porducts in descending prices when "Price (high to low)" in Product Sort is selected', async ({inventoryPage}) => {
        await inventoryPage.goto();
        let pricesWithDollarSign: string[] = await inventoryPage.inventoryItems.locator('.inventory_item_price').allTextContents();
        const prices: number[] = pricesWithDollarSign.map(p => Number(p.replace('$','')))
        const expectedDescendingPrices = prices.sort((a,b) => b-a); 

        await inventoryPage.productSortContainer.selectOption('Price (high to low)');
        let actualPricesWithDollarSign: string[] = await inventoryPage.inventoryItems.locator('.inventory_item_price').allTextContents()
        const actualDescendingPrices: number[] = actualPricesWithDollarSign.map(p => Number(p.replace('$','')));

        expect(actualDescendingPrices).toEqual(expectedDescendingPrices);
    });   


    test('Should add one product to the cart', async ({inventoryPage}) => {
        await inventoryPage.goto();
        await inventoryPage.addProductToCart('Sauce Labs Bike Light');
        let numberLabel:number = Number(await inventoryPage.shoppingCard.textContent());
        expect(numberLabel).toEqual(1)
    });

    test('Should have "Remove" button in RED when an item is added on the cart', async ({inventoryPage}) =>{
        await inventoryPage.goto();
        await inventoryPage.addProductToCart('Sauce Labs Bike Light');
        const product = await inventoryPage.selectProduct('Sauce Labs Bike Light');
        const removeButton = product.locator('button', {hasText: 'Remove'});
        expect(await removeButton.isVisible()).toBeTruthy();
        expect(removeButton).toHaveCSS('color', 'rgb(226, 35, 26)')
    });

    test('Should have "Add to Cart" button when an item is removed from the cart', async ({inventoryPage}) =>{
        await inventoryPage.goto();
        await inventoryPage.addProductToCart('Sauce Labs Bike Light');
        const product = await inventoryPage.selectProduct('Sauce Labs Bike Light');
        const removeButton = product.locator('button', {hasText: 'Remove'});
        expect(await removeButton.isVisible()).toBeTruthy();
        await removeButton.click();
        const AddToCartButton = product.locator('button', {hasText: 'Add to cart'});
        expect(await AddToCartButton.isVisible()).toBeTruthy();
    });


});