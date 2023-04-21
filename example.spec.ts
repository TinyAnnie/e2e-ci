import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('personio.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Personio/);
  await expect(page).toHaveURL("https://personio.com");

  await page.getByTestId('uc-accept-all-button').click();
  await page.getByRole('link', { name: 'Login' }).click();
});

test('get started link', async ({ page }) => {
  await page.goto('/https://playwright.dev');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

test.describe("navigation", () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("https://playwright.dev/");
  });

  test("main navigation", async ({ page }) => {
    // Assertions use the expect API.
    await expect(page).toHaveURL("https://playwright.dev/");
  });
});

test('numeric ranges', () => {
  expect(100).toBeWithinRange(90, 110);
  expect(101).not.toBeWithinRange(0, 100);
});
