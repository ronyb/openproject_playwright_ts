import { expect, Page } from "@playwright/test";
import AbstractPage from "./AbstractPage";
import HomePage from "./HomePage";

export default class LoginPage extends AbstractPage {

    private static readonly usernameInput = "#username";
    private static readonly passwordInput = "#password";
    private static readonly signInButton = ".login-form--footer > [name='login']";

    constructor(page: Page) {
        super(page);
    }
    
    async typeUsername(username: string) : Promise<LoginPage> {
        await this.page.fill(LoginPage.usernameInput, username);
        return this;
    }

    async typePassword(password: string) : Promise<LoginPage> {
        await this.page.fill(LoginPage.passwordInput, password);
        return this;
    }

    async clickSignInButton() : Promise<HomePage> {
        await this.page.click(LoginPage.signInButton);
        return new HomePage(this.page);
    }

    async assertInPage() {
        await expect(this.page.locator(LoginPage.usernameInput)).toBeVisible();
    }
}