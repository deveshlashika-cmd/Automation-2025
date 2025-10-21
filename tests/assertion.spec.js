const {test, expect} = require("@playwright/test")

test("AssertionTest",async ({page})=>{

    //open url
    await page.goto('https://demo.nopcommerce.com/register');

    //Verify page has proper url after launching the Open url (above)
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

});