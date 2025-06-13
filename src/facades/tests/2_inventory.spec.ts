import { test, expect } from '@playwright/test';
import { UserCredentials } from '../../types/credentials';
import { AppFacade } from '../app.facade';

const standardUser: UserCredentials = {
    username: 'standard_user',
    password: 'secret_sauce',
};

test.describe('Inventory page', () => {
    test.beforeEach(async ({ page }) => {
        const app = new AppFacade(page);
        await app.loginAsUser(standardUser.username, standardUser.password!);
    });

    test('User can add an item to the cart', async ({ page }) => {
        const app = new AppFacade(page);
        await app.addProductToCartByName("Sauce Labs Backpack");
        await expect(await app.getCartCount()).toBe(1);
    });

    test('User can navigate to the cart', async ({ page }) => {
        const app = new AppFacade(page);
        await app.goToCart();
        await expect(page.url()).toContain('cart');
    });

    test('User can remove an item from the cart', async ({ page }) => {
        const app = new AppFacade(page);
        await app.addProductToCartByName("Sauce Labs Backpack");
        await expect(await app.getCartCount()).toBe(1);
        await app.removeProductFromCartByName("Sauce Labs Backpack");
        await expect(await app.getCartCount()).toBe(0);
    });
});
