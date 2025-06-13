import { test, expect } from '@playwright/test';
import { LoginPage } from '../login.page';
import { InventoryPage } from '../inventory.page';
import { UserCredentials } from '../../types/credentials';

const standardUser: UserCredentials = {
  username: 'standard_user',
  password: 'secret_sauce',
};

test.describe('Inventory page', () => {
    test.beforeEach(async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.goto();
      await loginPage.login(standardUser.username, standardUser.password!);
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
      await expect(await inventoryPage.getCartCount()).toBe(1);
      
      await product?.removeFromCart();
      await expect(await inventoryPage.getCartCount()).toBe(0);
    }
  );
});
