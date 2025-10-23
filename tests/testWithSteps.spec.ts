import { test } from '@playwright/test';
import { MainPage } from '../pageObjects/MainPagePO';
import { TestLoginPagePO } from '../pageObjects/TestLoginPagePO';

test('Test with steps', async ({ page }) => {
  const mainPage = new MainPage(page);
  const testLoginPage = new TestLoginPagePO(page);

  await page.goto('/');
  await mainPage.verifyMainPageHeader();
  await testLoginPage.navigateToTestLoginPage();
  await testLoginPage.verifySuccessLogin(process.env.USERNAME, process.env.PASSWORD);
});
