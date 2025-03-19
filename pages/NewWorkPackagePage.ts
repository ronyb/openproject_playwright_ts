import { expect, Locator, Page } from "@playwright/test";
import AbstractPage from "./AbstractPage";
import WorkPackagePage from "./WorkPackagePage";

export default class NewWorkPackagePage extends AbstractPage {
    
    private readonly subjectInput: Locator;
    private readonly descriptionInput: Locator;
    private readonly saveButon: Locator;

    constructor(page: Page) {
        super(page);
        this.subjectInput = page.locator("#wp-new-inline-edit--field-subject");
        this.descriptionInput = page.locator("[aria-label^='Rich Text Editor']");
        this.saveButon = page.locator("#work-packages--edit-actions-save");
    }

    async typeSubject(subject: string) {
        await this.subjectInput.fill(subject);
        return this;
    }

    async typeDescription(description: string) {
        await this.descriptionInput.fill(description);
        return this;
    }

    async clickSaveButton() : Promise<WorkPackagePage> {
        await this.saveButon.click();
        return WorkPackagePage.create(this.page);
    }

    override async assertInPage() {
        
        await this.page.waitForTimeout(3000);

        if (!await this.subjectInput.isVisible()) {
            await this.page.reload({waitUntil: "networkidle"});
        }

        await expect(this.subjectInput).toBeVisible();
    }
}