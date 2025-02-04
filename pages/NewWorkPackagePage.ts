import { expect, Page } from "@playwright/test";
import AbstractPage from "./AbstractPage";
import WorkPackagePage from "./WorkPackagePage";

export default class NewWorkPackagePage extends AbstractPage {
    
    private static readonly subjectInput = "#wp-new-inline-edit--field-subject";
    private static readonly descriptionInput = "[aria-label^='Rich Text Editor']";
    private static readonly saveButon = "#work-packages--edit-actions-save";

    constructor(page: Page) {
        super(page);
    }

    async typeSubject(subject: string) {
        await this.page.fill(NewWorkPackagePage.subjectInput, subject);
        return this;
    }

    async typeDescription(description: string) {
        await this.page.fill(NewWorkPackagePage.descriptionInput, description);
        return this;
    }

    async clickSaveButton() : Promise<WorkPackagePage> {
        await this.page.click(NewWorkPackagePage.saveButon);
        return new WorkPackagePage(this.page);
    }

    async assertInPage() {
        await this.page.waitForTimeout(1000);
        await this.page.reload();
        await expect(this.page.locator(NewWorkPackagePage.subjectInput)).toBeVisible();
    }
}