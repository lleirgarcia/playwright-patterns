// src/facades/app.facade.ts
import { Page } from '@playwright/test';
import { LoginPage } from '../page-object/login.page';
import { InventoryPage } from '../page-object/inventory.page';

export class AppFacade {
  private loginPage: LoginPage;
  private inventoryPage: InventoryPage;

  constructor(private page: Page) {
    this.loginPage = new LoginPage(page);
    this.inventoryPage = new InventoryPage(page);
  }

  async loginAsUser(username: string, password: string) {
    await this.loginPage.goto();
    await this.loginPage.login(username, password);
  }

  async addProductToCartByName(productName: string) {
    const product = await this.inventoryPage.getProductCardByName(productName);
    if (product) {
      await product.addToCart();
    } else {
      console.error(`Product ${productName} not found`);
    }
  }

  async removeProductFromCartByName(productName: string) {
    const product = await this.inventoryPage.getProductCardByName(productName);
    if (product) {
      await product.removeFromCart();
    } else {
      console.error(`Product ${productName} not found`);
    }
  }
  async goToCart() {
    await this.inventoryPage.goToCart();
  }

  async getCartCount(): Promise<number> {
    return await this.inventoryPage.getCartCount();
  }

  async getFirstProductTitle(): Promise<string | null> {
    const cards = await this.inventoryPage.getAllProductCards();
    if (cards.length === 0) {
      console.error('No products found');
      return null;
    }
    return await cards[0].getNameProduct();
  }

  async getLoginErrorMessage(): Promise<string | null> {
    return await this.loginPage.getErrorMessage();
  }
}
