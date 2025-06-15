import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../../src/page-object/login.page.ts';
import { PlaywrightWorld } from './world';

let loginPage: LoginPage;

Given('I am on the login page', async function (this: PlaywrightWorld) {
  loginPage = new LoginPage(this.page);
  await loginPage.goto();
});

When('I login as standard user', async function (this: PlaywrightWorld) {
  await loginPage.login('standard_user', 'secret_sauce');
});

When('I login with invalid credentials', async function (this: PlaywrightWorld) {
  await loginPage.login('wrong_user', 'wrong_pass');
});

Then('I should see the inventory page', async function (this: PlaywrightWorld) {
  await expect(this.page).toHaveURL(/inventory.html/);
});

Then('I should see login error', async function (this: PlaywrightWorld) {
  await expect(loginPage.errorMessage).toHaveText(/Username and password do not match/);
  await expect(this.page).toHaveURL('https://www.saucedemo.com/');
});
