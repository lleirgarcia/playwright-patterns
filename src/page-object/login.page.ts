// src/pages/login.page.ts
import { Locator, Page } from '@playwright/test';

export class LoginPage {
    private readonly inventoryItemSelector: string = '[data-test="inventory-item"]';
    private readonly userInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    readonly errorMessage: Locator;
  
    constructor(private readonly page: Page) {
      this.page = page;
      this.userInput = page.locator('[data-test="username"]');
      this.passwordInput = page.locator('[data-test="password"]');
      this.loginButton = page.locator('[data-test="login-button"]');
      this.errorMessage = page.locator('[data-test="error"]');
    }

  async goto() {
    await this.page.goto('/',  {
    waitUntil: 'domcontentloaded',
    timeout: 10000,
  });
  }

  async login(username: string, password: string) {
    await this.userInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getErrorMessage(): Promise<string | null> {
    return this.errorMessage.textContent();
  }
}
