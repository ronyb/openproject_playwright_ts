import { Page } from "@playwright/test";

export default abstract class AbstractPage {

    protected page: Page;

    constructor(page: Page) {
        this.page = page;
        this.assertInPage();
    }

    abstract assertInPage();
}