import { test, expect } from '@playwright/test';
import { LoginPage } from '../../page-object/login.page';
import { UserFactory } from '../types/userFactory'; 

const BASE_URL = 'https://www.saucedemo.com/';
const INVENTORY_URL = 'inventory.html';

test.describe('Login Page', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {  
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('User login successful', async ({ page }) => {
        const user = UserFactory.standard();
        await loginPage.login(user.username, user.password);
        await expect(page).toHaveURL(new RegExp(INVENTORY_URL));
    });

    test('User login with incorrect credentials shows error', async ({ page }) => {
        const user = UserFactory.error();
        await loginPage.login(user.username, user.password);
        await expect(loginPage.errorMessage).toHaveText(user.errorMessage ?? '');
        await expect(page).toHaveURL(BASE_URL);
    });

       test('User locked login shows error', async ({ page }) => {
        const user = UserFactory.locked();
        await loginPage.login(user.username, user.password);
        await expect(loginPage.errorMessage).toHaveText(user.errorMessage ?? '');
        await expect(page).toHaveURL(BASE_URL);
    });
});
