import { expect, Page } from "@playwright/test";
import AbstractPage from "./AbstractPage";

export default class WorkPackagePage extends AbstractPage {
    
    private static readonly workPackageSubject = "[data-field-name='subject']";
    
    constructor(page: Page) {
        super(page);
    }

    async getWorkPackageSubject() : Promise<string> {
        return await this.page.locator(WorkPackagePage.workPackageSubject).innerText();
    }

    async assertInPage() {
        expect((await this.getWorkPackageSubject()).length).toBeGreaterThan(1);
    }
}