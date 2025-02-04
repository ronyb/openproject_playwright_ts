import { expect, Page } from "@playwright/test";
import AbstractPage from "./AbstractPage";

export default class ProjectOverviewPage extends AbstractPage {
    
    private static readonly plusButton = ".op-quick-add-menu--button";

    constructor(page: Page) {
        super(page);
    }

    async clickPlusButton() {
        await this.page.click(ProjectOverviewPage.plusButton);
    }

    async assertInPage() {
        await expect(this.page.locator(ProjectOverviewPage.plusButton)).toBeVisible();
    }

    async clickAddWorkPackeOfType(workPackageType: string) {
        await this.page.locator(`a.op-menu--item-action:has-text('${workPackageType}')`).click();
    }
}