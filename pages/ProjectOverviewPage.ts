import { expect, Locator, Page } from "@playwright/test";
import AbstractPage from "./AbstractPage";
import NewWorkPackagePage from "./NewWorkPackagePage";

export default class ProjectOverviewPage extends AbstractPage {
    
    private readonly plusButton: Locator;

    constructor(page: Page) {
        super(page);
        this.plusButton = page.locator(".op-quick-add-menu--button");
    }

    async clickPlusButton() {
        await this.plusButton.click();
    }

    async clickAddWorkPackageOfType(workPackageType: string) : Promise<NewWorkPackagePage> {
        await this.page.locator(`a.op-menu--item-action:has-text('${workPackageType}')`).click();
        return NewWorkPackagePage.create(this.page);
    }

    override async assertInPage() {
        await expect(this.plusButton).toBeVisible();
    }
}