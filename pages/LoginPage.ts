import { expect, Locator, Page } from "@playwright/test";
import AbstractPage from "./AbstractPage";
import HomePage from "./HomePage";

export default class LoginPage extends AbstractPage {

    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly signInButton: Locator;

    constructor(page: Page) {
        super(page);
        this.usernameInput = page.locator("#username");
        this.passwordInput = page.locator("#password");
        this.signInButton = page.locator(".login-form--footer > [name='login']");
    }
    
    async typeUsername(username: string) : Promise<LoginPage> {
        await this.usernameInput.fill(username);
        return this;
    }

    async typePassword(password: string) : Promise<LoginPage> {
        await this.passwordInput.fill(password);
        return this;
    }

    async clickSignInButton() : Promise<HomePage> {
        await this.signInButton.click();
        return HomePage.create(this.page);
    }

    override async assertInPage() {
        await expect(this.usernameInput).toBeVisible();
    }
}