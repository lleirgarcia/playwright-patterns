// steps/hooks.ts
import { Before, After } from '@cucumber/cucumber';
import { launch } from '../helpers/playwrightHelper.ts'; // adjust path
import { PlaywrightWorld } from './world.ts';

Before(async function (this: PlaywrightWorld) {
  const { browser, page } = await launch();
  this.browser = browser;
  this.page = page;
});

After(async function (this: PlaywrightWorld) {
  if (this.page) await this.page.close();
  if (this.browser) await this.browser.close();
});
