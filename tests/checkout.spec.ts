import { test, expect } from '@playwright/test';

test.describe('checkout', () => {
  test('applies a valid coupon', async ({ page }) => {
    await page.goto('/cart');
    await page.getByRole('textbox', { name: 'Coupon code' }).fill('SAVE10');
    await page.getByRole('button', { name: 'Apply' }).click();
    await expect(page.getByTestId('order-total')).toHaveText('$90.00');
  });

  test('places the order', async ({ page }) => {
    await page.goto('/checkout');
    await page.getByRole('button', { name: 'Place order' }).click();
    await expect(page.getByRole('heading', { name: 'Thank you' })).toBeVisible();
    await expect(page.getByTestId('order-status')).toBeVisible();
  });

  test('rejects an expired coupon', async ({ page }) => {
    await page.goto('/cart');
    await page.getByRole('textbox', { name: 'Coupon code' }).fill('OLD2024');
    await page.getByRole('button', { name: 'Apply' }).click();
    await expect(page.getByRole('alert')).toHaveText('This coupon has expired');
  });
});
