import { test, expect, Page } from '@playwright/test';
import { step } from '../utils/step';

export class MainPage {
  constructor(private page: Page) {}

  public mainPageTitle = this.page.locator('#main-title');

  @step('Verify Main page header')
  async verifyMainPageHeader() {
    await expect(this.mainPageTitle).toBeVisible();
    await expect(this.mainPageTitle, {
      message: 'Main page header should contain "Automation Testing Practice"',
    }).toContainText('Automation Testing Practice');
  }
}
