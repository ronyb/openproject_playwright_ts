import { expect, Locator, Page } from "@playwright/test";
import AbstractPage from "./AbstractPage";

export default class WorkPackagePage extends AbstractPage {
    
    private readonly workPackageSubject: Locator;
    
    constructor(page: Page) {
        super(page);
        this.workPackageSubject = page.locator("[data-field-name='subject']");
    }

    async getWorkPackageSubject() : Promise<string> {
        return await this.workPackageSubject.innerText();
    }

    override async assertInPage() {
        await expect(this.workPackageSubject).toBeVisible();
    }
}