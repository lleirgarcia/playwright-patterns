import { Locator } from '@playwright/test';

export class ProductCard {
  private readonly cardLocator: Locator;
  private readonly productName: Locator;
  private readonly price: Locator;
  private readonly addToCartButton: Locator;
  private readonly removeToCartButton: Locator;

  constructor(cardLocator: Locator) {
    this.cardLocator = cardLocator;
    this.productName = cardLocator.locator('[data-test="inventory-item-name"]');
    this.price = cardLocator.locator('[data-test="inventory-item-price"]');
    this.addToCartButton = cardLocator.locator('[data-test*="add-to-cart"]');
    this.removeToCartButton = cardLocator.locator('[data-test*="remove"]');
}

  async getNameProduct(): Promise<string | null> {
    return await this.productName.textContent();
  }

  async getPrice(): Promise<string | null> {
    return await this.price.textContent();
  }

  async addToCart(): Promise<void> {
    await this.addToCartButton.click();
  }

  async removeFromCart(): Promise<void> {
    await this.removeToCartButton.click(); // Assuming the button toggles between add and remove
  }
}
