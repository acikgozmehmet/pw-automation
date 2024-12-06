import { test as baseTest, expect } from '@playwright/test';
import { LoginPage} from '../pages/login-page';
import { InventoryPage} from '../pages/inventory-page';
import { CartPage} from '../pages/cart-page';
import { APITester} from './api-utility';

const test = baseTest.extend({
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    },
    inventoryPage: async ({page}, use) => {
        await use(new InventoryPage(page));
    },
    cartPage: async ({page}, use) => {
        await use(new CartPage(page));
    },
    apiTest: async ({request}, use) => {
        await use(new APITester(request));
    },
});

export { test, expect };