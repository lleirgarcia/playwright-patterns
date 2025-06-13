import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page-object/login.page';
import { InventoryPage } from '../../page-object/inventory.page';
import { UserFactory } from '../types/userFactory'; 

test.describe('Inventory page', () => {

  test.beforeEach(async ({ page }) => {
    const user = UserFactory.standard();
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(user.username, user.password);
  });

  test('User can add an item to the cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const product = await inventoryPage.getProductCardByName("Sauce Labs Backpack");
    await product?.addToCart();
    expect(await inventoryPage.getCartCount()).toBe(1);
  });

  test('User can navigate to the cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.goToCart();
    expect(page.url()).toContain('cart');
  });

  test('User can remove an item from the cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const product = await inventoryPage.getProductCardByName("Sauce Labs Backpack");
    await product?.addToCart();
    expect(await inventoryPage.getCartCount()).toBe(1);
    await product?.removeFromCart();
    expect(await inventoryPage.getCartCount()).toBe(0);
  });
});
