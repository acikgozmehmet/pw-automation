import { test as setup } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../.auth/user.json');
console.log(authFile);

setup('authenticate', async ({ page }) => {
    await page.goto(process.env.LOGIN_URL as string);
    await page.locator("input[data-test='username']").fill(`${process.env.QA_USERNAME}`);
    await page.locator("#password").fill(`${process.env.QA_PASSWORD}`);
    await page.locator("input[data-test='login-button']").click();
    await page.waitForLoadState('domcontentloaded');
    // await page.waitForTimeout(6000)
    await page.context().storageState({ path: authFile });
});