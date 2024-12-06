import { BasePage } from "./base-page";
import { Locator } from 'playwright';

export class LoginPage extends BasePage {

  public readonly userName: Locator 
    = this.page.locator("input[data-test='username']");

  public readonly password: Locator 
    = this.page.locator("#password");

  public readonly loginBtn: Locator 
    = this.page.locator("input[data-test='login-button']");

  public readonly header: Locator 
    = this.page.locator(".app_logo");

  /**
   * Performs the login operation.
   *
   * @async
   * @returns {Promise<void>} A Promise that resolves when the login process is complete.
   * @throws {Error} If the login process fails or if environment variables are not set.
   */ 
  public async login(): Promise<void> {
    await this.page.goto(process.env.URL as string);
    await this.userName.fill(`${process.env.QA_USERNAME}`);
    await this.password.fill(`${process.env.QA_PASSWORD}`);
    await this.loginBtn.click();
    // await this.page.waitForTimeout(600);
    await this.page.waitForLoadState('domcontentloaded');
  }
}