import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { validUser, invalidUser } from '../test-data/users';

test.describe('Login tests', () => {

  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.open();
    await expect(page).toHaveURL('https://www.converse.pl/login');
  });

  test('Verify successful login', async () => {
    await loginPage.fillData(validUser.email, validUser.password);
    await expect (loginPage.greetingUser).toBeVisible();
  });

  test('Verify failed login', async () => {
    await loginPage.fillData(invalidUser.email, invalidUser.password);
    await expect (loginPage.loginError).toBeVisible();
});
});