import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import Config from '../config';

test('OpenProject Test', async ({ page }) => {
    
    await page.goto(Config.baseUrl);
    let loginPage = new LoginPage(page);

    await loginPage.typeUsername(Config.username);
    await loginPage.typePassword(Config.password);
    
    let homePage = await loginPage.clickSignInButton();
    await homePage.clickSelectProjectButton();
    
    let projectOverviewPage = await homePage.clickProjectByName("Demo project");
    await projectOverviewPage.clickPlusButton();
    await projectOverviewPage.clickAddWorkPackeOfType("Task");
    
});