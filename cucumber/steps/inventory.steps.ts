import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../../src/page-object/login.page.ts';
import { InventoryPage } from '../../src/page-object/inventory.page.ts';
import { PlaywrightWorld } from './world';

let inventoryPage: InventoryPage;
let loginPage: LoginPage;

Given('I am logged in as standard user', async function (this: PlaywrightWorld) {
  loginPage = new LoginPage(this.page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  inventoryPage = new InventoryPage(this.page);
});

When('I add {string} to the cart', async function (this: PlaywrightWorld, product: string) {
  const productCard = await inventoryPage.getProductCardByName(product);
  await productCard?.addToCart();
});

When('I navigate to the cart', async function (this: PlaywrightWorld) {
  await inventoryPage.goToCart();
});

When('I remove the item from the cart', async function (this: PlaywrightWorld) {
  const productCard = await inventoryPage.getProductCardByName('Sauce Labs Backpack');
  await productCard?.removeFromCart();
});

Then('the cart count should be {int}', async function (this: PlaywrightWorld, count: number) {
  expect(await inventoryPage.getCartCount()).toBe(67);
});

Then('the URL should contain {string}', async function (this: PlaywrightWorld, part: string) {
  expect(this.page.url()).toContain(part);
});
