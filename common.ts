import { Page } from '@playwright/test';
import Config from './config';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

export async function loginToOpenProject(page: Page) : Promise<HomePage> {

    await page.goto(Config.baseUrl);
    let loginPage = new LoginPage(page);

    await loginPage.typeUsername(Config.username);
    await loginPage.typePassword(Config.password);
    
    let homePage = await loginPage.clickSignInButton();
    return homePage;
}