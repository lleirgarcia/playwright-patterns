// tests/facade.spec.ts
import { test, expect } from '@playwright/test';
import { AppFacade } from '../app.facade';

const credentials = {
    username: 'standard_user',
    password: 'secret_sauce'
};


const BASE_URL = 'https://www.saucedemo.com/';
const INVENTORY_URL = 'inventory.html';
const LOGIN_ERROR = 'Epic sadface: Username and password do not match any user in this service';

test.describe('Login Page', () => {
    test('Login y añadir producto con Facade', async ({ page }) => {
        const app = new AppFacade(page);
        await app.loginAsUser(credentials.username, credentials.password);
        await expect(page).toHaveURL(new RegExp(INVENTORY_URL));
    });


    test('User login with incorrect credentials shows error', async ({ page }) => {
         const app = new AppFacade(page);
        await app.loginAsUser("wrong_usernam", "wrond_password");
        await expect(await app.getLoginErrorMessage()).toBe(LOGIN_ERROR);
        await expect(page).toHaveURL(BASE_URL);
    });
});
