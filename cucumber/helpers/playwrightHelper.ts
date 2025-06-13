// helpers/playwrightHelper.ts
import config from '../../playwright.config.ts';
import { chromium } from 'playwright';

export async function launch() {
const browser = await chromium.launch({
    headless: config.use?.headless ?? false, 
    ...config.use?.launchOptions,
  });  const context = await browser.newContext({
    baseURL: config.use?.baseURL,
  });

  const page = await context.newPage();
  return { browser, context, page };
}
