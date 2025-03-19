import { Page } from "@playwright/test";

export default abstract class AbstractPage {

    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    abstract assertInPage(): Promise<void>;

    static async create<T extends AbstractPage>(this: new (page: Page) => T, page: Page): Promise<T> {
        const instance = new this(page);
        await instance.assertInPage();
        return instance;
    }
}