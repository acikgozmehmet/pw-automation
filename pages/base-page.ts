import { Page, Locator } from 'playwright';
import { BrowserUtility } from '../utilities/browser-utility';

/**
 * BasePage class represents common functionality for all page objects
 */
export class BasePage {
  protected page: Page;
  
  protected primaryHeader: Locator;
  protected burgerMenu: Locator;
  protected primaryHeaderLabel: Locator;
  protected shoppingCard: Locator;

  protected secondaryHeaderTitle: Locator;

  protected footer: Locator;
  protected twitterIcon: Locator;
  protected facebookIcon: Locator;
  protected linkedinIcon: Locator;
  protected footerNote: Locator;

  /**
   * Constructs a BasePage instance
   * @param page - The Playwright Page object
   */
  constructor(page: Page) {
    this.page = page;
    this.primaryHeader = this.page.locator(".primary_header")
    this.burgerMenu = this.page.locator("#react-burger-menu-btn")
    this.primaryHeaderLabel = this.page.locator(".header_label")
    this.shoppingCard = this.page.locator(".shopping_cart_link")

    this.secondaryHeaderTitle = this.page.locator("div[data-test='secondary-header'] >.title")


    this.footer = this.page.locator(".footer")
    this.twitterIcon = this.page.locator(".social_twitter")
    this.facebookIcon = this.page.locator(".social_facebook")
    this.linkedinIcon = this.page.locator(".social_linkedin")
    this.footerNote = this.page.locator(".footer_copy")
  }
  
  /**
   * Performs login operation using Basic Authentication
   * and navigates to the specified URL
   * @throws Will throw an error if login fails or page title doesn't match
   */
  // async login(): Promise<void> {
  //   const code = Buffer.from(`${process.env.QA_USERNAME}:${process.env.QA_PASSWORD}`).toString("base64");
  //   await this.page.setExtraHTTPHeaders({Authorization: `Basic ${code}`});
  //   // await this.page.goto(process.env.SEP_URL as string);
  //   await this.page.goto(process.env.URL as string);
  //   BrowserUtility.verify_title(this.page, 'Checkout | Cydeo');
  //   await this.page.waitForTimeout(600);
  // }
  
  /**
   * Waits for a specified amount of time.
   *
   * @async
   * @param {number} millisec - The number of milliseconds to wait.
   * @returns {Promise<void>} A promise that resolves after the specified timeout.
   * @throws {Error} If the page object is not initialized or if the waitForTimeout method fails.
   */  
  async waitForTimeout(millisec: number): Promise<void> {
    await this.page.waitForTimeout(millisec);
  }
}