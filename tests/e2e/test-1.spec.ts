import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3001/');
  await page.getByRole('link', { name: 'Todo' }).click();
  await page.getByPlaceholder('Add todo').click();
  await page.getByPlaceholder('Add todo').fill('rasmus');
  await page.getByPlaceholder('Add todo').press('Enter');
  await page.getByPlaceholder('Add todo').click();
  await page.getByPlaceholder('Add todo').fill('alfred');
  await page.getByPlaceholder('Add todo').press('Enter');
});