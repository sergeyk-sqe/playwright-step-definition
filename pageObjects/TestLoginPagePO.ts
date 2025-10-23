import { expect, Page } from '@playwright/test';
import { step } from '../utils/step';

export class TestLoginPagePO {
  constructor(private page: Page) {}

  public lnkTestLoginPageBlock = this.page.locator('h3', { hasText: 'Test Login Page' });
  public testLoginPageHeader = this.page.locator('h1');
  public txtUsername = this.page.locator('#username');
  public txtPassword = this.page.locator('#password');
  public btnLogin = this.page.locator('#submit-login');
  public successMessage = this.page.locator('#flash');

  @step('Navigate to test login page and verify the title')
  async navigateToTestLoginPage() {
    await this.lnkTestLoginPageBlock.click();
    await expect(this.testLoginPageHeader).toContainText('Test Login page for Automation Testing Practice');
  }

  @step('Verify success login')
  async verifySuccessLogin(username: string, password: string) {
    await this.txtUsername.fill(username);
    await this.txtPassword.fill(password);
    await this.btnLogin.click();
    await expect(this.successMessage).toBeVisible();
    await expect(this.successMessage).toHaveText('You logged into a secure area!');
  }
}
