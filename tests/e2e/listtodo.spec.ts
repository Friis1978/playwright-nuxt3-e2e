import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3001/');
  await page.getByRole('link', { name: 'Todo' }).click();
  await page.locator('body').click();
  await page.locator('body').click();

  await page.getByPlaceholder('Add todo').fill('hej arne');
  await page.getByPlaceholder('Add todo').press('Enter');
  await page.getByPlaceholder('Add todo').fill('vaske tøj');
  await page.getByPlaceholder('Add todo').press('Enter');
  await page.getByPlaceholder('Add todo').fill('gå til link');
  await page.getByPlaceholder('Add todo').press('Enter');
  await page.locator('li').filter({ hasText: 'gå til link' }).getByRole('button').click();
  await page.locator('li').filter({ hasText: 'vaske tøj' }).getByRole('button').click();
});