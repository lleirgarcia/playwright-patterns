import { test as base } from '@playwright/test';
import { LoginPage } from './page-object/login.page';
import { UserCredentials } from './types/credentials';

const standardUser: UserCredentials = {
    username: 'standard_user',
    password: 'secret_sauce',
};

export const test = base.extend<{ forEachTest: void }>({
  forEachTest: [async ({ page }, use) => {
    await new Promise((res) => setTimeout(res, 2000));
    // This code runs before every test.
    await page.goto("/");
    const loginPage = new LoginPage(page);
    await loginPage.login(standardUser.username, standardUser.password!);
    await use();
    // This code runs after every test.
    console.log('Last URL:', page.url());
  }, { auto: true }],  // automatically starts for every test.
});