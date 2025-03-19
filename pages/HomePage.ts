import { expect, Locator, Page } from "@playwright/test";
import AbstractPage from "./AbstractPage";
import ProjectOverviewPage from "./ProjectOverviewPage";

export default class HomePage extends AbstractPage {

    private readonly openProjectMainLogoOnTop: Locator;
    private readonly selectProjectButton: Locator;

    constructor(page: Page) {
        super(page);
        this.openProjectMainLogoOnTop = page.locator(".op-logo--link");
        this.selectProjectButton = page.locator("#projects-menu");
    }

    async clickSelectProjectButton() {
        await this.selectProjectButton.click();
        return this;
    }

    async clickProjectByName(projectName: string) : Promise<ProjectOverviewPage> {
        await this.page.click(`//a[.//span[text()='${projectName}']]`);
        return ProjectOverviewPage.create(this.page);
    }

    override async assertInPage() {
        await expect(this.openProjectMainLogoOnTop).toBeVisible();
    }
}