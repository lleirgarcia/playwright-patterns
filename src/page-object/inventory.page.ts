// src/pages/inventory.page.ts
import { Locator, Page } from '@playwright/test';
import { ProductCard } from './components/product-card.component';

export class InventoryPage {
  private readonly inventoryItemSelector: string = '[data-test="inventory-item"]';
  private readonly cartCount: Locator;
  private readonly cart: Locator;

  constructor(private readonly page: Page) {
    this.page = page;
    this.cartCount = page.locator('[data-test="shopping-cart-badge"]');
    this.cart = page.locator('[data-test="shopping-cart-link"]');
  }

   /**
   * Obtiene una lista de todos los ProductCard presentes en la página de inventario.
   * Cada ProductCard en la lista representa un producto individual.
   * @returns Una promesa que resuelve a una lista de objetos ProductCard.
   */
  async getAllProductCards(): Promise<ProductCard[]> {
    // Busca todos los elementos que coinciden con el selector de un item de inventario
    const allItemLocators = await this.page.locator(this.inventoryItemSelector).all();
    
    // Mapea cada Locator encontrado a una nueva instancia de ProductCard
    return allItemLocators.map(locator => new ProductCard(locator));
  }

  async getProductCardByName(itemName: string): Promise<ProductCard | null> {
    const allProductCards = await this.getAllProductCards();
    for (const productCard of allProductCards) {
      const currentName = await productCard.getNameProduct(); 
      if (currentName === itemName) {
        return productCard; 
      }
    }
    return null; 
  }

  async getCartCount(): Promise<number> {
    const countText = await this.cartCount.textContent({ timeout: 500 }).catch(() => null);
    return countText ? parseInt(countText, 10) : 0;
  }

  async goToCart(): Promise<void> {
    await this.cart.click();
  }
}
