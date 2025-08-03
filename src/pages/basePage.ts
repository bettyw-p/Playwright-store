import { Page } from "@playwright/test";

export abstract class BasePage {
  protected url = '';
  protected pageHeader = '';

  constructor (protected page: Page) {
    this.page = page;
  }

  //Locators

  //Actions
  async open(): Promise<void> {
    await this.page.goto(this.url);
  }

  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }
}