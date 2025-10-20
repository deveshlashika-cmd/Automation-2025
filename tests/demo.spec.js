const {test, expect} = require("@playwright/test")

test('Home',async ({page})=>{

    await page.goto("https://playwright.dev/")

      await expect(page).toHaveTitle(/Playwright/);

  
      await page.locator("//a[normalize-space()='Docs']").click();
      await page.pause();

});


