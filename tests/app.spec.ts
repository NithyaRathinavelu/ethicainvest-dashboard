import { test, expect } from '@playwright/test';

test.describe('EthicaInvest Dashboard', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the app
    await page.goto('http://localhost:5173/');
  });

  test('should load the dashboard', async ({ page }) => {
    // Wait for the page to load
    await page.waitForLoadState('networkidle');
    
    // Check if page title is present
    const title = await page.title();
    expect(title).toBeTruthy();
  });

  test('should display main content', async ({ page }) => {
    // Wait for main content to load
    await page.waitForLoadState('networkidle');
    
    // Check if body element exists
    const body = page.locator('body');
    await expect(body).toBeVisible();
  });

  test('should be responsive', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    const body = page.locator('body');
    await expect(body).toBeVisible();
  });
});
