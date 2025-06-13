import { Before, After } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { PlaywrightWorld } from './world';

Before(async function (this: PlaywrightWorld) {
  this.browser = await chromium.launch();
  this.page = await this.browser.newPage();
});

After(async function (this: PlaywrightWorld) {
  await this.page.close();
  await this.browser.close();
});
