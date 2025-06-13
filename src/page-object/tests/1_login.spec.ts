import { test, expect } from '@playwright/test';
import { LoginPage } from '../login.page';
import { UserCredentials } from '../../types/credentials';

const standardUser: UserCredentials = {
    username: 'standard_user',
    password: 'secret_sauce',
};

const BASE_URL = 'https://www.saucedemo.com/';
const INVENTORY_URL = 'inventory.html';
const LOGIN_ERROR = 'Epic sadface: Username and password do not match any user in this service';

test.describe('Login Page', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('User login successful', async ({ page }) => {
        await loginPage.login(standardUser.username, standardUser.password!);
        await expect(page).toHaveURL(new RegExp(INVENTORY_URL));
    });

    test('User login with incorrect credentials shows error', async ({ page }) => {
        await loginPage.login('wrong_user', 'wrong_pass');
        await expect(loginPage.errorMessage).toHaveText(new RegExp(LOGIN_ERROR));
        await expect(page).toHaveURL(BASE_URL);
    });
});
