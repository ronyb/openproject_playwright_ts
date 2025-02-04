import { expect, Page } from "@playwright/test";
import AbstractPage from "./AbstractPage";
import ProjectOverviewPage from "./ProjectOverviewPage";

export default class HomePage extends AbstractPage {

    private static readonly openProjectMainLogoOnTop = ".op-logo--link";
    private static readonly selectProjectButton = "#projects-menu";

    constructor(page: Page) {
        super(page);
    }

    async assertInPage() {
        await expect(this.page.locator(HomePage.openProjectMainLogoOnTop)).toBeVisible();
    }

    async clickSelectProjectButton() {
        await this.page.click(HomePage.selectProjectButton);
        return this;
    }

    async clickProjectByName(projectName: string) : Promise<ProjectOverviewPage> {
        await this.page.click(`//a[.//span[text()='${projectName}']]`);
        return new ProjectOverviewPage(this.page);
    }
}